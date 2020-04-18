class HomePage {

    typeName(value) {
        const field = cy.get('.form-group input[name="name"]');
        field.clear();
        field.type(value);
        return this;
    }

    typeEmail(value) {
        const field = cy.get('.form-group input[name="email"]');
        field.clear();
        field.type(value);
        return this;
    }

    typePassword(value) {
        const field = cy.get('#exampleInputPassword1');
        field.clear();
        field.type(value);
        return this;
    }

    selctGender(value) {
        cy.get('select').select(value);
        return this;
    }

    selctEmploStatus() {
        cy.get('.form-check input#inlineRadio1').check().should('be.checked');
        return this;
    }

    clickOnSubmitButton() {
        cy.get('input.btn-success').click();
        return this;
    }

    verifyAlertMesssage(message) {
        // to verify exact match
        //cy.get('div.alert-success').should('have.text', value);
        // below code is to verify partial code match
        cy.get('div.alert-success')
            .text()
            .then(value => {
                cy.log("Actual message is :", value);
                expect(value).to.include(message);
            });
        return this;
    }
}
export default HomePage;