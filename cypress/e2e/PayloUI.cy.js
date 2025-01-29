/// <reference types="Cypress" />

//import { constants } from "buffer"
import paylocityLogin from "../pageObjects/paylocityLogin"
import paylocityDashboard from "../pageObjects/paylocityDashboard"

beforeEach(function () {
  cy.fixture('example')
    .then(data => {
      this.data = data;
    })
});

describe('Paylocity Test suite', () => {

  it('GetEmployeeList', function () {
    const login = new paylocityLogin()
    const dashboard = new paylocityDashboard()

    cy.visit(this.data.loginurl)
    cy.url().should('eq', this.data.loginurl)

    //Login
    login.getUsernameInput().type(this.data.username)
    login.getPasswordInput().type(this.data.password)
    login.getLoginButton().click()

    //Dashboard
    cy.url().should('eq', this.data.dashboardurl)
    dashboard.getEmployeeTable().should('be.visible')

    //Logout
    dashboard.getLogoutButton().click()
    cy.url().should('eq', this.data.loginurl)
  })

  it('AddEmployee', function () {
    const login = new paylocityLogin()
    const dashboard = new paylocityDashboard()

    let dependents = Math.floor(Math.random() * 5) + 1

    cy.visit(this.data.loginurl)
    cy.url().should('eq', this.data.loginurl)

    //Login
    login.getUsernameInput().type(this.data.username)
    login.getPasswordInput().type(this.data.password)
    login.getLoginButton().click()

    //Dashboard
    cy.url().should('eq', this.data.dashboardurl)
    dashboard.getAddEmployeeButton().click()
    dashboard.getNewEmployeeModal().should('be.visible')

    //Employee Modal
    dashboard.getFirstNameInput().type(this.data.newEmployee.fname)
    dashboard.getLastNameInput().type(this.data.newEmployee.lname)
    dashboard.getDependentsInput().type(dependents)
    dashboard.getNewEmployeeModalAddButton().click()

    //New Employee added to dashboard
    cy.contains(this.data.newEmployee.fname).should('be.visible')
    cy.contains(this.data.newEmployee.lname).should('be.visible')
    cy.contains(dependents).should('be.visible')

    //verifying balances
    let ben = (1000 + 500*dependents)/26;
    ben = ben.toFixed(2);
       
    let net = 52000 - 1000;
    net = net - (500*dependents);
    net = net / 26;
    net = net.toFixed(2);

    cy.contains(ben).should('be.visible')
    cy.contains(net).should('be.visible')

    //Logout
    dashboard.getLogoutButton().click()
    cy.url().should('eq', this.data.loginurl)
  })

  it('UpdateEmployee', function () {
    const login = new paylocityLogin()
    const dashboard = new paylocityDashboard()

    let dependents = Math.floor(Math.random() * 5) + 1

    cy.visit(this.data.loginurl)
    cy.url().should('eq', this.data.loginurl)

    //Login
    login.getUsernameInput().type(this.data.username)
    login.getPasswordInput().type(this.data.password)
    login.getLoginButton().click()

    //Dashboard
    cy.url().should('eq', this.data.dashboardurl)
    cy.contains(this.data.newEmployee.fname).parent().children('td').children('.fa-edit').click()
    dashboard.getNewEmployeeModal().should('be.visible')

    //Update Employee Modal
    dashboard.getFirstNameInput().clear()
    dashboard.getFirstNameInput().type(this.data.editedEmployee.fname)

    dashboard.getLastNameInput().clear()
    dashboard.getLastNameInput().type(this.data.editedEmployee.lname)

    dashboard.getDependentsInput().clear()
    dashboard.getDependentsInput().type(dependents)
    dashboard.getUpdateEmployeeButton().click()

    //Updated Employee added to dashboard
    cy.contains(this.data.editedEmployee.fname).should('be.visible')
    cy.contains(this.data.editedEmployee.lname).should('be.visible')
    cy.contains(dependents).should('be.visible')

    //verifying balances
    let ben = (1000 + 500*dependents)/26;
    ben = ben.toFixed(2);
       
    let net = 52000 - 1000;
    net = net - (500*dependents);
    net = net / 26;
    net = net.toFixed(2);

    cy.contains(ben).should('be.visible')
    cy.contains(net).should('be.visible')

    //Logout
    dashboard.getLogoutButton().click()
    cy.url().should('eq', this.data.loginurl)
  })

  it('DeleteEmployee', function () {
    const login = new paylocityLogin()
    const dashboard = new paylocityDashboard()

    let dependents = Math.floor(Math.random() * 5) + 1

    cy.visit(this.data.loginurl)
    cy.url().should('eq', this.data.loginurl)

    //Login
    login.getUsernameInput().type(this.data.username)
    login.getPasswordInput().type(this.data.password)
    login.getLoginButton().click()

    //Dashboard
    cy.url().should('eq', this.data.dashboardurl)
    cy.contains(this.data.editedEmployee.fname).parent().children('td').children('.fa-times').click()
    dashboard.getDeleteEmployeeModal().should('be.visible')
    dashboard.getDeleteEmployeeButton().click()

    //Deleted Employee
    cy.contains(this.data.editedEmployee.fname).should('not.be.visible')
    cy.contains(this.data.editedEmployee.lname).should('not.be.visible')

    //Logout
    dashboard.getLogoutButton().click()
    cy.url().should('eq', this.data.loginurl)
  })
})