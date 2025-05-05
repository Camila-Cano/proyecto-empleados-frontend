import { defineConfig } from 'cypress'

export default defineConfig({
  
  e2e: {
    'baseUrl': 'http://localhost:4200'
  },
  
  
  component: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      html: true,
      json: true,
      embeddedScreenshots: true,
      video: true,
      title: 'Mi Informe de Pruebas'
    },
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }
  
})