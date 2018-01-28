'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HotelSchema = Schema({
    id: Number,
    name: String,
    stars: Number,
    price: Number,
    image: String,
    amenities: Object
})

module.exports = mongoose.model('Hotels', HotelSchema)