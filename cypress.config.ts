import { defineConfig } from 'cypress';

export default defineConfig({
  watchForFileChanges: true,

  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
    quiet: true
  },

  viewportWidth: 1280,
  viewportHeight: 1024,
  projectId: 'react-rtkq',
  chromeWebSecurity: false,
  video: false

  // e2e: {
  //   setupNodeEvents(on, config) {
  // implement node event listeners here
  //   },
  // },
});
