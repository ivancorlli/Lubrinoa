const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/**
 * Este es un producto
 * @typedef {obejct} Product
 * @property {string} code codigo del producto
 * @property {number} precio precio del producto
 * @property {ObjectId} categoria categoria del producto
 * @property {string} aplicacion aplicacion del producto
 * @property {number} cantidad  cantidad del producto
 * @property {date} createdAt fecha de creacion
 * @property {date} updatedAt fecha de actualizacion
 * 
 */

/**
 * @type {Product}
 */

const productSchema = new Schema({
    code:{type:String, unique:true, required:true},
    precio:{type:Number,  required:true},
    categoria: {
        required:true,
        type: Schema.Types.ObjectId,
        ref:'Category', 
    },
    aplicacion:{type:String},
    cantidad:{type:Number,default:0},
    timestamps:{
        createdAt:{type:Date, default: new Date()},
        updatedAt:{type:Date,},
    }
})


module.exports = mongoose.model('Product', productSchema)