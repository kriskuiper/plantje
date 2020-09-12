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
  set(key, value) {
    return `${key}=${value}; ${cookieData(oneYearFromNow())}`
  },
  clear(key) {
    return `${key}=deleted; ${cookieData(dawnOfTime())}`
  },
  get(cookies, key) {
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
