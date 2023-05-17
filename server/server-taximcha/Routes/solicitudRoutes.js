const express = require('express');
const router = express.Router()
const solicController = require('../Controllers/solicController');

router.route('/')
  .get(solicController.getSolicitudes)
  .post(solicController.createNewSolic)

module.exports = router