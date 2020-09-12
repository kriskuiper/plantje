const connectToDB = require('../../db/services/connect')
const errorPage = require('../views/error')

module.exports = (handler) => {
  return (event, context, callback) => {
    return connectToDB()
      .then(() => {
        return handler(event, context, callback)
      })
      .catch(error => {
        return {
          statusCode: 500,
          body: errorPage(error)
        }
      })
  }
}
