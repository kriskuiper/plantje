const { Schema, ObjectId } = require('mongoose')

const plantSchema = require('./plant')

module.exports = new Schema({
  _id: ObjectId,
  plants: [plantSchema]
})
