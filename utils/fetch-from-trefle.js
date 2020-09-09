require('dotenv-safe').config()

const fetch = require('node-fetch')

const { errors } = require('./constants')
const toQueryString = require('./to-query-string')

const {
  TREFLE_API_TOKEN,
  TREFLE_BASE_URL
} = process.env

/**
 * @description Makes it possible to fetch data from the Trefle API
 * @param {string} endpoint The Trefle endpoint to do a request to
 * @param {object} query An object with key-value pairs for extra params
 * @return {Promise} A promise of the data returned from the Trefle API
 */
module.exports = async (endpoint = '/plants', query = {}) => {
  const queries = toQueryString({
    token: TREFLE_API_TOKEN,
    ...query,
  })

  try {
    const response = await fetch(`${TREFLE_BASE_URL}${endpoint}?${queries}`)
    const data = await response.json()

    return data
  } catch(error) {
    const errorMessage = error.message || errors.FAILED_REQUEST

    throw new Error(errorMessage)
  }
}
