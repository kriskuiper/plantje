const plantsPage = require('./views/plants')
const errorPage = require('./views/error')

exports.handler = async () => {
  try {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html'
      },
      body: plantsPage(),
    }
  } catch(error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html'
      },
      body: errorPage()
    }
  }
}
