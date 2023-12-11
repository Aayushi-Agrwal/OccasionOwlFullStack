const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const ws = require("ws");
const User = require("./models/User");
const Message = require("./models/Message");
const admin = require("firebase-admin");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) throw err;
});

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    // Your Firebase Admin SDK credentials here
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

// Use Firebase authentication middleware
app.use(async (req, res, next) => {
  const idToken = req.headers.authorization;
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
});

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.get("/messages/:userId", async (req, res) => {
  const { userId } = req.params;
  const ourUserId = req.user.uid;
  const messages = await Message.find({
    sender: { $in: [userId, ourUserId] },
    recipient: { $in: [userId, ourUserId] },
  }).sort({ createdAt: 1 });
  res.json(messages);
});

// Other routes...

const server = app.listen(4040);

const wss = new ws.WebSocketServer({ server });
wss.on("connection", (connection, req) => {
  // WebSocket logic...

  connection.on("message", async (message) => {
    // WebSocket message handling...

    if (recipient && (text || file)) {
      const messageDoc = await Message.create({
        sender: connection.userId,
        recipient,
        text,
        file: file ? filename : null,
      });

      // Notify other clients...
    }
  });

  // Notify everyone about online people (when someone connects)...
});
