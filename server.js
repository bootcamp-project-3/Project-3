const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");

const secret = process.env.SESSION_SECRET || "testsecret";
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Connect app to mongo db
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/neighbor-app";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Middleware
app.use(session({ secret: secret, resave: false, saveUninitialized: true }));

// Define API routes here
require("./routes/api-routes.js")(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
