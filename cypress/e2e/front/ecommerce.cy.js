/// <reference types="cypress" />

import { ProductList } from '../../pages/productListPage'
import { ProductDetails } from '../../pages/productDetailsPage'
import { YourCart } from '../../pages/yourCartPage'
import { CheckoutInformations } from '../../pages/checkoutInformationsPage'
import { Overview } from '../../pages/overviewPage'
import { Complete } from '../../pages/completePage'

describe('Teste E-commerce', () => {

    it('Deve fazer login, adicionar produto ao carrinho e finalizar a compra', () => {
        cy.loginSaucedemo('standard_user', 'secret_sauce')
        cy.get(ProductList.product)
          .contains('Sauce Labs Backpack')
          .should('be.visible')
          .click()
        cy.get(ProductDetails.addCartButton)
          .click()
        cy.get(ProductDetails.cartButton)
          .should('have.length', 1)
          .click()
        cy.get(YourCart.titleProductLabel)
          .should('contain', 'Sauce Labs Backpack')
        cy.get(YourCart.priceProductLabel)
          .should('contain', '$29.99')
        cy.get(YourCart.quantityLabel).should('contain', '1')
        cy.get(YourCart.checkoutButton)
          .click()
        cy.get(CheckoutInformations.firstNameInput)
          .type('Dienes')
        cy.get(CheckoutInformations.lastNameInput)
          .type('Stein')
        cy.get(CheckoutInformations.zipCodeInput)
          .type('89000-000')
        cy.get(CheckoutInformations.continueButton)
          .click()
        cy.get(Overview.finishButton)
          .click()
        cy.get(Complete.messageLabel)
          .should('contain', 'Thank you for your order!')
    })
})
