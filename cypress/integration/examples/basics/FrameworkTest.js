/// <reference types="Cypress" />

describe('FrameTest1', () => {
    before(function () {
        // runs once before all tests in the block
        cy.fixture('testData').then(function (data) {
            this.data = data
        })
    })

    it('My FirstTest case', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('.form-group input[name="name"]').type(this.data.name)
        cy.get('.form-group input[name="email"]').type(this.data.email)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(2) > .nav-link').click()
        // to Debug
        //cy.pause()
        //cy.debug()
          //cy.selectProduct('Blackberry')
        //cy.selectProduct('Nokia Edge')
        // To pass more products from json file
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });
      

    })
})