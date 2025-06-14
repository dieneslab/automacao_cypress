import { LoginSaucedemo } from '../pages/loginSaucedemoPage'
import { URLS } from './urls'

Cypress.Commands.add("abrirLoading", () => {
    Cypress.config('baseUrl', null)
    cy.visit('cypress/support/loading.html')
})

Cypress.Commands.add('loginApi', (email, password, expectedStatus) => {
    cy.request({
      method: 'POST',
      url: URLS.api + '/login',
      body: { email, password },
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(expectedStatus)
  
      if (expectedStatus === 200) {
        expect(response.body).to.have.property('token')
        cy.log(JSON.stringify(response.body))
      }
    })
})

Cypress.Commands.add('getUserApi', (userId) => {
    return cy.request({
      method: 'GET',
      url: URLS.api + `/users/${userId}`,
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    })
})

Cypress.Commands.add('deleteUserApi', (userId, expectedStatus) => {
    return cy.request({
      method: 'DELETE',
      url: URLS.api + `/users/${userId}`,
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    }).then((response) => {
        expect(response.status).to.eq(expectedStatus)
    })    
})

Cypress.Commands.add('putUserApi', (userId, body, expectedStatus) => {
    return cy.request({
      method: 'PUT',
      url: URLS.api + `/users/${userId}`,
      body: body,
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    }).then((response) => {
        expect(response.status).to.eq(expectedStatus)
    })    
})

Cypress.Commands.add("loginSaucedemo", (usuario, senha) => {
  cy.visit(URLS.saucedemo)
  cy.get(LoginSaucedemo.usernameInput)
    .type(usuario)
  cy.get(LoginSaucedemo.passwordInput)
    .type(senha)
  cy.get(LoginSaucedemo.loginButton)
    .click()
})
