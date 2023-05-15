const express = require('express');
const router = express.Router()
const usersController = require('../Controllers/userController');

router.route('/')
  .get(usersController.findUser)

module.exports = router