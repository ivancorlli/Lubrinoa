const { internalError, badRequest } = require("../error/error.services");
const { createClient, getAllClients, findClientById, deleteClientById } = require("../services/client.services");




async function addClient(req,res){
    const body = req.body;
    try{
        if(!body.name || !body.surname || !body.phone) return badRequest(res,'Debe enviar todos los datos requeridos')

        let newClient = await createClient(body);
        return res.status(201).send({ok:true, msg:'Cliente creado con exito'})
    }catch(err){
        return internalError(res, 'Error al crear cliente')
    }
}

async function getClients(req,res){
    const {name,surname,page} = req.params;
    try{
        let clients = await getAllClients(name,surname,page);
        return res.status(200).send({ok:true, msg:'Clientes obtenidos con exito',response:clients})
    }catch(err){
        console.log(err)
        return internalError(res,'Error al obtener clientes')
    }
}

async function getClient(req,res){
    const {id} = req.params;
    if(!id) return badRequest(res,'Es necesario enviar el id del cliente');
    try{
        let clientData = await findClientById(id);
        return res.status(200).send({ok:true,msg:'Cliente obtenido con exito',response:clientData})
    }catch(err){
        return internalError(res,'Error al obtener datos del cliente')
    }
}

async function deleteClient(req,res){
    const {id} = req.params;
    if(!id) return badRequest(res,'Es necesario enviar el id del cliente');
    try{
        let client = await deleteClientById(id);
        if(!client) return badRequest(res,'El cliente no existe');
        return res.status(200).send({ok:true, msg:'Cliente eliminado con exito'})
    }catch(err){
        return internalError(res,'Error al eliminar cliente')
    }
}


module.exports ={
    addClient,
    getClients,
    getClient,
    deleteClient,
}