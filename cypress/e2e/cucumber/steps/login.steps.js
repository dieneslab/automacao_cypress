/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import { LoginPage } from '../../../pages/loginPage'

Given('que o usuário acessa a página de login', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('ele preenche usuario e senha', () => {
  cy.get(LoginPage.emailInput)
    .type('admin')
  cy.get(LoginPage.passwordInput)
    .type('admin123')
  cy.get(LoginPage.loginButton)
    .click()
})

Then('ele deve ver a página inicial do sistema', () => {
  cy.get(LoginPage.dashboardTitle)  
    .should('be.visible')
    .and('contain.text','Time at Work')
})