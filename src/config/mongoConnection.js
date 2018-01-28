const bluebird = require('bluebird')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const {
    MONGO_DB_HOST,
    MONGO_DB_PORT,
    MONGO_DB_USER,
    MONGO_DB_PASSWORD,
    MONGO_DB_DATABASE,
  } = process.env

const connect = () => {
    const auth = `${MONGO_DB_USER}:${MONGO_DB_PASSWORD}`
    const uri = `mongodb://${auth}@${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_DATABASE}`
    mongoose.connect(uri, {
        keepAlive: true
    })
        .catch((err) => console.log(`Unable to connect to ${uri}`))
}

module.exports = connect