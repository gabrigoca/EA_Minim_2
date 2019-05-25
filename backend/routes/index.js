'use strict'

/*
Conte totes les rutes, requerin al controlador (bikeCtrl...) que es on 
estan implementades 
 */
const express = require('express')
const api = express.Router()
const apiBikes =require('./bike')
const apiStations =require('./station')

//http://localhost:3001/api


api.use('/bike', apiBikes)
api.use('/station', apiStations)



module.exports =  api
