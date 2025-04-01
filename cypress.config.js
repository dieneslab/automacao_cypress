require('dotenv').config()

const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.email = process.env.CYPRESS_EMAIL
      config.env.password = process.env.CYPRESS_PASSWORD
      return config
    },
    baseUrl: "https://www.google.com.br"
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/report",
    overwrite: true,
    html: true,
    json: true
  },
  experimentalInteractiveRunEvents: true
})

