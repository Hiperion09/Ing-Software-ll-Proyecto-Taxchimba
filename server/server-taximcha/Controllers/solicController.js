const Solicitud = require('../Models/Solicitud')
const asyncHandler = require('express-async-handler');
const jwt = require("jsonwebtoken");

const createNewSolic = asyncHandler(async (req, res) => {
    const { origenLat , origenLng , destinoLat, destinoLng, precio, usuarioNombre, usuarioApellido, usuarioCelular, usuarioCorreo } = req.body
    const createdSolic = await Solicitud.create({ origenLat , origenLng , destinoLat, destinoLng, precio, usuarioNombre, usuarioApellido, usuarioCelular, usuarioCorreo })
    jwt.sign({solicId:createdSolic._id}, "ANJnsqjAMJNJQNJSMmsqq", {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).status(201).json({
        _id: createdSolic._id
      });
    })
  })

const getSolicitudes = asyncHandler(async (req, res) => {
  const solicitudes = await Solicitud.find().lean()
  if (solicitudes.length < 0) {
    return res.status(400).json({ message: 'No Se Encontraron Solicitudes' })
  }
  res.json(solicitudes)
})

  module.exports = {
    createNewSolic,
    getSolicitudes
  }