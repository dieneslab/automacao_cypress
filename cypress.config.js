require('dotenv').config()

const cucumber = require('cypress-cucumber-preprocessor').default
const allureWriter = require('@shelex/cypress-allure-plugin/writer')
const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com.br",
    specPattern: ["cypress/e2e/api/**/*.cy.js", "cypress/e2e/front/**/*.cy.js", "cypress/e2e/cucumber/features/*.feature"],
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      allureWriter(on, config)
      config.env.email = process.env.CYPRESS_EMAIL
      config.env.password = process.env.CYPRESS_PASSWORD
      return config
    }
  },
  experimentalInteractiveRunEvents: true
})

