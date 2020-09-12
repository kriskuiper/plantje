require('dotenv').config()

const jwt = require('jsonwebtoken')

/**
 * @description Encrypts a string or an object to a JSON webtoken
 * @param {string | object} value The value to convert to a JSON webtoken
 * @return {string} The JSON webtoken
 */
function encrypt(value) {
  return jwt.sign(value, process.env.JWT_SECRET)
}

/**
 * @description Decrypts a JSON webtoken to the initial value
 * @param {string} token
 * @return {string | object} The initial value it was before encrypting it
 */
function decrypt(token) {
  return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = {
  encrypt,
  decrypt
}
