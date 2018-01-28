const express = require('express')
const bodyParser = require('body-parser')

const connectToMongo = require('./config/mongoConnection')
connectToMongo()

const app = express()
const api = require('./routes')

app.use('/api', api)

module.exports = app
