//@tsCheck
const User = require('../models/userSchema');
const {crypt} = require('../utils/cryptHelper');


exports.createUser = (userData)=>{

    return new Promise(async(resolve, reject)=>{
        if(!userData) throw new Error('Datos del usuario requeridos')
        try{
            const hashPass = await crypt(userData.password);
            userData.password = hashPass;
            const user = await new User({...userData});
            resolve(user)
        }catch (err){
            reject(err)
        }
    })

}


    
exports.findUserByEmail = async(userEmail)=>{
    return new Promise (async(resolve,reject)=>{

        if(!userEmail) throw new Error('Es necesario el email del usuario');
        try{
            const user = await User.findOne({email:userEmail})
            resolve(user)
        }catch(err){
            reject(err)
        }
    })
}

exports.findUserById = async (userId)=> {
    return new Promise (async(resolve,reject)=>{

        if(!userId) throw new Error('Es necesario el ID del usario');
        try{
            const user = await User.findById(userId);
            resolve(user)
        }catch(err){
            reject(err)
        }
    })
    }
