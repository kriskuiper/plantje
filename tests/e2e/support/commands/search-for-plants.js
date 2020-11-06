const searchField = '[data-test="plants-search-field"]'
const searchSubmitButton = '[data-test="plants-submit-button"]'
const defaultSearchQuery = 'Pachira'

export default (query = defaultSearchQuery) => {
  cy.route({
    url: `/.netlify/functions/search?query=${query}`,
    status: 200,
    response: 'fixture:plants',
  }).as('plantsSearch')

  cy.visit('/')

  cy.get(searchField)
    .should('be.visible')
    .type(query)
    
  cy.get(searchSubmitButton)
    .click()

  cy.wait('@plantsSearch')
}
