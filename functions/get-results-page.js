const render = require('../utils/render')

exports.handler = async () => {
  const fileContents = await render('results', {
    amount: 4,
    name: 'Henk'
  })

  return {
    statusCode: 200,
    body: fileContents,
  }
}
