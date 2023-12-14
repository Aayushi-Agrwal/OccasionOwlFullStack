const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    teamName: { type: String, trim: true },
    eventsName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    teamAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    eventOrganiser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
