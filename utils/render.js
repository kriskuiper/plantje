const Nunjucks = require('nunjucks')
const readFile = require('fs').promises.readFile

module.exports = async (name, data) => {
  const filePath = `${__dirname}/../src/views/${name}.html`
  const template = await readFile(filePath, { encoding: 'utf8' })

  return Nunjucks.renderString(template, data)
}
