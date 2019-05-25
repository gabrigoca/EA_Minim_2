'use strict'

const Bike = require('../models/bike')
const Station = require('../models/station')

function getBike (req,res){
    console.log('GET /api/bike/:bikeId')

    let bikeId = req.params.bikeId

    Bike.findById(bikeId,(err, bike) => {
        if(err)
            return res.status(500).send({message: `Error searching the bike: ${err}`})

        if(!bike)
            return res.status(404).send({message: `Bike does not exist`})

        res.status(200).send({bike: bike})
    })
}

function getBikes (req,res){
    console.log('GET /api/bike/')

    Bike.find({},(err, bikes) => {
        if(err)
            return res.status(500).send({message: `Error searching the bike: ${err}`})

        if(!bikes)
            return res.status(404).send({message: `There are no bikes`})

        res.status(200).send({bikes})
    })
}

function saveBike(req,res){
    console.log('POST /api/bike')
    console.log(req.body)

    let bike = new Bike()
    bike.name = req.body.name
    bike.distance= req.body.distance
    bike.description=req.body.description
    bike.assigned=false

    bike.save((err,bikeStored) => {
        if(err)
            return res.status(500).send({message: `Error saving in the DB: ${err}`})

        res.status(200).send({bike: bikeStored})

    })
}

function updateBike (req,res){
    console.log('PUT /api/bike/:bikeId')

    let bikeId = req.params.bikeId
    let update = req.body

    Bike.findByIdAndUpdate(bikeId,update,(err, bikeUpdated) => {
        if(err)
            return res.status(500).send({message: `Error updating the bike: ${err}`})

        if(!bikeUpdated)
            return res.status(404).send({message: `Bike does not exist`})

        res.status(200).send({bike: bikeUpdated})
    })
}

function deleteBike (req,res){
    console.log('DELETE /api/bike/:bikeId')

    let bikeId = req.params.bikeId

    Bike.findById(bikeId,(err, bike) => {
        if(err)
            return res.status(500).send({message: `Error deleting the bike: ${err}`})

        if(!bike)
            return res.status(404).send({message: `Bike does not exist`})

        bike.remove(err =>{
            if(err)
                return res.status(500).send({message: `Error deleting the bike: ${err}`})

            res.status(200).send({message: "Bike deleted correctly"})
        })
    })
}


/*
function addPhone (req,res){
    console.log('POST /api/bike/phone')

    let bikeId = req.body.bikeId
    let phone = new Phone()
    phone.name = req.body.name
    phone.adress= req.body.adress

    Bike.findById(bikeId,(err, bike) => {
        if(err)
            return res.status(500).send({message: `Error searching the bike: ${err}`})

        if(!bike)
            return res.status(404).send({message: `Bike does not exist`})

        bike.phones.push(phone)
        bike.save((err,bikeStored) => {
            if(err)
                return res.status(500).send({message: `Error saving in the DB: ${err}`})

            res.status(200).send({bike: bikeStored})

        })
    })

}

*/

function getUnBike (req,res){
    console.log('GET /api/bike/un')


    Bike.find({assigned:false},(err, bike) => {
        if(err)
            return res.status(500).send({message: `Error searching bikes: ${err}`})

        if(!bike)
            return res.status(404).send({message: `There are no unassigned bikes`})

        console.log(bike)
        res.status(200).send(bike)
    })
}


function addToStation(req,res){
    Station.findById(req.params.stationId,(err,station)=>{
        if(err)
            return res.status(500).send({message: `Error searching station: ${err}`})

        if(!station)
            return res.status(404).send({message: `The station does not exist`})
        Bike.findById(req.params.bikeId,(err,bike)=>{
            if(err)
                return res.status(500).send({message: `Error searching bikes: ${err}`})

            if(!bike)
                return res.status(404).send({message: `The bike does not exist`})
            if (bike.assigned==false) {
                station.bikes.push(bike._id);
                station.state=true;
                station.save((err, stationStored) => {
                    if (err)
                        return res.status(500).send({message: `Error saving in the DB: ${err}`})
                    bike.assigned=true;
                    bike.save((err, bikeStored) =>{
                        if (err) {
                            return res.status(500).send({message: `Error saving in the DB: ${err}`})
                        }
                        res.status(200).send(stationStored)
                    })
                })
            }
            else{
                res.status(500).send({message: "Bike already assigned"})
            }
    })
})

}

module.exports={
    getBike,
    getBikes,
    saveBike,
    updateBike,
    deleteBike,
    getUnBike,
    addToStation,


}
