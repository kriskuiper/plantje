const render = require('../utils/render')

exports.handler = async () => {
  const fileContents = await render('plants', {})

  return {
    statusCode: 302,
    body: fileContents
  }
}
