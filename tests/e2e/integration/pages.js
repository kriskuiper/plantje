describe('Can visit the necessary pages', () => {
  it('Can visit the home page', () => {
    cy.visit('/')
    cy.contains('Plantje').should('be.visible')
  })
})
