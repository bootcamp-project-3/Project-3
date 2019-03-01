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
  app.get("/api/signin", function(req, res) {
    User.findOne({ email: req.body.email }, function(err, user) {
      if (err) {
        console.log(err);
      } else {
        if (user === null) {
          res.send("No user exists with this email.");
          return;
        } else {
          console.log(user);
          bcrypt.compare(req.body.password, user.password, function(
            err,
            result
          ) {
            if (err) {
              console.log(err);
            }
            if (!result) {
              res.sendStatus(401);
              return;
            }
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
    if (!req.session.user) {
      res.sendStatus(401);
      return;
    }
    Post.create(req.body, function(err, post) {
      if (err) {
        console.log(err);
      } else {
        console.log(post);
        res.sendStatus(200);
      }
    });
  });
  app.get("/api/posts", function(req, res) {
    if (!req.session.user) {
      res.sendStatus(401);
      return;
    }
    else{
      Post.find(function(err, posts){
        if(err){
          console.log(err);
        }
        res.send(posts);
      });
    }
  });
};
