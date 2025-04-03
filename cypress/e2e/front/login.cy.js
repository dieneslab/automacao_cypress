/// <reference types="cypress" />

import { LoginPage } from '../../pages/loginPage'

describe('Teste Login', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
  
    it('Teste usuario e senha configurados no github', () => {
      cy.get(LoginPage.emailInput)
        .should('be.visible')
        .type(Cypress.env('user'))
      cy.get(LoginPage.passwordInput)
        .type(Cypress.env('password'))
      cy.get(LoginPage.loginButton)
        .click()
      cy.get(LoginPage.dashboardTitle)  
        .should('be.visible')
        .and('contain.text','Time at Work')
    })

    it('Teste usuario e senha incorretos', () => {

      const usuarioInvalido = {
        email: 'amanha',
        senha: 'depois'
      }

      cy.get(LoginPage.emailInput)
        .should('be.visible')
        .type(usuarioInvalido.email)
      cy.get(LoginPage.passwordInput)
        .type(usuarioInvalido.senha)
      cy.get(LoginPage.loginButton)
        .click()
      cy.get(LoginPage.alertLabel)
        .should('be.visible')
        .and('contain.text','Invalid credentials')  
    })

  })
  
  