const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Esquema de cliente
 * @typedef {obejct} Vehicles
 * @property {string} patent Patente
 * @property {ObjectId} owner Propietario
 * @property {string} mark Marca
 * @property {string} model  modelo
 * @property {number} year anio
 * @property {number} km KM
 * @property {array <obejct>} service Servicios 
 * 
 */

/**
 * @type {Vehicle}
 */

const vehicleSchema = new Schema({
    patent:{type:String, required:true, unique:true},
    owner:{
        required:true,
        type: Schema.Types.ObjectId,
        ref:'Client',
    },
    mark:{type:String, required:true},
    model:{type:String},
    year:{type:Number},
    km:{type:Number},
    services:[
        // {
        //     name:{type:String,required:true},
        //     date:{type:Date},
        //     price:{type:Number},
        //     description:{type:String} 
        // }
    ]
})

module.exports= mongoose.model('Vehicle', vehicleSchema)