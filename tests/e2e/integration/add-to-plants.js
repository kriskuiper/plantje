const plantsElement = '[data-test="plant-article"]'
const addToPlantsButton = '[data-test="add-to-plants-button"]'
const resultsPage = '/results?q=Pachira'

describe('Add to plants overview test', () => {
  it('Shows results on results page', () => {
    cy.visit(resultsPage)
    cy.get(plantsElement)
      .first()
      .should('be.visible')
  })

  it('Can find add to plants button', () => {
    cy.visit(resultsPage)
    cy.get(addToPlantsButton)
      .first()
      .should('be.visible')
  })

  it('Can add plant to plants list', () => {
    cy.visit(resultsPage)
    cy.get(addToPlantsButton)
      .first()
      .click()
    cy.url()
      .should('include', 'plants')

    cy.get(plantsElement)
      .first()
      .should('be.visible')
  })
})
