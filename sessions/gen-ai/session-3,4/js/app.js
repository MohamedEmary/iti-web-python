function app() {
  return {
    apiKey: localStorage.getItem("apiKey") || "",
    userInput: "",
    messages: [],
    isLoading: false,
    showSettings: false,
    conversations: [],
    currentConversation: null,
    selectedFiles: [], // Store selected files

    async init() {
      // Try to load conversations
      await this.loadConversations();

      // Auto-show settings if no API key
      if (!this.apiKey) {
        this.showSettings = true;
      }
    },

    async saveApiKey() {
      if (!this.apiKey) {
        alert("Please enter a valid API key");
        return;
      }

      try {
        const response = await fetch("/api/encrypt-key", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ apiKey: this.apiKey }),
        });

        const data = await response.json();
        localStorage.setItem("apiKey", data.encryptedKey);

        this.showSettings = false;
        alert("API key saved successfully!");
      } catch (error) {
        console.error("Error saving API key:", error);
        alert("Error saving API key. Please try again.");
      }
    },

    // Update the sendMessage function to properly add files to messages
    async sendMessage() {
      if (
        (!this.userInput.trim() && this.selectedFiles.length === 0) ||
        !this.apiKey ||
        this.isLoading
      )
        return;

      const userMessage = this.userInput.trim();
      this.userInput = "";

      // Add user message to the chat with file previews
      this.messages.push({
        role: "user",
        content: userMessage,
        files: this.selectedFiles.map((file) => ({
          name: file.name,
          type: file.type,
          preview: file.preview,
          path: file.preview, // For user messages, use the preview as path
        })),
      });

      // Make a copy of selected files for the request
      const filesForRequest = [...this.selectedFiles];
      this.selectedFiles = [];
      this.resetFileInput();

      // Scroll to bottom
      this.scrollToBottom();

      this.isLoading = true;

      try {
        // Create FormData for multipart request
        const formData = new FormData();
        formData.append("apiKey", this.apiKey);
        formData.append("prompt", userMessage);
        if (this.currentConversation) {
          formData.append("conversationId", this.currentConversation);
        }

        // Append files to form data - Using "files" as the field name
        filesForRequest.forEach((file) => {
          formData.append("files", file.data);
        });

        const response = await fetch("/api/chat", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to get response from API");
        }
        const data = await response.json();

        // Add AI response to the chat with any returned files
        this.messages.push({
          role: "assistant",
          content: data.reply,
          files: data.files || [], // Add any files returned from API
        });

        // If this is a new conversation, set the current conversation ID
        if (!this.currentConversation) {
          this.currentConversation = data.chatId;
          // Refresh conversations list
          await this.loadConversations();
        }

        // Scroll to bottom
        this.scrollToBottom();
      } catch (error) {
        console.error("Error:", error);
        this.messages.push({
          role: "assistant",
          content:
            "Sorry, there was an error processing your request. Please check your API key and try again.",
        });
      } finally {
        this.isLoading = false;
      }
    },

    // Add these new methods for file handling
    handleFileUpload(event) {
      const files = event.target.files;
      if (!files || files.length === 0) return;

      Array.from(files).forEach((file) => {
        // Check file type and size
        if (file.size > 10 * 1024 * 1024) {
          // 10MB limit
          alert(`File ${file.name} is too large. Maximum size is 10MB.`);
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedFiles.push({
            name: file.name,
            type: file.type,
            size: file.size,
            data: file, // Store the actual file object
            preview: file.type.startsWith("image/") ? e.target.result : null,
          });
        };

        if (file.type.startsWith("image/")) {
          reader.readAsDataURL(file);
        } else {
          reader.readAsArrayBuffer(file);
        }
      });
    },

    removeFile(index) {
      this.selectedFiles.splice(index, 1);
    },

    resetFileInput() {
      const fileInput = document.getElementById("file-upload");
      if (fileInput) fileInput.value = "";
    },

    async loadConversations() {
      try {
        const response = await fetch("/api/conversations");
        if (!response.ok) {
          throw new Error("Failed to load conversations");
        }

        this.conversations = await response.json();
      } catch (error) {
        console.error("Error loading conversations:", error);
      }
    },

    async loadConversation(conversationId) {
      try {
        this.isLoading = true;
        this.currentConversation = conversationId;

        const response = await fetch(`/api/conversation/${conversationId}`);
        if (!response.ok) {
          throw new Error("Failed to load conversation");
        }

        this.messages = await response.json();

        // Scroll to bottom after loading messages
        this.scrollToBottom();
      } catch (error) {
        console.error("Error loading conversation:", error);
        alert("Error loading conversation");
      } finally {
        this.isLoading = false;
      }
    },

    newConversation() {
      this.currentConversation = null;
      this.messages = [];
    },

    // Update formatMessage to handle files
    formatMessage(text, files) {
      // First format the text (existing code)
      let formattedText = text;

      // Simple Markdown formatting
      // Convert code blocks (```)
      formattedText = formattedText.replace(
        /```(\w*)([\s\S]*?)```/g,
        '<pre><code class="language-$1">$2</code></pre>'
      );

      // Convert inline code (`)
      formattedText = formattedText.replace(/`([^`]+)`/g, "<code>$1</code>");

      // Convert bold (**text**)
      formattedText = formattedText.replace(
        /\*\*([^*]+)\*\*/g,
        "<strong>$1</strong>"
      );

      // Convert italic (*text*)
      formattedText = formattedText.replace(/\*([^*]+)\*/g, "<em>$1</em>");

      // Convert URLs to links
      formattedText = formattedText.replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank">$1</a>'
      );

      // Convert new lines to <br>
      formattedText = formattedText.replace(/\n/g, "<br>");

      return formattedText;
    },

    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString();
    },

    scrollToBottom() {
      setTimeout(() => {
        const container = document.getElementById("message-container");
        container.scrollTop = container.scrollHeight;
      }, 100);
    },
  };
}
