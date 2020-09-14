const oneYearFromNow = () => {
  let date = new Date()
  
  date.setFullYear(date.getFullYear() + 1)

  return date
}

const dawnOfTime = () => {
  return new Date(0)
}

const cookieData = (expiryDate) => {
  return `HttpOnly; SameSite=Lax path=/.netlify/functions; expires=${expiryDate.toUTCString()}`
}

module.exports = {
  /**
   * @description Gives you a cookie to use in a Set-Cookie header, the expires
   * attribute of the cookie is one year from the moment you set it.
   * @param {string} key The key of the cookie to be added
   * @param {string} value The value of the cookie to be added
   * @return {string} The complete cookie string
   */
  set(key, value) {
    return `${key}=${value}; ${cookieData(oneYearFromNow())}`
  },

  /**
   * @description Gives you a cookie to use in a Set-Cookie header, gives the
   * cookie a value of deleted and an expires of this day in 1970 so the cookie
   * get's deleted.
   * @param {string} key The key of the cookie to be cleared
   * @return {string} The complete cookie string
   */
  clear(key) {
    return `${key}=deleted; ${cookieData(dawnOfTime())}`
  },

  /**
   * @description Converts a string of multiple cookies to an object, then get's the value
   * of the key you put in as param2.
   * @param {string} cookies The string of multiple cookies to convert to an object
   * @param {string} key The key of the cookie you want the value from
   * @returns {string} The cookie value you asked for
   */
  get(cookies = '', key = '') {
    const comma = ','
    const delimiter = ';' + ' '
    const assignmentOperator = '='
    const allCookies = cookies.split(comma)
    const cookieObject = allCookies.reduce((cookieObject, currentCookieString) => {
      const [cookieKeyAndValue] = currentCookieString.split(delimiter)
      const [key, value] = cookieKeyAndValue.split(assignmentOperator)

      cookieObject[key] = value

      return cookieObject
    }, {})

    return cookieObject[key]
  }
}
