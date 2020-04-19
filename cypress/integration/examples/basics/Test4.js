/// <reference types="Cypress" />

describe('Cypress Practice site - WebTables', () => {
    it('Positive scenario 4', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes("Python")) {
                //https://docs.cypress.io/api/commands/next.html#Arguments
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})