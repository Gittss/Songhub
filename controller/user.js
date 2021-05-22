const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.get("/getUser/:id", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (!err) {
      res.send(user);
    } else console.log("getUser error : " + err);
  });
});

router.get("/getUserByEmail/:email", (req, res) => {
  User.find({ email: req.params.email }, (err, user) => {
    if (!err) {
      res.send(user);
    } else console.log(err);
  });
});

router.post("/signin", (req, res) => {
  var user = new User(req.body);

  jwt.sign({ user: user }, "secretkey", (err, token) => {
    user.token = token;
    user.save((err) => {
      if (!err) {
        res.send(user);
      } else console.log(err);
    });
  });
});

router.post("/login", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) res.sendStatus(403);
    else {
      if (req.body.password === authData.user.password) {
        res.send(authData.user);
      } else res.send("Incorrect password");
    }
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = router;
