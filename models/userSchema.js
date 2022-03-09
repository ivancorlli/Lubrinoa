const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const role =['root_empleado', 'root_admin']


/**
 * A User
 * @typedef {obejct} User
 * @property {string} name user name
 * @property {string} surname user lastname
 * @property {string} email user email
 * @property {string} password user pass
 * @property {string} role user role
 * @property {Boolean} active user is Active
 * @property {date} createdAt fecha de creacion
 * @property {date} updatedAt fecha de actualizacion
 * 
 */

/**
 * @type {User}
 */
const userSchema = new Schema({
    name:{type:String, required:true,},
    surname:{type:String, required:true,},
    email:{type:String,required:true, unique:true},
    password:{type:String, required:true,},
    role:{type:String, default:'root_empleado'},
    active:{type:Boolean , default:false},
    timestaps:{
        createdAt:{type:Date, default:Date.now()},
        updatedAt:{type:Date,},
    }

})

module.exports = mongoose.model('User', userSchema);