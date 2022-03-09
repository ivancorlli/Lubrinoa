// @ts-check
// Servicios
const {createUser, findUserByEmail, findUserById} = require('../services/user.services');
const {badRequest,internalError,unathorized} = require('../error/error.services');
const {deCrypt} = require('../utils/cryptHelper');
const {createToken,verifyToken} = require('../utils/tokenHelper');
const {capitalizarPrimerLetra} = require('../utils/stringHelpers');

//------------ Rutas ---------
async function postUser (req,res){
    const body = req.body;
    if(!(body.name || body.surname || body.password || body.email)) return badRequest(res,'Envie los datos requeridos')
    try{
        body.email = body.email.toLowerCase();
        body.name = body.name.toLowerCase();
        body.surname = body.surname.toLowerCase();

        const user =  await createUser(body);
        await user.save();

        return res.status(201).send({ok:true, msg:'Usuario creado correctamente'})
    }catch(err){
        if(err.code === 11000) return badRequest(res,'Ya existe un usario con este email')
        return internalError(res,'Se produjo un error al crear el usuario')
    }
}

async function logIn (req,res){
    const body = req.body;
    if(!body.email || !body.password) return badRequest(res,'Envie los datos requeridos')
    try{
        // Verificacion de Email
        const user = await findUserByEmail(body.email);
        if(!user) return badRequest(res,'No existe un ususario con este email');

        // Verificacion de Password
        const verifyPassword = await deCrypt(body.password, user.password);
        if(!verifyPassword) return badRequest(res,'Contrasenia incorrecta');
        user.password = undefined;

        // Crear token
        let payload ={
            id:user._id,
        }
        const time = 25;
        const token = await createToken(payload,time);
        
        return res.status(200).send({ok:true, msg:'Ingreso Correcto',token})
    }catch(err){
        return internalError(res,'Se produjo un error al ingresar') 
    }
}

async function refreshToken(req,res){
    const {token} = req.body
    if(!token) return badRequest(res,'Es necesario enviar un token')
    
    try{
        
        let {data} = await verifyToken(token);
        if(!data) return unathorized(res,'No tienes permisos')
        
        const time = 25;
        let newToken = await createToken(data,time);
        if(!newToken) throw new Error('Error al crear el token')

        return res.status(201).send({ok:true, msg:'Refresh de token exitoso', newToken})
    }catch(err){
        return internalError(res,'Se produjo un error')
    }
    
}

async function getUser (req,res){
    const token = (req.headers.authorization).split(' ')[1];
    if(!token) return badRequest(res,'No tiene los permisos para esta operacion')
    try{
        let {data} = await verifyToken(token);
        if(!data) return unathorized(res,'No tienes permisos')

        let user = await findUserById(data.id)
        if(!user) throw new Error('Error al crear el token')
        user.password = undefined;
        user.name = capitalizarPrimerLetra(user.name)
        user.surname = capitalizarPrimerLetra(user.surname)

        return res.status(200).send({ok:true, msg:'Exito al obtener el usuario', user})
    }catch(err){
        return internalError(res,'Se produjo un error')
    }
}

module.exports = {
    refreshToken,
    postUser,
    logIn,
    getUser,
}