describe('Can visit the necessary pages', () => {
  it('Can visit the home page', () => {
    cy.visit('/')
    cy.contains('Plantly').should('be.visible')
  })
})
