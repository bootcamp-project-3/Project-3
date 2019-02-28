const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
<<<<<<< HEAD
   app.use(express.static("client/build"))};


// Connect app to mongo db
const MONGODB_URI =
   process.env.MONGODB_URI || "mongodb://localhost/neighbor-app";
=======
  app.use(express.static("client/build"));
}
// Connect app to mongo db
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/neighbor-app";
>>>>>>> 2392f98d20abe55e4b3da8d62b9ed14210cb74fc
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Define API routes here
require("./routes/api-routes.js")(app);

<<<<<<< HEAD
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// };

passport.use(new GoogleStrategy({
   clientID: keys.googleClientID,
   clientSecret: keys.googleClientSecret,
   callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
   console.log('access token', accessToken);
   console.log('refresh token', refreshToken);
   console.log('profile:', profile);
}
)

);

app.get(
   '/auth/google',
   passport.authenticate('google',{
   scope: ['profile', 'email']
})
);

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT, () => {
   console.log(`🌎 ==> API server now on port ${PORT}!`)
=======
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
>>>>>>> 2392f98d20abe55e4b3da8d62b9ed14210cb74fc
});
