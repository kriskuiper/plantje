const plantsPage = require('./views/plants')
const errorPage = require('./views/error')

exports.handler = ({ httpMethod }) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: plantsPage(),
  }
}
