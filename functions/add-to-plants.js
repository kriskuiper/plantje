const { addPlant, addUser } = require('../db/services/user')
const { cookies } = require('../utils/constants')
const cookie = require('../utils/cookie')
const errorPage = require('./views/error')
const withDatabaseConnection = require('./middleware/with-database-connection')

exports.handler = withDatabaseConnection(
  async ({ headers, body }) => {
    const userIdCookie = cookie.get(headers.cookie, cookies.USER_ID)

    if (userIdCookie) {
      return addPlant(userIdCookie, body.plant_id)
        .then(() => ({
          statusCode: 302,
          headers: {
            Location: '/plants'
          }
        }))
        .catch(error => ({
          statusCode: 500,
          body: errorPage(error)
        }))
    }

    const encryptedUserId = await addUser()
    
    return addPlant(encryptedUserId, body.plant_id)
      .then(() => ({
        statusCode: 302,
        headers: {
          Location: '/plants',
          'Set-Cookie': cookie.set(cookies.USER_ID, encryptedUserId)
        }
      }))
      .catch(() => ({
        statusCode: 500,
        body: errorPage(error)
      }))
  }
)
