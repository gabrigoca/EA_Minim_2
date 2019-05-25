'use strict'
//Llista de rutes per als bikes

const express = require('express');
const apiBikes = express.Router();
const bikeCtrl = require('../controllers/bike');

//http://localhost:3001/api/bike

apiBikes.get('/', bikeCtrl.getBikes);
apiBikes.get('/un',bikeCtrl.getUnBike);
apiBikes.get('/:bikeId', bikeCtrl.getBike);
apiBikes.post('/', bikeCtrl.saveBike);
apiBikes.put('/:bikeId', bikeCtrl.updateBike);
apiBikes.delete('/:bikeId', bikeCtrl.deleteBike);
apiBikes.get('/:stationId/:bikeId', bikeCtrl.addToStation);



module.exports =  apiBikes