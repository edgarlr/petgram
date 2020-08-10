/* global describe, it, cy, beforeEach  */

describe('Petgram', function () {
  beforeEach(() => {
    cy.fixture('user.json').as('userData')
  })

  it('paraver si la app funciona', function () {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('podemos navegar con la navbar al home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('usuarios no registrados ver form de registrar', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 1)
  })

  it('Should register a new user', function () {
    cy.get('@userData').then((userData) => {
      cy.registerUser(userData)
      cy.screenshot('created-user')
    })
  })

  it.only('should fail logggin an user with wrong credentials', function () {
    cy.visit('/login')
    cy.loginUser('fail@test.com', 'password')
    cy.get('.sc-hMqMXs').should('be.visible')
    cy.screenshot('login-failed', { blackout: ['#email'] })
  })

  it('Should log an user', function () {
    cy.get('@userData').then((userData) => {
      cy.visit('/favs')
      cy.get('.sc-kkGfuU').click()
      cy.wait(1000)
      cy.loginUser(userData.email, userData.password)
      cy.screenshot('login-user')
    })
  })
})
