//1 st step
const express = require("express");
//2nd step
const router = express.Router();
const { User } = require("../models/User");
const Bcrypt = require("bcryptjs");
//3rd step
const JsonWebToken = require("jsonwebtoken");

//importing the profile route
const SECRET_JWT_CODE = "helloitsme";

//4th step

router.post("/user/signup", (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.json({ message: "missing params" });
  }
  User.create({
    email: req.body.email,
    password: Bcrypt.hashSync(req.body.password, 10),
    phoneNumber: req.body.phone,
    name: { firstName: req.body.firstName, lastName: req.body.lastName },
  })
    .then((user) => {
      const Token = JsonWebToken.sign(
        { id: user._id, email: user.email },
        SECRET_JWT_CODE
      );
      res.json({ token: Token });
    })
    .catch((err) => {
      res.json({ err: err });
    });
});
router.get("/profile",(req,res) =>{
    // let token = req.headers['authorization'].slice(7)
    // const data = JsonWebToken.verify(token=token,SECRET_JWT_CODE)
    console.log(data)
    res.json({"msg": "success"})
})
//5th step
module.exports = router;
