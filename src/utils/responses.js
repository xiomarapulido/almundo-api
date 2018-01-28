const { OK, CREATED, NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR, ACCEPTED } = require('http-status')

const responses = {
    default(res, promise, statusCode = OK) {
        return promise
            .then(data => {
                res.status(statusCode).send({
                    success: true,
                    data,
                })
            })
            .catch((error) => {
                res.status(INTERNAL_SERVER_ERROR).send({
                    success: false,
                    error: error.message,
                })
            })
    },
    defaultErrorValidation(res, message, statusCode = BAD_REQUEST) {
        return res.status(statusCode).send({
            success: false,
            error: message,
        })
    },

}

module.exports = responses