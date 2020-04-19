class PersonalDetailsPage {

    verifyCurrentURL(value) {
        cy.url().should('include', value);
        return this;
    }

    verifyPersonTitleText(value) {
        cy.get('h1[name="t-personal-heading"]').should('have.text', value);
        return this;
    }
}
export default PersonalDetailsPage;