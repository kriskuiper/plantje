const connectToDB = require('../../db/services/connect')
const { errors } = require('../../utils/constants')
const errorPage = require('../views/error')

/**
 * @description Ensures a database connection is made before a
 * serverless function is fired
 * @param {function} handler
 * @return {function} connectToDB function, if that succeeds it returns
 * the handler. Otherwise it renders the error page with a database error
 */
module.exports = (handler) => {
  return (event, context, callback) => {
    return connectToDB()
      .then(() => {
        return handler(event, context, callback)
      })
      .catch(() => {
        return {
          statusCode: 500,
          body: errorPage(errors.DATABASE_ERROR)
        }
      })
  }
}
