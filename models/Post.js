const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  userId: {
    type: String,
    trim: true,
    required: "ID is required.",
  },
  name: {
    type: String,
    trim: true,
    required: "Username is required"
  },
  title: {
    type: String,
    trim: true,
    required: "Post title is required.",
  },
  content: {
    type: String,
    trim: true,
    required: "Post cannot be empty.",
  },
  location: {
    type: String,
    trim: true,
    required: "A location is required"
  },
  category: {
    type: String,
    trim: true,
    default: "General"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
