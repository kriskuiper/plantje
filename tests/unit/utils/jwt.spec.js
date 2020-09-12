const { encrypt, decrypt } = require('@/utils/jwt')
const jwtRegex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/

describe('JWT test', () => {
  it('Can encrypt text', () => {
    const token = encrypt('my-test-text-to-test')

    expect(token).toMatch(jwtRegex)
  })

  it('Can decrypt text', () => {
    const token = encrypt('a-token')
    const decryptedValue = decrypt(token)

    expect(decryptedValue).toEqual('a-token')
  })

  it('Can encrypt objects', () => {
    const token = encrypt({ name: 'Test person' })

    expect(token).toMatch(jwtRegex)
  })
  
  it('Can decrypt objects', () => {
    const token = encrypt({ name: 'Test person' })
    const decryptedValue = decrypt(token)

    expect(decryptedValue).toHaveProperty('name', 'Test person')
  })
})
