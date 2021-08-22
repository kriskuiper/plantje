Cypress.Commands.add('getByTestDirective', name => {
  return cy.get(`[data-test="${name}"]`)
})
