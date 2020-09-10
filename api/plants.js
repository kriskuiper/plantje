const render = require('../utils/render')

module.exports = async (request, response) => {
  try {
    const plantsTemplate = await render('plants', {})

    response.status(200)
    response.send(plantsTemplate)
  } catch (error) {
    const errorTemplate = await render('error', {})

    response.status(500)
    response.send(errorTemplate)
  }
}
