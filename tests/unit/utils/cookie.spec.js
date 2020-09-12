const cookie = require('@/utils/cookie')
const cookieTestKey = 'test'
const cookieTestValue = '1a2b3c4d'
const cookieTestTwoValue = '1a2b3c4e'
const clearedCookieValue = 'test=deleted; HttpOnly; SameSite=Lax path=/.netlify/functions; expires=Thu, 01 Jan 1970 00:00:00 GMT'
const multipleCookies = 'test=1a2b3c4d; HttpOnly; SameSite=Lax path=/.netlify/functions; expires=Sun, 12 Sep 2021 11:05:09 GMT,test_two=1a2b3c4e; HttpOnly; SameSite=Lax path=/.netlify/functions; expires=Sun, 12 Sep 2021 11:05:09 GMT'

describe('Cookie library test', () => {
  it('Can give a created cookie string', () => {
    const oneYearFromNow = getDateOneYearFromNow()
    const expectedCookieValue = `test=1a2b3c4d; HttpOnly; SameSite=Lax path=/.netlify/functions; expires=${oneYearFromNow.toUTCString()}`
    const createdCookie = cookie.set(cookieTestKey, cookieTestValue)

    expect(createdCookie).toEqual(expectedCookieValue)
  })

  it('Can get a cleared cookie string', () => {
    const clearedCookie = cookie.clear('test')

    expect(clearedCookie).toEqual(clearedCookieValue)
  })

  it('Can get cookie value from multiple cookies', () => {
    const testValue = cookie.get(multipleCookies, 'test')
    const secondTestValue = cookie.get(multipleCookies, 'test_two')

    expect(testValue).toEqual(cookieTestValue)
    expect(secondTestValue).toEqual(cookieTestTwoValue)
  })
})

function getDateOneYearFromNow() {
  const date = new Date()

  date.setFullYear(date.getFullYear() + 1)

  return date
}
