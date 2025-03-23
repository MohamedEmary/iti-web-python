const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./database");
const crypto = require("crypto-js");
const axios = require("axios");
const multer = require("multer"); // Add this for file uploads
const fs = require("fs");
const path = require("path");

dotenv.config({ path: "./.env" });
console.log("Encryption key:", process.env.ENCRYPTION_KEY); // Add this line

const app = express();
const PORT = process.env.PORT || 3000;

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("./"));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Encryption key (should be in .env file)
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "your-encryption-key";

// Initialize database
db.init();

// API Routes
app.post("/api/chat", upload.array("files", 5), async (req, res) => {
  try {
    const { apiKey, prompt, conversationId } = req.body;
    const files = req.files || [];

    // Decrypt API key if it's from storage
    let googleApiKey = apiKey;
    if (apiKey.startsWith("encrypted:")) {
      const encryptedKey = apiKey.replace("encrypted:", "");
      googleApiKey = crypto.AES.decrypt(encryptedKey, ENCRYPTION_KEY).toString(
        crypto.enc.Utf8
      );
    }

    // Prepare request to Gemini API
    const requestData = {
      contents: [
        {
          role: "user",
          parts: [],
        },
      ],
    };

    // Add text prompt if provided
    if (prompt) {
      requestData.contents[0].parts.push({ text: prompt });
    }

    // Add images to the request
    for (const file of files) {
      if (file.mimetype.startsWith("image/")) {
        const fileData = fs.readFileSync(file.path);
        const base64Data = fileData.toString("base64");

        requestData.contents[0].parts.push({
          inline_data: {
            mime_type: file.mimetype,
            data: base64Data,
          },
        });
      } else {
        // For non-image files, mention them in the prompt
        const fileDescription = `[File attached: ${file.originalname}, type: ${file.mimetype}]`;
        if (
          requestData.contents[0].parts.length > 0 &&
          requestData.contents[0].parts[0].text
        ) {
          requestData.contents[0].parts[0].text += "\n" + fileDescription;
        } else {
          requestData.contents[0].parts.unshift({ text: fileDescription });
        }
      }
    }

    // Call Google LLM API
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent",
      requestData,
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": googleApiKey,
        },
      }
    );

    const reply = response.data.candidates[0].content.parts[0].text;

    // In your /api/chat route handler, update the response:
    // Process file paths for storing in database
    const fileUrls = files.map(file => ({
      name: file.originalname,
      path: `/uploads/${file.filename}`,
      type: file.mimetype
    }));
    
    // Save to database
    const chatId = await db.saveChat(
      conversationId || crypto.lib.WordArray.random(16).toString(),
      prompt,
      reply,
      fileUrls
    );
    
    res.json({ 
      reply, 
      chatId,
      files: fileUrls // This ensures file info is sent back to client
    });
  } catch (error) {
    console.error("Error in /api/chat:");
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }

    res.status(500).json({ error: error.message });
  }
});

app.post("/api/encrypt-key", (req, res) => {
  try {
    const { apiKey } = req.body;
    const encryptedKey = crypto.AES.encrypt(apiKey, ENCRYPTION_KEY).toString();
    res.json({ encryptedKey: `encrypted:${encryptedKey}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/conversations", async (req, res) => {
  try {
    const conversations = await db.getConversations();
    res.json(conversations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/conversation/:id", async (req, res) => {
  try {
    const messages = await db.getConversationMessages(req.params.id);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
