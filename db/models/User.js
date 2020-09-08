const { ObjectId, Schema, model } = require('mongoose')

const userSchema = new Schema({
  _id: ObjectId,
  plants: {
    type: Array,
    default: [],
  }
})

module.exports = model('User', userSchema)
