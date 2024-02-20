const { defineConfig } = require('cypress');

module.exports= defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    // baseUrl: '',
    excludeSpecPattern: ['**/1-getting-started','**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  retries:1,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  }
});
