const User = require('../models/User')

/**
 * @description Removes a plant from a users' document
 * 
 * @param {string} encryptedUserId The encrypted user id from a cookie
 * 
 * @param {string} plantId The id of the plant to remove
 * 
 * @return {Promise} A promise which resolves to the id of the plant that was removed
 */
exports.removePlant = async (encryptedUserId, plantId) => {
  // Remove a plant from a user
}

/**
 * @description Adds a plant to the users' document
 * 
 * @param {string} encryptedUserId The encrypted user id from a cookie
 * 
 * @param {string} plantId The id of the plant to remove
 * 
 * @return {Promise} A promise which resolves to the id of the plant that was added
 */
exports.addPlant = async (encryptedUserId, plantId) => {
  // Add a plant to a user
}

/**
 * @description Adds a user to the database
 * 
 * @return {Promise} A promise which resolves to true or rejects to false
 */
exports.addUser = async () => {
  // Add a user to the DB, returns the encrypted user id
}

/**
 * @description Removes a user from the database
 * 
 * @return {Promise} A promise which resolves to true or rejects to false
 */
exports.removeUser = async () => {
  // Remove a user from the DB
}
