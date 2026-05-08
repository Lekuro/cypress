class HomePage {
  // Locators
  get signUpButton() { return cy.get('header').contains(/Sign up/i); }
  get logInLink() { return cy.get('header').contains(/Log In/i); }
  get pricingLink() { return cy.get('header').contains(/Pricing/i); }
  get productsMenu() { return cy.get('header').contains(/Products/i); }
  get voiceApiLink() { return cy.get('header').contains(/Voice API/i); }
  get contactUsButton() { return cy.get('header').contains(/Contact Us/i).first(); }
  get termsConditionsLink() { return cy.get('footer').contains(/Terms and Conditions/i).first(); }
  get companyMenu() { return cy.get('header').contains(/Company/i); }
  get careersLink() { return cy.get('footer').contains(/Careers/i).first(); }
  get privacyPolicyLink() { return cy.get('footer').contains(/Privacy Policy/i); }

  // Actions
  visit() {
    cy.visit('/', { failOnStatusCode: false });
  }

  verifyTitleAndMeta(expectedTitle) {
    cy.title().should('match', new RegExp(expectedTitle, 'i'));
    cy.document().get('head meta[name="description"]')
      .should('have.attr', 'content')
      .and('not.be.empty');
  }

  clickSignUp() {
    this.signUpButton.click({ force: true });
  }

  verifySignUpPage() {
    cy.url().should('include', '/sign-up');
  }

  verifyLogInLink() {
    this.logInLink.should('have.attr', 'href').and('include', 'portal.telnyx.com');
  }

  navigateToPricing() {
    this.pricingLink.click({ force: true });
  }

  verifyPricingPage(expectedHeader) {
    cy.url().should('include', '/pricing');
    cy.get('h1').should('contain.text', expectedHeader);
  }

  navigateToVoiceApi() {
    this.voiceApiLink.click({ force: true });
  }

  verifyVoiceApiPage() {
    cy.url().should('include', '/products/voice-api');
  }

  clickContactUs() {
    this.contactUsButton.click({ force: true });
  }

  verifyContactUsPage() {
    cy.url().should('include', '/contact-us');
  }

  clickTermsAndConditions() {
    cy.get('footer').scrollIntoView();
    this.termsConditionsLink.click({ force: true });
  }

  verifyTermsPage() {
    cy.url().should('include', '/terms-and-conditions');
  }

  navigateToCareers() {
    cy.get('footer').scrollIntoView();
    this.careersLink.click({ force: true });
  }

  verifyCareersPage() {
    cy.url().should('include', '/careers');
  }

  verifyPrivacyPolicy() {
    cy.get('footer').scrollIntoView();
    this.privacyPolicyLink.should('be.visible');
  }
}

export default new HomePage();
