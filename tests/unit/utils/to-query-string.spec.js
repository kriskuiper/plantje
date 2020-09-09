const toQueryString = require('@/utils/to-query-string')

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
})
