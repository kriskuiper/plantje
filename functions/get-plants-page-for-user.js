const render = require('../utils/render')

exports.handler = async () => {
  const contents = await render('plants', {})

  return {
    statusCode: 302,
    body: contents
  }
}
