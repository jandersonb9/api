const mongoose = require('mongoose');
const {Schema} = mongoose;


const productoSchema = new Schema({
    nombre:{type:String, required:true},
    tipo:{type:String, required:true},
    precio:{type:Number, required:true},
    codigo:{type:String, required:true},
    descripcion:{type:String, required:true},
    cantidad:{type:Number, required:true},
    imagen:{type:String, required:true},
});


module.exports = mongoose.model('producto', productoSchema);