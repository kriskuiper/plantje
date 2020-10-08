const plantsResult = '[data-test="plants-result]'

describe('Search test', () => {
  beforeEach(() => {
    cy.server()
  })

  it('Can enter a search query', () => {
    cy.searchForPlants()
  })

  it('Shows results', () => {
    cy.searchForPlants()

    cy.get(plantsResult)
      .first()
      .should('be.visible')
  })
})
