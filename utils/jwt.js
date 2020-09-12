require('dotenv').config()

const jwt = require('jsonwebtoken')

function encrypt(value) {
  return jwt.sign(value, process.env.JWT_SECRET)
}

function decrypt(token) {
  return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = {
  encrypt,
  decrypt
}
