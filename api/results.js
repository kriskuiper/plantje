const fetchFromTrefle = require('../utils/fetch-from-trefle')
const render = require('../utils/render')

module.exports = async (request, response) => {
  try {
    const { data } = await fetchFromTrefle('/plants/search', request.query)
    const resultsTemplate = await render('results', { data })

    response.status(200)
    response.send(resultsTemplate)
  } catch (error) {
    const errorTemplate = await render('error', { data })

    response.status(404)
    response.send(errorTemplate)
  }
}
