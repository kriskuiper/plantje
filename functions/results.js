const fetchFromTrefle = require('../utils/fetch-from-trefle')
const resultsPage = require('./views/results')
const noResultsPage = require('./views/no-results')
const errorPage = require('./views/error')

exports.handler = async ({ queryStringParameters }) => {
  if (!queryStringParameters.q) {
    return {
      statusCode: 200,
      body: noResultsPage()
    }
  }

  try {
    const { data } = await fetchFromTrefle('/plants/search', queryStringParameters)

    console.log(data)
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html'
      },
      body: resultsPage(data)
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html'
      },
      body: errorPage(error)
    }
  }
}
