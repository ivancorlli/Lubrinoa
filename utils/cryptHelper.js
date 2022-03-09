const bcrypt = require('bcrypt');

/**
 * @module Crypt
 */

/**
 * Encriptar Contrasenia
 * @param {string} password Contrasenia a encriptar 
 * @returns {string} Hash, contrasenia encriptada
 */
exports.crypt = (password)=>{
    return new Promise (async(resolve,reject)=>{

        if(!password) throw new Error('Password Requerida');
        try{
            const rounds = 10
            const hash = await bcrypt.hash(password,rounds)
            resolve(hash)
        }catch(err){
            reject(err)
        }
    })
}

/**
 * Compara las contrasenias para saber si es la contrasenia correcta
 * @param {string} password contrasenia ingresada
 * @param {string} hashPassword hash guardado en la base de datos del usuario
 * @returns {boolean} Si las contrasenias coinciden devuelve True, sino False
 */
exports.deCrypt = (password,hashPassword)=>{
    return new Promise (async(resolve,reject)=>{

        if(!password || !hashPassword) throw new Error('Password Requerida');
        try{
            const comparedPassword= await bcrypt.compare(password,hashPassword);
             resolve(comparedPassword)
        }catch(err){
             reject(err)
        }
    })

}
