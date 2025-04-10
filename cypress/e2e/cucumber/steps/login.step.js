/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import { LoginPage } from '../../../pages/loginPage'
import { URLS } from '../../../support/urls'

Given('que o usuário acessa a página de login', () => {
  cy.visit(URLS.orangeLogin)
})

When('ele preenche o usuario {string} e a senha {string}', (usuario, senha) => {
  cy.get(LoginPage.emailInput)
    .type(usuario)
  cy.get(LoginPage.passwordInput)
    .type(senha, { log: false })
  cy.get(LoginPage.loginButton)
    .click()
})

Then('ele deve ver o dashboard com título {string}', (mensagem) => {
  cy.get(LoginPage.dashboardTitle)  
    .should('be.visible')
    .and('contain.text', mensagem)
})

Then('ele deve ver a mensagem de erro {string}', (mensagem) => {
  cy.get(LoginPage.alertLabel)
    .should('be.visible')
    .and('contain.text',mensagem)
})

