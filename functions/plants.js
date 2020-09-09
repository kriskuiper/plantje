const pageTemplate = require('./views/plants')

exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: pageTemplate({}),
  }
}
