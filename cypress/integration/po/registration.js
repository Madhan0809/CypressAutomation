/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'

describe('Practice site', () => {

    before(function () {
        // runs once before all tests in the block
        cy.fixture('testData').then(function (data) {
            this.data = data;
        })
    })

    it('Registration Positive scenario', function () {
        const homePage = new HomePage();
        cy.visit(Cypress.env('url') + "/angularpractice/")
        homePage.typeName(this.data.name)
            .typeEmail(this.data.email)
            .typePassword(this.data.password)
            .selctGender(this.data.gender)
            .selctEmploStatus()
            .clickOnSubmitButton()
            .verifyAlertMesssage(this.data.successMessage);
    })
    
})