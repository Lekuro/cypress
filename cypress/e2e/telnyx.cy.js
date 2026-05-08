import HomePage from '../pages/HomePage';

describe('Telnyx Site Test Plan (POM)', () => {
  beforeEach(() => {
    // Handling uncaught exceptions to prevent tests from failing on non-critical app errors
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  // TC-01
  it('Verify Home Page title and meta tags', () => {
    HomePage.visit();
    HomePage.verifyTitleAndMeta();
  });

  // TC-02
  it('Verify "Sign Up" button redirects to the registration page', () => {
    HomePage.visit();
    HomePage.clickSignUp();
    cy.url().should('include', '/sign-up');
  });

  // TC-03
  it('Verify "Log In" button redirects to the login portal', () => {
    HomePage.visit();
    HomePage.verifyLogInLink();
  });

  // TC-04
  it('Verify navigation to the "Pricing" page via header menu', () => {
    HomePage.visit();
    HomePage.navigateToPricing();
    cy.url().should('include', '/pricing');
    cy.get('h1').should('contain.text', 'Pricing');
  });

  // TC-05
  it('Verify navigation to the "Voice API" product page', () => {
    HomePage.visit();
    HomePage.navigateToVoiceApi();
    cy.url().should('include', '/products/voice-api');
  });

  // TC-06
  it('Verify the presence of the "Solutions" page', () => {
    cy.visit('/solutions');
    cy.url().should('include', '/solutions');
    cy.get('h1').should('be.visible');
  });

  // TC-07
  it('Verify the "Contact Us" button opens the contact form', () => {
    HomePage.visit();
    HomePage.clickContactUs();
    cy.url().should('include', '/contact-us');
  });

  // TC-08
  it('Verify footer links (e.g. Terms and Conditions)', () => {
    HomePage.visit();
    HomePage.clickTermsAndConditions();
    cy.url().should('include', '/terms-and-conditions');
  });

  // TC-09
  it('Verify "Careers" page load', () => {
    HomePage.visit();
    HomePage.navigateToCareers();
    cy.url().should('include', '/careers');
  });

  // TC-10
  it('Verify cookie consent popup or privacy policy link visibility', () => {
    HomePage.visit();
    HomePage.verifyPrivacyPolicy();
  });
});
