/// <reference types="cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

import { AmazonGeneral } from '../../../pages/amazonPage'

Given('que o usuário acessa o site {string}', (url) => {
  cy.visit(url)
})

When('pesquisa pelo produto {string}', (productName) => {
  cy.get(AmazonGeneral.buscaInput).type(`${productName}{enter}`)
})

When('adiciona uma unidade ao carrinho', () => {
  cy.get(AmazonGeneral.adicionaPrimeiroItemBuscadoCarrinhoButton)
    .should('be.visible')
    .click()
})

Then('o preço no carrinho corresponde ao valor do produto', () => {
  cy.get(AmazonGeneral.acessaCarrinhoButton).click()
  cy.get(AmazonGeneral.precoItemLabel).then(($price) => {
    const displayedPrice = $price.text().trim()
    cy.get(AmazonGeneral.subtotalItemLabel)
      .invoke('text')
      .then((subtotalText) => {
        const sanitizedSubtotal = subtotalText.replace(/\s/g, '').trim()
        expect(sanitizedSubtotal).to.equal(displayedPrice.replace(/\s/g, '').trim())
      })
  })
})

When('aumenta a quantidade para 2 unidades', () => {
  cy.get(AmazonGeneral.aumentaQtdItemButton).click()
})

Then('a quantidade e subtotal são atualizados corretamente', () => {
    cy.get(AmazonGeneral.qtdProdutosLabel).should('contain', 'Subtotal (2 produtos)')
    cy.get(AmazonGeneral.subtotalItemLabel).then(($subtotal) => {
      cy.get(AmazonGeneral.precoItemLabel).then(($price) => {

        let priceText = $price.text().trim().replace(/\s/g, '').replace('R$', '')
        const productPrice = parseFloat(priceText.replace(',', '.'))
        let subtotalText = $subtotal.text().trim().replace(/\s/g, '').replace('R$', '')
        const expectedSubtotal = (productPrice * 2).toFixed(2)
  
        if (isNaN(productPrice)) {
          throw new Error(`Erro: '${priceText}' não é um número válido para o preço do produto.`)
        }
        if (isNaN(parseFloat(subtotalText.replace(',', '.')))) {
          throw new Error(`Erro: '${subtotalText}' não é um número válido para o subtotal.`)
        }
        expect(subtotalText.replace(',', '.')).to.equal(expectedSubtotal)
      })
    })
})