module.exports = (initialObject = {}) => {
  return new URLSearchParams(initialObject).toString()
}
