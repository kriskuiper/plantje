exports.handler = () => {
  return {
    statusCode: 301,
    headers: {
      Location: '/plants'
    },
  }
}
