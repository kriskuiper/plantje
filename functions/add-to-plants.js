const { addPlant, addUser } = require('../db/services/user')
const { cookies } = require('../utils/constants')
const cookie = require('../utils/cookie')
const { fromQueryString } = require('../utils/query-string')
const withDatabaseConnection = require('./middleware/with-database-connection')

exports.handler = withDatabaseConnection(
  async ({ headers, body }) => {
    const userIdCookie = cookie.get(headers.cookie, cookies.USER_ID)
    const { plant_id } = fromQueryString(body)

    if (userIdCookie) {
      return addPlant(userIdCookie, plant_id)
        .then(() => ({
          statusCode: 204
        }))
        .catch(error => ({
          statusCode: 500,
          body: JSON.stringify({ message: 'Error' })
        }))
    }

    const encryptedUserId = await addUser()
    
    return addPlant(encryptedUserId, plant_id)
      .then(() => ({
        statusCode: 302,
        headers: {
          'Set-Cookie': cookie.set(cookies.USER_ID, encryptedUserId)
        }
      }))
      .catch(() => ({
        statusCode: 500,
        body: JSON.stringify({ message: 'Error' })
      }))
  }
)
