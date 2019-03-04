const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

module.exports = function(app) {
  // TODO: Add security layer to authorize post request, perhaps captcha?
  // * Adds new user to db
  app.post("/api/users", function(req, res) {
    // Searches db for input email
    User.findOne({ email: req.body.email }, function(err, user) {
      if (err) {
        console.log(err);
      } else {
        // If no duplicates present
        if (user === null) {
          // Hash password
          bcrypt.hash(req.body.password, 10, function(err, hash) {
            if (err) {
              console.log(err);
            } else {
              req.body.password = hash;
              // Then add to db
              User.create(req.body, function(err, post) {
                if (err) {
                  console.log(err);
                } else {
                  console.log(post);
                  req.session.user = post._id;
                }
                res.sendStatus(200);
              });
            }
          });
          // Otherwise escape
        } else {
          // TODO: Add functionality to send a response to the frontend if duplicate is present
          res.end();
        }
      }
    });
  });
  // *Sign in request
  app.post("/api/signin", function(req, res) {
    User.findOne({ email: req.body.email }, function(err, user) {
      if (err) {
        console.log(err);
      } else {
        // Checks to see if there is a user with the submitted email
        if (user === null) {
          console.log(user);
          res.sendStatus(401);
          return;
        } else {
          // If email matches to valid user, compare input password to hased password stored
          console.log(user);
          bcrypt.compare(req.body.password, user.password, function(
            err,
            result
          ) {
            if (err) {
              console.log(err);
            }
            // If bad password, send 401
            if (!result) {
              res.sendStatus(401);
              return;
            }
            // If good, allow assign session and send code 200
            if (result) {
              req.session.user = user._id;
              res.sendStatus(200);
            }
          });
        }
      }
    });
  });
  // * Adds new post to db
  app.post("/api/posts", function(req, res) {
    // Checks for a session, if none return 401
    // if (!req.session.user) {
    //   res.sendStatus(401);
    //   return;
    // }
    // If signed in, create new post with req data
    Post.create(req.body, function(err, post) {
      if (err) {
        console.log(err);
      } else {
        console.log(post);
        res.sendStatus(200);
      }
    });
  });
  // * Get session data
  app.get("/api/session", function(req, res) {
    res.send(req.session);
  });
  // * Gets the last 10 posts from the db if the user is signed in
  app.get("/api/posts", function(req, res) {
    // Checks for session, if none, return 401
    // if (!req.session.user) {
    //   res.sendStatus(401);
    //   return;
    // } else {
    // If signed in, return last 10 posts
    const find = Post.find()
      .sort({ createdAt: -1 })
      .limit(10);
    find.exec(function(err, posts) {
      if (err) {
        console.log(err);
      }
      res.send(posts);
    });
    // }
  });
};
