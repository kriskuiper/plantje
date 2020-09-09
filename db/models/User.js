const { plantSchema } = require('./Plant')
const { ObjectId, Schema, model } = require('mongoose')

const userSchema = new Schema({
  _id: ObjectId,
  plants: [plantSchema]
})

module.exports = model('User', userSchema)
