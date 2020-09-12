describe('Can visit the necessary pages', () => {
  it('Can visit the home page', () => {
    cy.visit('/')
    cy.contains('Plantly').should('be.visible')
  })

  it('Can visit the plants page', () => {
    cy.visit('/plants')
    cy.contains('Jouw plantjes').should('be.visible')
  })

  it('Can visit the results page', () => {
    cy.visit('/results')
    cy.contains('Geen resultaten').should('be.visible')
  })
})
