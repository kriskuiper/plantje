describe('Pages', () => {
  it('visits homepage', () => {
    cy.visit('/')
    cy.get('h1')
      .should('exist')
      .and('be.visible')
  })

  })
})
