const render = require('../utils/render')

exports.handler = async () => {
  return {
    statusCode: 200,
    body: await render('results', {})
  }
}
