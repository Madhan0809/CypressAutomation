class LoginPage {

    typeEmailAddress(value) {
        const field = cy.get('input[name="logonId"]');
        field.clear();
        field.type(value);
        return this;
    }

    typePassword(value) {
        const field = cy.get('input[name="logonPassword"]');
        field.clear();
        field.type(value);
        return this;
    }

    clickOnSignInButton() {
        cy.get('button[name="t-signIn"]').click();
        return this;
    }
}

export default LoginPage;