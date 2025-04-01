Cypress.Commands.add("abrirLoading", () => {
    Cypress.config('baseUrl', null)
    cy.visit('cypress/support/loading.html')
})

Cypress.Commands.add('loginApi', (email, password, expectedStatus) => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      body: { email, password },
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
      url: `https://reqres.in/api/users/${userId}`
    })
})

Cypress.Commands.add('deleteUserApi', (userId, expectedStatus) => {
    return cy.request({
      method: 'DELETE',
      url: `https://reqres.in/api/users/${userId}`
    }).then((response) => {
        expect(response.status).to.eq(expectedStatus)
    })    
})

Cypress.Commands.add('putUserApi', (userId, body, expectedStatus) => {
    return cy.request({
      method: 'PUT',
      url: `https://reqres.in/api/users/${userId}`,
      body: body
    }).then((response) => {
        expect(response.status).to.eq(expectedStatus)
    })    
})