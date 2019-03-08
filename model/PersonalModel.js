const mongoose = require('mongoose');
const { Schema } = mongoose;

const personalSchema = new Schema({
    documento:{type:String, required:true},
    tipoDoc:{type:String, required:true},
    nombre:{type:String, required:true},
    cargo:{type:String, required:true},
    tel:{type:String, required:true},
    direccion:{type:String, required:true},
    clave:{type:String, required:true},
});

module.exports = mongoose.model('personal', personalSchema);