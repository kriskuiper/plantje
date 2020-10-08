const fetchFromTrefle = require('../lib/fetch-from-trefle')

exports.handler = async ({ queryStringParameters }) => {
  if (!queryStringParameters) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'No query parameters :(' })
    }
  }

  try {
    const { data } = await fetchFromTrefle('/plants/search', queryStringParameters)
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf8',
      },
      body: JSON.stringify(data)
    }
  } catch {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json; charset=utf8'
      },
      body: JSON.stringify({ message: 'Error kapot' })
    }
  }
}
