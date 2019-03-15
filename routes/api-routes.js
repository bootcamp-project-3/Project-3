const User = require("../models/User");
const Post = require("../models/Post");
const Message = require("../models/Message");
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
        } else if (user) {
          res.status(401).send("A user with this email already exists!");
        }
      }
    });
  });
  // *Sign in request
  app.post("/api/signin", function(req, res) {
    User.findOne({ email: req.body.email }, function(err, user) {
      console.log(req.body);
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
            // If good, assign session and send code 200
            if (result) {
              req.session.user = user._id;
              req.session.loc = user.zip;
              req.session.name = user.name;
              console.log(req.session.user);
              res.sendStatus(200);
            }
          });
        }
      }
    });
  });
  // * Updates user profile
  app.put("/api/users", function(req, res) {
    const userUpdate = {
      name: req.body.name,
      email: req.body.email,
      zip: req.body.zip,
    };
    if (!req.session.user) {
      res.sendStatus(401);
      return;
    } else {
      if (
        userUpdate.name === undefined ||
        userUpdate.email === undefined ||
        userUpdate.zip === undefined
      ) {
        console.log("Empty data!");
        res.sendStatus(401);
      }
      User.update({ _id: req.body.userId }, userUpdate, function(err, user) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          console.log(user);
          res.sendStatus(200);
        }
      });
    }
  });
  // * Update password
  app.put("/api/users/password", function(req, res) {
    if (!req.session.user) {
      res.sendStatus(401);
      return;
    } else {
      User.findOne({ _id: req.body.userId }, function(err, user) {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          console.log(user);
          bcrypt.compare(req.body.password, user.password, function(
            err,
            result
          ) {
            if (err) {
              console.log(err);
              res.sendStatus(500);
            } else if (!result) {
              console.log(result);
              res.sendStatus(401);
            } else if (result) {
              let newPassword = "";
              bcrypt.hash(req.body.newPassword, 10, function(err, hash) {
                if (err) {
                  console.log(err);
                  res.sendStatus(500);
                } else {
                  newPassword = hash;
                }
              });
              User.updateOne(
                { _id: req.body.userId },
                { password: newPassword },
                function(err, result) {
                  if (err) {
                    console.log(err);
                    res.sendStatus(500);
                  } else {
                    console.log(result);
                    res.sendStatus(200);
                  }
                }
              );
            }
          });
        }
      });
    }
  });
  // * Adds new post to db
  app.post("/api/posts", function(req, res) {
    // Checks for a session, if none return 401
    if (!req.session.user) {
      res.sendStatus(401);
      return;
    }
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
    console.log(req.session);
    if (!req.session.user) {
      res.status(401).send("No user is signed in on this session");
    } else {
      console.log(`Session cookie is ${req.session.user}`);
      res.send(JSON.stringify({ data: req.session }));
    }
  });
  // * Gets the last 10 posts from the db if the user is signed in
  app.get("/api/posts/:number/:location", function(req, res) {
    // Checks for session, if none, return 401
    const n = Number(req.params.number);
    const l = req.params.location;
    console.log(l);
    if (!req.session.user) {
      res.sendStatus(401);
      return;
    } else {
      // If signed in, return last 10 posts
      const find = Post.find({ location: l })
        .sort({ createdAt: -1 })
        .limit(n);
      find.exec(function(err, posts) {
        if (err) {
          console.log(err);
        }
        res.send(JSON.stringify(posts));
      });
    }
  });
  // *Creates a new message
  app.post("/api/messages", function(req, res) {
    // Assigning request body to a pre built object to interface with mongoose
    const newMessage = {
      senderId: req.body.senderId,
      senderName: req.body.senderName,
      recipientId: req.body.recipientId,
      recipientName: req.body.recipientName,
      subject: req.body.subject,
      content: req.body.content,
    };
    console.log(newMessage);
    // Mongoose message creation
    Message.create(newMessage, function(err, post) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        const messageId = post._id;
        // Finds sender and adds messageId to their object
        User.findOneAndUpdate(
          {
            _id: newMessage.senderId,
          },
          { $push: { messages: messageId } },
          function(err) {
            if (err) {
              res.sendStatus(500);
              console.log(err);
            } else {
              // Finds recipient and adds messageId to their object
              User.findOneAndUpdate(
                {
                  _id: newMessage.recipientId,
                },
                { $push: { messages: messageId } },
                function(err) {
                  if (err) {
                    res.sendStatus(500);
                    console.log(err);
                  } else {
                    console.log("Message successfully added!");
                    res.sendStatus(200);
                  }
                }
              );
            }
          }
        );
      }
    });
  });
  // *Finds all recieved messages by id
  app.get("/api/messages/inbox/:id", function(req, res) {
    const user = req.params.id;
    Message.find({ recipientId: user }, function(err, messages) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log("Received request for inbox.");
        console.log(messages);
        res.send(JSON.stringify(messages));
      }
    });
  });
  // *Finds all sent messages by id
  app.get("/api/messages/outbox/:id", function(req, res) {
    const user = req.params.id;
    Message.find({ senderId: user }, function(err, messages) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.send(JSON.stringify(messages));
      }
    });
  });
};
