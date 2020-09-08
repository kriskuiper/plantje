const pageTemplate = require('./views/plants')

exports.handler = async () => {
  return {
    statusCode: 302,
    body: pageTemplate({})
  }
}
