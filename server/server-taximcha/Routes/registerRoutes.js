const express = require('express');
const router = express.Router()
const usersController = require('../Controllers/userController');

router.route('/')
  .post(usersController.createNewUser)

module.exports = router