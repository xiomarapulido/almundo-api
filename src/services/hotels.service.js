const Hotel = require('./../models/hotel')

const ERRORS = {
    GETTING_LIST: 'Error getting hotels list'
}

const listHotels = async ({ id, name, stars }) => {
    let query = {}
    if (id) query._id = { $in: [id, String(id)] }
    if (name) query.name = { $regex: name, $options: "i" }
    if (stars) query.stars = { $in: stars }

    try {
        const hotels = await Hotel.find(query).exec().then((hotel) => {
            if (hotel) {
                return hotel
            }   

            return []
        })

        return hotels
    } catch (error) {
        return new Error(ERRORS.GETTING_LIST)
    }
}

module.exports = { listHotels }