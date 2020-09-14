const mongoose = require('mongoose')

const fetchFromTrefle = require('../../utils/fetch-from-trefle')
const jwt = require('../../utils/jwt')
const User = require('../models/User')

/**
 * @description Removes a plant from a users' document
 * @param {string} encryptedUserId The encrypted user id from a cookie
 * @param {string} plantId The id of the plant to remove
 * @return {Promise} A promise which resolves to the id of the plant that was removed
 */
async function removePlant(encryptedUserId, plantId) {
  const foundUser = await User.findById(jwt.decrypt(encryptedUserId))

  foundUser.plants = foundUser.plants.filter(plant => {
    return plant.id !== plantId
  })
  foundUser.save()

  return plantId
}

/**
 * @description Adds a plant to the users' document
 * @param {string} encryptedUserId The encrypted user id from a cookie
 * @param {string} plantId The id of the plant to remove
 * @return {Promise} A promise which resolves to the id of the plant that was added
 */
async function addPlant(encryptedUserId, plantId) {
  const foundUser = await User.findById(jwt.decrypt(encryptedUserId))
  const plantData = await fetchFromTrefle(`/plants/${plantId}`)

  foundUser.plants = [
    ...foundUser.plants,
    plantData.data
  ]
  foundUser.save()

  return plantId
}

/**
 * @description Adds a user to the database
 * @return {Promise} A promise which resolves to the encrypted user id
 */
async function addUser() {
  const newUser = await User.create({
    _id: new mongoose.Types.ObjectId,
    plants: []
  })
  
  await newUser.save()

  return jwt.encrypt(newUser._id.toString())
}

/**
 * @description Removes a user from the database
 * @return {Promise} A promise which resolves to true or rejects to false
 */
async function removeUser(encryptedUserId) {
  return User.findOneAndDelete({ _id: jwt.decrypt(encryptedUserId) })
}

module.exports = {
  addPlant,
  removePlant,
  addUser,
  removeUser
}
