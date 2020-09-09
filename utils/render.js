const readFile = require('fs').promises.readFile
const Nunjucks = require('nunjucks')

module.exports = async (name, data) => {
  const filePath = `${__dirname}/../functions/views/${name}.html`
  const pageContents = await readFile(filePath, { encoding: 'utf8' })

  return Nunjucks.renderString(pageContents, data)
}
