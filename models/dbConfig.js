const config = function() {
  const mongoose = require("mongoose");
  const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/project3";

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("Connected to db!");
  });
  const Schema = mongoose.Schema;
};

module.exports = config;
