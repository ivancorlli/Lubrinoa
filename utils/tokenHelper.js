const jwt = require('jsonwebtoken');

/**
 * @module Token
 */

/**
 * Crea un token 
 * @param {object} payload Informacion que se va a guardar en el token
 * @param {number} time El tiempo de duracion del token 
 * @returns {string} Hash del token
 */
exports.createToken = (payload,time)=>{
    return new Promise(async(resolve,reject)=>{

        if(!payload) throw new Error('Es necesario el payload')
        if(!time){
            time = 20
        }
        try{
            const token = await jwt.sign({data:payload}, process.env.SECRET, {
                expiresIn: 60 * time 
            });
            resolve(token)
        }catch(err){
            reject(err)
        }
    })
}

/**
 * Verifica si el token es valido
 * @param {string} token El token que tiene el usuario el ingresar
 * @returns {object} Devuleve la informacion del token
 */
exports.verifyToken = (token) =>{
    return new Promise (async(resolve,reject)=>{

        if(!token) throw new Error('Es necesario el payload')
        try{
            const verify = await jwt.verify(token, process.env.SECRET)
            resolve(verify)
        }catch(err){
            reject(err)
        }
    })
}