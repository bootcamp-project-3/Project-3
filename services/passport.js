require('dotenv').config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

let ClientID = process.env.ClientID;

let ClientSecret = process.env.ClientSecret;

passport.use(
    new GoogleStrategy({
            clientID: ClientID,
            clientSecret: ClientSecret,
            callbackURL: "/auth/google/callback",
        },
        (accessToken, refreshToken, profile, done) => {
            console.log("access token", accessToken);
            console.log("refresh token", refreshToken);
            console.log("profile:", profile);
        }
    )
);

