const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: "Sender ID is required",
  },
  senderName: {
    type: String,
    required: "Sender name is required.",
  },
  recipientId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: "RecipientID is required.",
  },
  recipientName: {
    type: String,
    required: "Recipient name is required.",
  },
  content: {
    type: String,
    required: "Content is required.",
  },
  unread: {
    type: Boolean,
    default: true,
  },
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
