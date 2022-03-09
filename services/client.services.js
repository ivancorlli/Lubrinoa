const Client = require('../models/clientSchema');
const Vehicle = require('../models/vehicleSchema');


exports.createClient = (clientInfo)=>{
    return new Promise(async(resolve,reject)=>{
      if(!clientInfo) throw new Error('Datos del cliente requeridos')
      try{
          clientInfo.name = clientInfo.name.toLowerCase();
          clientInfo.surname = clientInfo.surname.toLowerCase();
          clientInfo.email = clientInfo.email.toLowerCase();
        const newClient = await new Client({...clientInfo});
        await newClient.save();
        resolve(newClient);
      }catch(err){
        reject(err);
      }
    })
}


exports.getAllClients = (name,surname,page=1)=>{
    return new Promise(async(resolve,reject)=>{
        const perPage= 10;
        try{
            let clients;
            let response;
            let count = await Client.count();
            if(name || surname){
                name = name === undefined ? '' : name.toLowerCase();
                surname = surname === undefined ? '' : surname.toLowerCase();
                clients = await Client.find({surname:{$regex:surname},name:{$regex: name}}).populate('vehicles').skip((perPage * page)-perPage).limit(perPage);
                response ={
                    page:page,
                    totalPages:Math.ceil(count/perPage),
                    clients:clients,
                }
                resolve(response)
            }else{

                clients = await Client.find({}).populate('vehicles').skip((perPage * page) - perPage).limit(perPage);
                response = {
                    page:page,
                    totalPages:Math.ceil(count/perPage),
                    clients:clients,
                }
                resolve(response)
            }
        }catch(err){
            reject(err);
        }
    })
}


exports.findClientById = (clientID)=>{
    return new Promise (async(resolve,reject)=>{
        if(!clientID)throw new Error('Es necesasrio el id del cliente');
        try{
            let client = await Client.findById(clientID).populate('vehicles');
            resolve(client);
        }catch(err){
            reject(err);
        }
    })
}

exports.addVehicleToClient = (clientId,vehicleId)=>{
    return new Promise(async(resolve,reject)=>{
        if(!clientId || !vehicleId) throw new Error('Es necesario enviar un id del cliente y un nuevo vehiculo');
        try{
            const client = await Client.findOneAndUpdate({_id:clientId},{
                $push:{
                    vehicles:vehicleId,
                }
            })
            resolve(client);
        }catch(err){
            reject(err)
        }
    })
}
exports.deleteVehicleFromClient = (clientId,vehicleId)=>{
    return new Promise(async(resolve,reject)=>{
        if(!clientId || !vehicleId) throw new Error('Es necesario enviar un id del cliente y del vehiculo');
        try{
            const client = await Client.findOneAndUpdate({_id:clientId},{
                $pull:{
                    vehicles:vehicleId,
                }
            })
            resolve(client);
        }catch(err){
            reject(err)
        }
    })
}


exports.deleteClientById = (clientID)=>{
    return new Promise(async(resolve,reject)=>{
        if(!clientID) throw new Error('Es necesasrio el id del cliente');
        try{
            let client = await Client.findByIdAndDelete(clientID);
            if(!client) resolve(client);
            if(client && client.vehicles.length > 0){
                let vehicles = client.vehicles;
                await Promise.all(
                    vehicles.map(async(el)=>{
                        let deleted = await Vehicle.findByIdAndDelete(el);
                        return deleted
                    })
                )
            }
            resolve(client)
        }catch(err){
            console.log(err)
            reject(err);
        }
    })
}

