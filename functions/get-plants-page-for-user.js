const pageTemplate = require('./views/plants')

exports.handler = async () => {
  return {
    statusCode: 200,
    body: pageTemplate({})
  }
}
