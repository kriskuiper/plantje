require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URI } = process.env

module.exports = () => {
  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
