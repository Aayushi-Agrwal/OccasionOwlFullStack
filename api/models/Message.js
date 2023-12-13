// const mongoose = require("mongoose");

// const MessageSchema = new mongoose.Schema(
//   {
//     sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     text: String,
//     file: String,
//   },
//   { timestamps: true }
// );

// const MessageModel = mongoose.model("Message", MessageSchema);

// module.exports = MessageModel;

const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
