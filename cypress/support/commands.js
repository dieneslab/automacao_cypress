Cypress.Commands.add("abrirLoading", () => {
    Cypress.config('baseUrl', null)
    cy.visit('cypress/support/loading.html')
})