const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/project3";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to db!");
});
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: String,
    trim: true,
    required: "Username is required.",
  },
  userId: {
    type: String,
    trim: true,
    required: "ID is required.",
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
