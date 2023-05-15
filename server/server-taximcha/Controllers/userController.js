const User = require('../Models/User')
const asyncHandler = require('express-async-handler');
const jwt = require("jsonwebtoken");

const createNewUser = asyncHandler(async (req, res) => {
    const { nombres , apellidos , password, correo, celular, tipo } = req.body
    const createdUser = await User.create({ nombres , apellidos , password, correo, celular, tipo })
    jwt.sign({userId:createdUser._id}, "ANJnsqjAMJNJQNJSMmsqq", {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).status(201).json({
        _id: createdUser._id
      });
    })
  })

  const findUser = asyncHandler(async (req, res) => {
    const { correo } = req.body;
    const foundUser = await User.findOne(correo);
    console.log(foundUser);
    if (foundUser) {
      res.json(foundUser);
    } else {
      res.json({ message: "User not found" });
    }
  });

  module.exports = {
    createNewUser,
    findUser,
  }