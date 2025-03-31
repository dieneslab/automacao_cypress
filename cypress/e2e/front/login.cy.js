/// <reference types="cypress" />

describe('Teste Login', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
  
    it('Teste email e senha configurados no github', () => {
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .should('be.visible')
        .type(Cypress.env('email'))
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type(Cypress.env('password'))
      cy.get('.oxd-button')
        .click()
      cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')  
        .should('be.visible')
        .and('contain.text','Time at Work')
    })
  })
  
  