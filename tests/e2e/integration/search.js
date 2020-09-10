const searchInput = '[data-test="plant-search-input"]'
const searchButton = '[data-test="plant-search-button"]'
const plantsElement = '[data-test="plant-article"]'
const searchValue = 'Pachira'

describe('Can search for plants', () => {
  it('Can find the search form', () => {
    cy.visit('/')

    cy.get(searchInput)
      .type(searchValue)

    cy.get(searchButton)
      .click()

    cy.url()
      .should('include', `results?q=${searchValue}`)

    cy.get(plantsElement)
      .first()
      .should('be.visible')
  })
})
