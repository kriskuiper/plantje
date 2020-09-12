const plantsPage = require('./views/plants')

exports.handler = ({ httpMethod }) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: plantsPage(),
  }
}
