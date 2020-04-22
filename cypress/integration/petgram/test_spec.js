/* global describe, it, cy */
describe('Petgram', function () {
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
})
