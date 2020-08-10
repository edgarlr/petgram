// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/* global Cypress, cy  */

Cypress.Commands.add('registerUser', (userData) => {
  cy.visit('/signup')
  cy.get('[name="email"]').type(userData.email)
  cy.get('[name="password"]').type(userData.password)
  cy.contains('.sc-VigVT', 'Registrarse').click()
  cy.wait(3000)
  cy.get('.sc-hMqMXs').should('not.exist')
})

Cypress.Commands.add('loginUser', (username, password) => {
  cy.get('[name="email"]').type(username)
  cy.get('[name="password"]').type(password)
  cy.get('.sc-VigVT').click()
  cy.wait(2000)
})
