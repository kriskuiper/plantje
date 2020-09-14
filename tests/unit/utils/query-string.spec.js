const { toQueryString, fromQueryString } = require('@/utils/query-string')

describe('Format object to query string', () => {
  it('Parses an object to a query string', () => {
    const actualQueryString = toQueryString({
      name: 'test',
      age: 21
    })
    const expectedQueryString = 'name=test&age=21'

    expect(expectedQueryString).toEqual(actualQueryString)
  })

  it('Returns an empty string if no data is provided', () => {
    const actualQueryString = toQueryString()

    expect(actualQueryString).toEqual('')
  })

  it('Converts a string to an object', () => {
    const actualObject = fromQueryString('plant_id=test123')
    const expectedObject = {
      plant_id: 'test123'
    }

    expect(actualObject).toEqual(expectedObject)
  })
})
