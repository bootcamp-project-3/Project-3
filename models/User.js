const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    email: String,
    zip: String,
    created: Date.now(),
    password: String,
});