const render = require('../utils/render')

module.exports = async (request, response) => {
  const plantsTemplate = await render('plants', {})

  response.status(200)
  response.send(plantsTemplate)
}
