/**
 * @description Converts an object to a query string
 * @param {object} initialObject
 * @return {string} The converted query string
 */
module.exports = (initialObject = {}) => {
  return new URLSearchParams(initialObject).toString()
}
