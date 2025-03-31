/// <reference types="cypress" />

describe('Teste Login', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/todo')
    })
  
    it('Teste email e senha configurados no github', () => {
      cy.get('[data-test=new-todo]').type(Cypress.env('email'))
      cy.get('[data-test=new-todo]').clear()
      cy.get('[data-test=new-todo]').type(Cypress.env('password'))
      cy.wait(3000)
    })
  })
  
  