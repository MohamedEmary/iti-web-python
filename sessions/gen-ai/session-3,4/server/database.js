const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "../database/chats.db");
var db = new sqlite3.Database(dbPath);

async function saveChat(conversationId, userMessage, aiResponse, files = []) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO messages (conversation_id, role, content, files, timestamp) 
       VALUES (?, ?, ?, ?, datetime('now'))`,
      [
        conversationId,
        "user",
        userMessage,
        JSON.stringify(files || []),
        Date.now(),
      ],
      function (err) {
        if (err) return reject(err);

        db.run(
          `INSERT INTO messages (conversation_id, role, content, timestamp) 
           VALUES (?, ?, ?, datetime('now'))`,
          [conversationId, "assistant", aiResponse, Date.now()],
          function (err) {
            if (err) return reject(err);
            resolve(conversationId);
          }
        );
      }
    );
  });
}

// Add during database initialization
function init() {
  db = new sqlite3.Database("./database/chats.db", (err) => {
    if (err) {
      console.error("Error opening database:", err.message);
    } else {
      console.log("Connected to the SQLite database.");

      // Create tables if they don't exist
      db.run(`CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        conversation_id TEXT NOT NULL,
        role TEXT NOT NULL,
        content TEXT NOT NULL,
        files TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      )`);

      // Create an index on conversation_id for faster queries
      db.run(`CREATE INDEX IF NOT EXISTS idx_messages_conversation_id 
              ON messages(conversation_id)`);
    }
  });
}

async function saveChat(conversationId, prompt, reply) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Check if conversation exists
      db.get(
        "SELECT id FROM conversations WHERE id = ?",
        [conversationId],
        (err, row) => {
          if (err) return reject(err);

          // If conversation doesn't exist, create it
          if (!row) {
            db.run(
              "INSERT INTO conversations (id) VALUES (?)",
              [conversationId],
              (err) => {
                if (err) return reject(err);

                // Insert user message
                db.run(
                  "INSERT INTO messages (conversation_id, role, content) VALUES (?, ?, ?)",
                  [conversationId, "user", prompt],
                  (err) => {
                    if (err) return reject(err);

                    // Insert assistant message
                    db.run(
                      "INSERT INTO messages (conversation_id, role, content) VALUES (?, ?, ?)",
                      [conversationId, "assistant", reply],
                      (err) => {
                        if (err) return reject(err);
                        resolve(conversationId);
                      }
                    );
                  }
                );
              }
            );
          } else {
            // Conversation exists, just add the messages
            db.run(
              "INSERT INTO messages (conversation_id, role, content) VALUES (?, ?, ?)",
              [conversationId, "user", prompt],
              (err) => {
                if (err) return reject(err);

                db.run(
                  "INSERT INTO messages (conversation_id, role, content) VALUES (?, ?, ?)",
                  [conversationId, "assistant", reply],
                  (err) => {
                    if (err) return reject(err);
                    resolve(conversationId);
                  }
                );
              }
            );
          }
        }
      );
    });
  });
}

// Update getConversation or similar function to include files
async function getConversation(conversationId) {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT * FROM messages WHERE conversation_id = ? ORDER BY timestamp",
      [conversationId],
      (err, rows) => {
        if (err) return reject(err);

        // Process rows to include files
        const messages = rows.map((row) => {
          let files = [];
          try {
            if (row.files) {
              files = JSON.parse(row.files);
            }
          } catch (e) {
            console.error("Error parsing files JSON:", e);
          }

          return {
            role: row.role,
            content: row.content,
            files: files,
          };
        });

        resolve(messages);
      }
    );
  });
}

async function getConversationMessages(conversationId) {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT role, content, timestamp FROM messages WHERE conversation_id = ? ORDER BY id ASC",
      [conversationId],
      (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      }
    );
  });
}

module.exports = {
  init,
  saveChat,
  getConversationMessages,
};
