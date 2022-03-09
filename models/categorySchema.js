const mongoose = require('mongoose');
const Schema = mongoose.Schema;



/**
 *  Esquema de categoria
 * @typedef {object} Category
 * @property {string} name Nombre de la categoria
 * @property {Array} products Productos dentro de la categorianpm 
 * 
 */

/**
 * @type {Category}
 */
const categorySchema = new Schema({
    name:{type:String, unique:true, required:true},
    products:[{
        type:Schema.Types.ObjectId,
        ref:'Product'
    }]
})

module.exports = mongoose.model('Category', categorySchema)