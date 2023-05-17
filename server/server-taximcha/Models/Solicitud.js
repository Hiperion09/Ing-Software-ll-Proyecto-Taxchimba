const mongoose  = require('mongoose');

const solicitudSchema = new mongoose.Schema({
    origenLat: Number, 
    origenLng: Number,
    destinoLat: Number,
    destinoLng: Number,
    precio: Number,
    usuarioNombre: String,
    usuarioApellido: String,
    usuarioCelular:Number,
    usuarioCorreo:String,
}, {timestamps:true})

const solicitudModel = mongoose.model('Solicitud', solicitudSchema);
module.exports = solicitudModel;