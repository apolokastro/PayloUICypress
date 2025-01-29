class paylocityDashboard{

    getAddEmployeeButton() {
        return cy.get('#add')
    }

    getEmployeeTable() {
        return cy.get('body > div > main > div.rounded.mb-3')
    }

    getNewEmployeeModal() {
        return cy.get('#employeeModal > .modal-dialog > .modal-content')
    }

    getFirstNameInput() {
        return cy.get('#firstName')
    }

    getLastNameInput() {
        return cy.get('#lastName')
    }

    getDependentsInput() {
        return cy.get('#dependants')
    }

    getNewEmployeeModalAddButton() {
        return cy.get('#addEmployee')
    }

    getUpdateEmployeeButton() {
        return cy.get('#updateEmployee')
    }

    getDeleteEmployeeModal() {
        return cy.get('#deleteModal > div > div')
    }

    getDeleteEmployeeButton() {
        return cy.get('#deleteEmployee')
    }

    getLogoutButton() {
        return cy.get('.nav-item > a')
    }

}

export default paylocityDashboard;