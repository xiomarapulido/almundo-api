const { Router } = require('express')

const router = Router()
const hotelCtrl = require('./../controllers/hotel.controller')

router.route('/hotel')
    .get(hotelCtrl.listHotels)

module.exports = router