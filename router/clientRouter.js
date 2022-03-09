const express = require('express');
const api = express.Router();


// Middlewares


// Controladores
let clientControllers = require('../controllers/clientControllers');

// Rutas 
api.post('/client', clientControllers.addClient)
api.get('/clients/:name?/:surname?/:page?/', clientControllers.getClients)
api.get('/client/:id', clientControllers.getClient)
api.delete('/client/:id', clientControllers.deleteClient)


module.exports = api