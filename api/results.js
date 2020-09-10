const render = require('../utils/render')

module.exports = async (request, response) => {
  const resultsTemplate = await render('results', {})

  response.status(200)
  response.send(resultsTemplate)
}
