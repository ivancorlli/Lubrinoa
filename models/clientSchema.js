const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Esquema de cliente
 * @typedef {obejct} Client
 * @property {object} name Nombre del cliente
 * @property {string} name Nombre del cliente
 * @property {string} surname Apellido del cliente
 * @property {string} email Email del cliente
 * @property {number} phone  Numero de telefono
 * @property {string} direccion Direccion del cliente
 * @property {ObjectId} vehicles Vehiculos del cliente
 * 
 */

/**
 * @type {Client}
 */

const clientSchema = new Schema({
    name:{type:String,required:true},
    surname:{type:String,required:true},
    email:{type:String},
    phone:{type:String},
    direccion:{type:String},
    vehicles:[
        {
            type: Schema.Types.ObjectId,
            ref:'Vehicle', 
        }
    ]
})

module.exports= mongoose.model('Client', clientSchema)