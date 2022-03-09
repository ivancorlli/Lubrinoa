const express = require('express');
const api = express.Router();

// Middlewares 


// Controladores
const vehicleController = require('../controllers/vehicleControllers');

// Ruteo
api.post('/vehicle',vehicleController.addVehicle)
api.delete('/vehicle/:vehicleId?',vehicleController.deleteVehicle)
api.patch('/vehicle',vehicleController.editVehicle)
api.get('/vehicles/:patent?/:page?',vehicleController.getVehicles)



module.exports = api