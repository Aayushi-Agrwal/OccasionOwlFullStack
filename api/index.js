const express = require("express");
const app = express();
const cors = require("cors");
const { chats } = require("./data/data");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Get request");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(8800, console.log("Server is running on port 8800"));
