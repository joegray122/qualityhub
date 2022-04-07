/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('after:spec', (spec, results) => {
    console.log(results.reporterStats)
    console.log(results.spec)

    const axios = require('axios');

    let runInfo = results.reporterStats
    let specInfo = results.spec
    let cypressRunStats = {
      ...runInfo,
      ...specInfo      
    }

    axios.post('http://127.0.0.1:8000/cypress/results/', cypressRunStats)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  })
}
