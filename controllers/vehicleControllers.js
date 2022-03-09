const { badRequest, internalError } = require("../error/error.services");
const { createVehicle, deleteVehicleById,editVehicleById, getAllVehicles } = require("../services/vehicle.services");


async function addVehicle(req,res){
    const body =req.body;

    if(!(body.patent || body.owner ||body.mark || body.km)) return badRequest(res,'Debe enviar todos los datos requeridos')

    try{
        let newVehicle = await createVehicle(body);
        if(!newVehicle) return badRequest(res,'No existe el cliente indicado');



    return res.status(201).send({ ok: true, msg: "Vehiculo creado con exito"});
    }catch(err){
        if (err.code === 11000){
            return badRequest(res, "Ya existe un vehiculo con esa patente");
        }
        return internalError(res, "Se produjo un error al crear el vehiculo");
      }

}

async function deleteVehicle(req,res){
    const { vehicleId } = req.params;
    if(!vehicleId) return badRequest(res,'Es enecesario enviar el Id del vehiculo')

    try{
        let vehicleDeleted = await deleteVehicleById(vehicleId);
        if(!vehicleDeleted) return badRequest(res,'El vehiculo no existe')

        return res.status(200).send({ok:true, msg:'Vehiculo eliminado con exito'})
    }catch(err){
        return internalError(res, "Se produjo un error al eliminar el vehiculo");
    }
}

async function editVehicle(req,res){
    const body = req.body;
    if (!body.id || !body.patent || !body.owner || !body.mark) return badRequest(res, "Es necesario enviar los datos requeridos");
    try{

        let vehicleUpdated = await editVehicleById(body.id,body);
        if(!vehicleUpdated) return badRequest(res,'El vehiculo o el propietario no existe');
        return res.status(200).send({ ok: true, msg:"Vehiculo editado con exito"});
    }catch(err){
        return internalError(res,'Se produjo un error al editar el vehiculo');
    }
}

async function getVehicles (req,res){
    const {patent,page} = req.params;
    try{
        let vehicles = await getAllVehicles(patent,page);

        return res.status(200).send({ok:true, msg:'Vehiculos obtenidos con exito', response:vehicles});
    }catch(err){
        return internalError(res,'Se produjo un error al obtener los datos')
    }
}

module.exports={
    addVehicle,
    deleteVehicle,
    editVehicle,
    getVehicles,
}