const { OK, CREATED, NOT_FOUND, INTERNAL_SERVER_ERROR } = require('http-status')
const { sanitize, validate } = require('schema-inspector')
const validator = require('./../validations/hotel.validator')
const responses = require('./../utils/responses')
const services = require('./../services/hotels.service')

async function listHotels({ query }, res) {
    sanitize(validator.sanitization, query)
    const validation = validate(validator.validation, query)

    if (!validation.valid)
        return responses.defaultErrorValidation(res, validation.format())

    return responses.default(res, services.listHotels(query))
}

module.exports = { listHotels }
