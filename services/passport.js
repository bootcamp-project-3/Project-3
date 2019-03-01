const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require('dotenv').config();

let clientID = process.env.ClientID;

let clientSecret = process.env.ClientSecret;

passport.use(
    new GoogleStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "/auth/google/callback",
        },
        (accessToken, refreshToken, profile, done) => {
            console.log("access token", accessToken);
            console.log("refresh token", refreshToken);
            console.log("profile:", profile);
        }
    )
);