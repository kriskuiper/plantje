const searchField = '[data-test="plants-search-field"]'
const defaultSearchQuery = 'Pachira'

export default (query = defaultSearchQuery) => {
  cy.route({
    url: `/.netlify/search?q=${query}`,
    status: 200,
    response: 'fixture:plants',
  })
  cy.visit('/')
  cy.get(searchField)
    .should('be.visible')
    .type(query)
}
