const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("/models/User");
dotenv.config();

const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl);

app.get("/test", (req, res) => {
  res.join("test ok");
});

app.post("/register", (req, res) => {});
app.listen(4040);
