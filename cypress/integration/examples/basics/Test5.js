/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Cypress Practice site - MouseOver', () => {
    it('Positive scenario 4', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // MouseOver
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include', 'top')

        // Iframes
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find(".navigation  a[href*='mentorship']").eq(0).click()
    })
})