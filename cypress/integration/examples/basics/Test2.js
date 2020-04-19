/// <reference types="Cypress" />

describe('Cypress Practice site Checkbox and etc', () => {
    it('Positive scenario 2', () => {
        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.wait(1000);
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked')

        //Static Dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic Dropdown
        //Dynamic dropdowns
        cy.get('#autocomplete').type('uni')

        cy.get('.ui-menu-item div').each(($countryOptions, index, $list) => {
            if ($countryOptions.text() === "United Kingdom (UK)") {
                $countryOptions.click()
            }
        })
        //autocomplete
        cy.get('#autocomplete').should('have.value', 'United Kingdom (UK)')

        //visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons
        cy.get('[value="radio3"]').check().should('be.checked')
    })
})