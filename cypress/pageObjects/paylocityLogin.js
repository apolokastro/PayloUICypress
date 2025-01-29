class paylocityLogin{

    getUsernameInput() {
        return cy.get('#Username');
    }

    getPasswordInput() {
        return cy.get('#Password');
    }

    getLoginButton() {
        return cy.get('.btn');
    }

}

export default paylocityLogin;