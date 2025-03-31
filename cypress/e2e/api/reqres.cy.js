/// <reference types="cypress" />

describe('Teste API', () => {
  it('Teste de POST /login', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      body: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('token')
    })
  })

  it('Teste de GET /users', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/2',
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.have.property('id', 2)
      expect(response.body.data).to.have.property('email', 'janet.weaver@reqres.in')
      expect(response.body.data).to.have.property('first_name', 'Janet')
      expect(response.body.data).to.have.property('last_name', 'Weaver')
      expect(response.body.data).to.have.property('avatar', 'https://reqres.in/img/faces/2-image.jpg')
      expect(response.body).to.have.property('support')
      expect(response.body.support).to.have.property('url', 'https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral')
      expect(response.body.support).to.have.property('text', 'Tired of writing endless social media content? Let Content Caddy generate it for you.')
      cy.log(JSON.stringify(response.body))

    })
  })  

  it('Teste de PUT /users', () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      body: {
        name: 'morpheus',
        job: 'zion resident'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('updatedAt')
      expect(response.body).to.have.property('name', 'morpheus')
      expect(response.body).to.have.property('job', 'zion resident')
      cy.log(JSON.stringify(response.body))

    })
  })  

  it('Teste de DELETE /users', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
    }).then((response) => {
      expect(response.status).to.eq(204)
    })
  }) 
})

