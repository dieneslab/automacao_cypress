/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

describe('Teste API', () => {

  it('Teste de POST /login status 200', () => {
    cy.loginApi('eve.holt@reqres.in', 'cityslicka', 200)
  })
  
  it('Teste de POST /login status 400', () => {
    cy.loginApi('eve.holt@reqres.12', 'cityslicka', 400)
  })

  it('Teste de GET /users validando alguns campos', () => {

    const idUsuario = 2

    cy.getUserApi(idUsuario).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.data).to.have.property('email', 'janet.weaver@reqres.in')
      expect(response.body.data).to.have.property('first_name', 'Janet')
      expect(response.body.data).to.have.property('last_name', 'Weaver')
      expect(response.body.support).to.have.property('text', 'Tired of writing endless social media content? Let Content Caddy generate it for you.')
      cy.log(JSON.stringify(response.body))
    })
  })

  it.only('Teste de GET /users validando body response', () => {

    const idUsuario = 2

    const bodyExpected = {
      "data": {
		    "id": 2,
		    "email": "janet.weaver@reqres.in",
		    "first_name": "Janet",
		    "last_name": "Weaver",
		    "avatar": "https://reqres.in/img/faces/2-image.jpg"
	    },
	    "support": {
		    "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
		    "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
	    },
	    "_meta": {
		    "powered_by": "🚀 ReqRes - Deploy backends in 30 seconds",
		    "upgrade_url": "https://app.reqres.in/upgrade",
		    "docs_url": "https://reqres.in",
		    "template_gallery": "https://app.reqres.in/templates",
		    "message": "This API is powered by ReqRes. Deploy your own backend in 30 seconds!",
		    "features": [
			    "30 Second Backend Templates",
			    "Custom API Endpoints",
			    "Data Persistence",
			    "Real-time Analytics"
		    ],
		  "upgrade_cta": "Upgrade to Pro for unlimited requests, custom endpoints, and data persistence"
	    }
    }

    cy.getUserApi(idUsuario).then((response) => {
      expect(response.status).to.eq(200)
      cy.log('Body esperado:', JSON.stringify(bodyExpected))
      cy.log('Body recebido:', JSON.stringify(response.body))
      expect(response.body).to.deep.eq(bodyExpected)
    })
  })

  it('Teste de PUT /users status 200 e valida campos inseridos', () => {

    const idUsuario = 2

    const body = {
      name: faker.person.firstName(),
      job: faker.person.jobTitle()
    }

    cy.putUserApi(idUsuario, body, 200).then((response) => {
      expect(response.body).to.have.property('updatedAt')
      expect(response.body).to.have.property('name', body.name)
      expect(response.body).to.have.property('job', body.job)
      cy.log(JSON.stringify(response.body))
    })
  })  

  it('Teste de DELETE /users status 204', () => {

    const idUsuario = 2

    cy.deleteUserApi(idUsuario, 204)
  }) 
})

