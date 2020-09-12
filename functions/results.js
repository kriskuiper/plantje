const fetchFromTrefle = require('../utils/fetch-from-trefle')
const render = require('./utils/render')

exports.handler = async ({ queryStringParameters }) => {
  try {
    const { data } = await fetchFromTrefle('/plants/search', queryStringParameters)
    const resultsPage = await render('results', { data })
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html'
      },
      body: resultsPage
    }
  } catch (error) {
    const errorPage = await render('error')

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html'
      },
      body: errorPage
    }
  }
}
