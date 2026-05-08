const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "42miv5",
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
    baseUrl: 'https://telnyx.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
