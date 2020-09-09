const { Schema, ObjectId } = require('mongoose')

module.exports = new Schema({
  _id: ObjectId,
  name: {
    type: String,
    required: true,
  },
})
