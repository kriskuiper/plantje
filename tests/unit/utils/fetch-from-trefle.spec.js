const fetchFromTrefle = require('@/utils/fetch-from-trefle')

describe('Fetch data from trefle', () => {
  it('Can get plants by default', async () => {
    const data = await fetchFromTrefle()

    expect(data).toBeTruthy()
  })

  it('Can search for plants', async () => {
    const query = {
      q: 'Pachira'
    }
    const data = await fetchFromTrefle('/plants/search', query)

    expect(data).toBeTruthy()
  })

  it('Handles errors nicely', () => {
    fetchFromTrefle('/some-unknown-endpoint')
      .catch(error => {
        expect(error.message).toBeTruthy()
      })
  })
})
