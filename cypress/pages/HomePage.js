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
    cy.visit('/');
  }

  verifyTitleAndMeta() {
    cy.title().should('match', /Telnyx/i);
    cy.document().get('head meta[name="description"]')
      .should('have.attr', 'content')
      .and('not.be.empty');
  }

  clickSignUp() {
    this.signUpButton.click({ force: true });
  }

  verifyLogInLink() {
    this.logInLink.should('have.attr', 'href').and('include', 'portal.telnyx.com');
  }

  navigateToPricing() {
    this.pricingLink.click({ force: true });
  }

  navigateToVoiceApi() {
    this.voiceApiLink.click({ force: true });
  }

  clickContactUs() {
    this.contactUsButton.click({ force: true });
  }

  clickTermsAndConditions() {
    cy.get('footer').scrollIntoView();
    this.termsConditionsLink.click({ force: true });
  }

  navigateToCareers() {
    cy.get('footer').scrollIntoView();
    this.careersLink.click({ force: true });
  }

  verifyPrivacyPolicy() {
    cy.get('footer').scrollIntoView();
    this.privacyPolicyLink.should('be.visible');
  }
}

export default new HomePage();
