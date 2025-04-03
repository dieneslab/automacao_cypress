require('dotenv').config()

const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com.br",
    specPattern: ["cypress/e2e/api/**/*.cy.js", "cypress/e2e/front/**/*.cy.js", "cypress/e2e/cucumber/features/*.feature"],
    reporter: "cypress-allure-plugin",
    reporterOptions: {
      resultDir: "cypress/results/allure"
    },
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      config.env.email = process.env.CYPRESS_EMAIL
      config.env.password = process.env.CYPRESS_PASSWORD
      return config
    }
  },
  experimentalInteractiveRunEvents: true
})

