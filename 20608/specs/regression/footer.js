import { expect } from 'chai';
import FooterPage from '../../../pageObjects/footer.page';
const expectedContactUs = require ('../../data/expected.json').contactUsPage;
const expectedTerms = require ('../../data/expected.json').termsOfServicePage;
const expectedPrivacy = require ('../../data/expected.json').privacyPolicyPage;
const footerText = require ('../../data/expected.json').footerText;

describe('FOOTER FUNCTIONAL', () => {
  before(() => {
    FooterPage.open();
    browser.maximizeWindow();
  });

  it('check footer text ', () => {
    expect(FooterPage.footer.getText()).eq(footerText);
  });

  it('should navigate to contact us page', function() {
    FooterPage.navToContactUs();
    expect(FooterPage.header.getText()).eq(expectedContactUs.header);
  });

  it('should navigate to terms of service page', function() {
    FooterPage.navToTermsOfService();
    expect(FooterPage.header.getText()).eq(expectedTerms.header);
  });

  it('should navigate to privacy policy page', function() {
    FooterPage.navToPrivacyPolicy();
    expect(FooterPage.header.getText()).eq(expectedPrivacy.header);
  });
});
