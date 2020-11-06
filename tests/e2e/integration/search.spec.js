const query = 'Pachira'

describe('Search test', () => {
  beforeEach(() => {
    cy.server()
  })

  it.skip('Can enter a search query', () => {
    cy.searchForPlants()
  })

  it.skip('Shows results on page', () => {
    cy.searchForPlants(query)

    cy.contains(query)
      .first()
      .should('be.visible')
  })
})
