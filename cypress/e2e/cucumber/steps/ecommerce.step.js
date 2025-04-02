/// <reference types="cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

import { LoginSaucedemo, ProductList, ProductDetails, YourCart, CheckoutInformations, Overview, Complete,  } from '../../../pages/saucedemoPage'

Given('que o usuário acessa a página ecommerce de login', () => {
    cy.visit('https://www.saucedemo.com/')
})

When('ele insere o usuário {string} e a senha {string}', (username, password) => {
    cy.get(LoginSaucedemo.usernameInput)
      .type(username)
    cy.get(LoginSaucedemo.passwordInput)
      .type(password)
})

When('clica no botão de login', () => {
    cy.get(LoginSaucedemo.loginButton)
      .click()
})

Then('ele deve ser redirecionado para a página de produtos', () => {
    cy.url()
      .should('contain', '/inventory.html')
})

When('ele adiciona o produto {string} ao carrinho', (produto) => {
    cy.get(ProductList.product)
      .contains(produto)
      .should('be.visible')
      .click()    
    cy.get(ProductDetails.addCartButton)
      .click()    
})

When('acessa o carrinho de compras', () => {
    cy.get(ProductDetails.cartButton)
      .should('have.length', 1)
      .click()
})

Then('o carrinho deve conter {int} item', (quantidade) => {
    cy.get(ProductDetails.cartButton)
      .should('have.length', quantidade)
})

Then('o item deve ter o nome {string}', (produto) => {
    cy.get(YourCart.titleProductLabel)
      .should('contain', produto)
})

Then('o preço deve ser {string}', (preco) => {
    cy.get(YourCart.priceProductLabel)
      .should('contain', preco)
})

When('ele inicia o checkout', () => {
    cy.get(YourCart.checkoutButton)
      .click()
})

When('preenche os dados pessoais com:', (tabela) => {
  tabela.hashes().forEach((linha) => {
    cy.get(CheckoutInformations.firstNameInput)
      .type(linha.Nome)
    cy.get(CheckoutInformations.lastNameInput)
      .type(linha.Sobrenome)
    cy.get(CheckoutInformations.zipCodeInput)
      .type(linha.CEP)
  })    
})

When('clica no botão de continuar', () => {
    cy.get(CheckoutInformations.continueButton)
      .click()
})

When('finaliza a compra', () => {
    cy.get(Overview.finishButton)
      .click()
})

Then('ele deve ver a mensagem {string}', (mensagem) => {
    cy.get(Complete.messageLabel)
      .should('contain', mensagem)
})
