/**
  * @description Converts an object to a query string
  * @param {object} initialObject
  * @return {string} The converted query string
  */
function toQueryString(initialObject = {}) {
  return new URLSearchParams(initialObject).toString()
}

/**
  * @description Converts a querystring to an object
  * @param {object} initialString
  * @return {object} The converted query string
  */
function fromQueryString(initialString = {}) {
  const ampersand = '&'
  const assignmentOperator = '='
  const parts = initialString.split(ampersand)

  return parts.reduce((queryObject, part) => {
    const [key, value] = part.split(assignmentOperator)

    queryObject[key] = value

    return queryObject
  }, {})
}

module.exports = {
  fromQueryString,
  toQueryString
}
