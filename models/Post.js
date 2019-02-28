const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema ({
    user: String,
    userId: String,
    title: String,
    content: String,
    createdAt: Date.now(),
})