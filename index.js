'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Hotel = require('./models/hotel')
const router = express.Router();

const app = express()
const port = process.env.port || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/hotel', (req, res) => {

    Hotel.find({}, (err, hotels) => {
        if (err) return res.status(500).send({ message: 'Ocurrio un error al consultar.' })
        res.send(200, { hotels })

    })
})

app.get('/api/hotel/:hotelId', (req, res) => {

     let hotelId = req.params.hotelId

    Hotel.findById(hotelId, (err, hotel) => {
        if (err) return res.status(500).send({ message: 'Ocurrio un error al consultar.' + err.message });
        res.status(200).send({ hotel })
    })  
})

app.post('/api/hotel', (req, res) => {
    let hotel = new Hotel()

    hotel.id = req.body.id,
        hotel.name = req.body.name,
        hotel.stars = req.body.stars,
        hotel.price = req.body.price,
        hotel.image = req.body.image,
        hotel.amenities = req.body.amenities

    hotel.save((err, hotelStored) => {
        if (err) resy.status(500).send({ message: 'Ocurrio un error al guardar el hotel.' })

        res.status(200).send({ hotel: hotelStored })
    })
})

mongoose.connect('mongodb://localhost:27017/local', (err, res) => {
//mongoose.connect('mongodb://XiomaraPulido:qwe123/@ds143141.mlab.com:43141/xap', (err, res) => {
    if (err) throw err
    console.log('Conexión abierta la base de datos...')

    app.listen(port, () => {
        console.log('api corriendo')
    })
})

