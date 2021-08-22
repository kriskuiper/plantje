const query = 'Pachira'

describe('Search', () => {
  it('is able to enter search query', () => {
    cy.searchForPlants()
  })

  it('shows results on page', () => {
    cy.searchForPlants(query)

    cy.contains(query)
      .first()
      .should('be.visible')
  })
})
