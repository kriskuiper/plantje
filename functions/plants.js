const cookie = require('../utils/cookie')
const { cookies } = require('../utils/constants')
const { getPlants } = require('../db/services/user')

const withDatabaseConnection = require('./middleware/with-database-connection')

exports.handler = withDatabaseConnection(
  async ({ headers }) => {
    const userIdCookie = cookie.get(headers.cookie, cookies.USER_ID)
    
    if (userIdCookie) {
      const plants = await getPlants(userIdCookie)

      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'text/html'
        },
        body: JSON.stringify(plants),
      }
    }

    return {
      statusCode: 404,
      headers: {
        'Content-Type': 'text/html'
      },
      body: JSON.stringify({ message: 'No plants found' }),
    }
})
