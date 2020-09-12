const render = require('./utils/render')

exports.handler = async () => {
  try {
    const plantsPage = await render('plants')

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html'
      },
      body: plantsPage,
    }
  } catch(error) {
    const errorPage = await render('error', error)

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html'
      },
      body: errorPage
    }
  }
}
