const Vehicle = require('../models/vehicleSchema');
const { findClientById, addVehicleToClient,deleteVehicleFromClient } = require('./client.services');



exports.createVehicle = (data)=>{
    return new Promise(async(resolve,reject)=>{
        if(!data) throw new Error('Es necesario enviar la informacion del vehiculo');
        try{
            data.patent =data.patent.toUpperCase();
            data.mark =data.mark.toLowerCase();
            data.model =data.model.toLowerCase();
            const client = await findClientById(data.owner)
            if(!client) resolve(client)

            const newVehicle = await new Vehicle(data);
            const vehicleSaved = await newVehicle.save();
            await addVehicleToClient(vehicleSaved.owner, vehicleSaved._id);
            resolve(vehicleSaved);
        }catch(err){
            console.log(err)
            reject(err);
        }
    })
}

exports.deleteVehicleById = (vehicleId)=>{
    return new Promise(async(resolve,reject)=>{
        if(!vehicleId) throw new Error('Es necesario el Id del vehiculo');
        try{
            let vehicle = await Vehicle.findByIdAndDelete(vehicleId);
            if(vehicle) resolve(vehicle);

            await deleteVehicleFromClient(vehicle.owner,vehicle._id);
            resolve(vehicle);
        }catch(err){
            reject(err);
        }
    })
}

exports.editVehicleById = (vehicleId,newVehicleData)=>{
    return new Promise(async(resolve,reject)=>{
        if(!vehicleId || ! newVehicleData) throw new Error('Es necesario enviar el id del vehiculo y la nueva informacion');
        newVehicleData.patent =newVehicleData.patent.toUpperCase();
        newVehicleData.mark =newVehicleData.mark.toLowerCase();
        newVehicleData.model =newVehicleData.model.toLowerCase();
        try{
            const vehicle = await Vehicle.findByIdAndUpdate(vehicleId,newVehicleData)
            if(!vehicle) resolve(vehicle)

            if(vehicle.owner.toString() !== newVehicleData.owner){
                let client = await addVehicleToClient(newVehicleData.owner,vehicle.id)
                if(!client)resolve(client)
                 await deleteVehicleFromClient(vehicle.owner,vehicle.id);
             }
            resolve(vehicle);
        }catch(err){
            reject(err);
        }
    })
}



exports.getAllVehicles = (patent,page=1)=>{
    return new Promise(async(resolve,reject)=>{
        const perPage= 10;
        try{
            let vehicle;
            let response;
            let count = await Vehicle.count();
            if(patent ){
                patent = patent === undefined ? '' : patent.toUpperCase();
                vehicle = await Vehicle.find({patent:{$regex:patent}}).populate('owner','id').skip((perPage * page)-perPage).limit(perPage);
                response ={
                    page:page,
                    totalPages:Math.ceil(count/perPage),
                    vehicles:vehicle,
                }
                resolve(response)
            }else{
                vehicle = await Vehicle.find({}).populate('owner','id').skip((perPage * page) - perPage).limit(perPage);
                response = {
                    page:page,
                    totalPages:Math.ceil(count/perPage),
                    vehicles:vehicle,
                }
                resolve(response)
            }
        }catch(err){
            reject(err);
        }
    })
}

