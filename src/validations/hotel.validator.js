const hotelList = {
    sanitization: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                rules: ['trim']
            },
            id: {
                type: 'string',
                rules: ['trim']
            },
            stars: {
                type: 'array',
            }
        }
    },
    validation: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                optional: true,
                minLength: 1
            },
            id: {
                type: 'string',
                optional: true,
                minLength: 1
            },
            stars: {
                type: 'array',
                optional: true
            }
        }
    }
}

module.exports = hotelList