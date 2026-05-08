import HomePage from '../pages/HomePage';

describe('Telnyx Site Test Plan (POM)', () => {
  let testData;

  beforeEach(() => {
    // Load test data from fixture
    cy.fixture('testData').then((data) => {
      testData = data;
    });

    // Handling uncaught exceptions to prevent tests from failing on non-critical app errors
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  // TC-01
  it('Verify Home Page title and meta tags', () => {
    HomePage.visit();
    HomePage.verifyTitleAndMeta(testData.expectedText.titleMatch);
  });

  // TC-02
  it('Verify "Sign Up" button redirects to the registration page', () => {
    HomePage.visit();
    HomePage.clickSignUp();
    HomePage.verifySignUpPage();
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
    HomePage.verifyPricingPage(testData.expectedText.pricingHeader);
  });

  // TC-05
  it('Verify navigation to the "Voice API" product page', () => {
    HomePage.visit();
    HomePage.navigateToVoiceApi();
    HomePage.verifyVoiceApiPage();
  });

  // TC-06
  it('Verify the presence of the "Solutions" page using custom command', () => {
    cy.visitPageAndVerifyUrl(testData.pages.solutions);
    cy.get('h1').should('be.visible');
  });

  // TC-07
  it('Verify the "Contact Us" button opens the contact form', () => {
    HomePage.visit();
    HomePage.clickContactUs();
    HomePage.verifyContactUsPage();
  });

  // TC-08
  it('Verify footer links (e.g. Terms and Conditions)', () => {
    HomePage.visit();
    HomePage.clickTermsAndConditions();
    HomePage.verifyTermsPage();
  });

  // TC-09
  it('Verify "Careers" page load', () => {
    HomePage.visit();
    HomePage.navigateToCareers();
    HomePage.verifyCareersPage();
  });

  // TC-10
  it('Verify cookie consent popup or privacy policy link visibility', () => {
    HomePage.visit();
    HomePage.verifyPrivacyPolicy();
  });
});
