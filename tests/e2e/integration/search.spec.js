const query = 'Pachira'

describe('Search test', () => {
  beforeEach(() => {
    cy.server()
  })

  it('Can enter a search query', () => {
    cy.searchForPlants()
  })

  it('Shows results on page', () => {
    cy.searchForPlants(query)

    cy.contains(query)
      .first()
      .should('be.visible')
  })
})
