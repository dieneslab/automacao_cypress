/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

import { PersonalDetails } from '../../../pages/myInfoPersonalDetailsPage'
import { Calendar, Toast } from '../../../pages/generalPage'

Given('que o usuário acessa o menu {string}', (menu) => {
    cy.get(PersonalDetails.myInfoMenu)
      .contains(menu)
      .click()
})

When('ele atualiza o formulário com os seguintes dados:', (tabela) => {
    tabela.hashes().forEach((linha) => {
        cy.get(PersonalDetails.nameInput)
          .should('be.visible')
          .clear()
          .type(linha.Name)
        cy.get(PersonalDetails.middleNameInput)
          .clear()
          .type(linha.MiddleName)
        cy.get(PersonalDetails.lastNameInput)
          .clear()
          .type(linha.LastName)
        cy.get(PersonalDetails.employeeIDinput)
          .clear()
          .type(linha.EmployeeID)
        cy.get(PersonalDetails.licenseExpiryDateInput)
          .clear().then(() => {
            cy.get(Calendar.closeButton)
              .click()
            cy.get(PersonalDetails.licenseExpiryDateInput)
              .type(linha.LicenseExpiryDate)
          })
        cy.get(PersonalDetails.nationalityInput)
          .click().then(() => {
            cy.get(PersonalDetails.nationalityOptions)
              .contains(linha.Nationality)
              .click()
          })    
        cy.get(PersonalDetails.genderRadioButton)
          .contains(linha.Gender)
          .parent()
          .find('input[type="radio"]')
          .check({ force: true })
    })
})

When('clica no botão {string}', (botao) => {
    cy.get(PersonalDetails.saveButton)
      .contains(botao)
      .click()
})

Then('ele deve ver a mensagem {string}', (mensagem) => {
    cy.get(Toast.msgToast)
      .contains(mensagem)
      .should("be.visible")
})