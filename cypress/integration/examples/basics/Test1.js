/// <reference types="Cypress" />

describe('Cypress Practice site - Basics', () => {
    it('Positive scenario', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get(".search-keyword").type('ca');
        cy.wait(1000);
        cy.get('.products-wrapper .product').should('have.length', 4);
        cy.get('.product:visible').should('have.length',4)

        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        //@productLocator = .products alias to reuse locator

        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($element, index, $list) => {
            const textVeg = $element.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $element.find('button').click()
            }
        })
        
        //@ alias to reuse locator
        cy.get('.brand').as('brandLocator')

        //this is to print in logs
        cy.get('@brandLocator').then(function (brandLogo) {
            cy.log(brandLogo.text())
        })

        //assert if logo text is correctly displayed
        cy.get('@brandLocator').should('have.text', 'GREENKART')
    })
})