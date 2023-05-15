const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    nombres: String, 
    apellidos: String,
    correo: {type: String, unique: true},
    celular: Number,
    password: String,
    tipo: Number,
}, {timestamps:true})

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;