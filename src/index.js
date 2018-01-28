'use strict'
const http = require('http')
const application = require('./app')

const port = process.env.PORT || 3000
const server = http.createServer(application)
server.listen(port, () => console.log(`Listening on port ${port}`))