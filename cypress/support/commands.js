// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Example of a custom command for a repetitive action
Cypress.Commands.add('visitPageAndVerifyUrl', (path) => {
  cy.visit(path);
  cy.url().should('include', path);
});
