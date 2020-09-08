const pageTemplate = require('./views/results')

exports.handler = async () => {
  return {
    statusCode: 200,
    body: pageTemplate({})
  }
}
