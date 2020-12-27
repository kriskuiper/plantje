const fetchFromTrefle = require('../lib/fetch-from-trefle')

exports.handler = async ({ body }) => {
  const plantIds = JSON.parse(body)

  try {
    const plantPromises = plantIds.map(async plantId => {
      const { data } = await fetchFromTrefle(`/plants/${plantId}`)

      return data || {}
    })
    const plantsData = await Promise.all(plantPromises)

    return {
      statusCode: 200,
      body: JSON.stringify(plantsData)
    }
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Kapot'})
    }
  }
}
