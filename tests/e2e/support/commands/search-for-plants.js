const DEFAULT_SEARCH_QUERY = 'Pachira'

Cypress.Commands.add('searchForPlants', (query = DEFAULT_SEARCH_QUERY) => {
  cy.intercept('GET', '/api/search**',{
    statusCode: 200,
    fixture: 'plants.json',
  }).as('plantsSearch')

  cy.visit('/')

  cy.getByTestDirective('plants-search-field')
    .should('be.visible')
    .type(query)

  cy.getByTestDirective('plants-submit-button')
    .click()

  cy.wait('@plantsSearch')
})
