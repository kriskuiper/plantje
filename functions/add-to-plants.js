const { addPlant, addUser } = require('../db/services/user')
const { cookies } = require('../utils/constants')
const cookie = require('../utils/cookie')
const { fromQueryString } = require('../utils/query-string')
const errorPage = require('./views/error')
const withDatabaseConnection = require('./middleware/with-database-connection')

exports.handler = withDatabaseConnection(
  async ({ headers, body }) => {
    const userIdCookie = cookie.get(headers.cookie, cookies.USER_ID)
    const { plant_id } = fromQueryString(body)

    if (userIdCookie) {
      return addPlant(userIdCookie, plant_id)
        .then(() => ({
          statusCode: 302,
          headers: {
            Location: '/.netlify/functions/plants'
          }
        }))
        .catch(error => ({
          statusCode: 500,
          body: errorPage(error)
        }))
    }

    const encryptedUserId = await addUser()
    
    return addPlant(encryptedUserId, plant_id)
      .then(() => ({
        statusCode: 302,
        headers: {
          Location: '/.netlify/functions/plants',
          'Set-Cookie': cookie.set(cookies.USER_ID, encryptedUserId)
        }
      }))
      .catch(() => ({
        statusCode: 500,
        body: errorPage(error)
      }))
  }
)
