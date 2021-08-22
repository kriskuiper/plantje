describe('Pages', () => {
  it('visits homepage', () => {
    cy.visit('/')
    cy.contains('Plantje').should('be.visible')
  })
})
