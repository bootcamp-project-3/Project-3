const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

module.exports = function(app) {
    app.post("/api/users", function(req, res) {
        console.log("sending");
        User.findOne({ email: req.body.email }, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                res.end();
                if (result === null) {
                    User.create(req.body, function(err, post) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(post);
                        }
                        res.end();
                    });
                } else {
                    res.end();
                }
            }
        });
    });
};
