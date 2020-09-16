import { expect } from 'chai';
import FooterPage from '../../../pageObjects/footer.page';
import ContactUsPage from '../../../pageObjects/contactUs.page';
import TermsOfServicePage from '../../../pageObjects/termsOfService.page';
import PrivacyPolicyPage from '../../../pageObjects/privacyPolicy.page';
import { FooterItems } from '../../testResult/footer';
import { contactUs } from '../../testResult/contactUs';
import { termsOfService } from '../../testResult/termsOfService';
import { privacyPolicy } from '../../testResult/privacyPolicy';

describe('FOOTER ELEMENTS', function () {
  before(() => {
    FooterPage.open();
  });
  it('TC-008 footer is displayed', function () {
    expect(FooterPage.footer.isDisplayed()).eq(true);
  });

  it('TC-009 footer should have correct text', function () {
    expect(FooterPage.footer.getText()).eq(FooterItems.footerText);
  });

  it('TC-010 footer link "contact us" is clickable', function () {
    expect(FooterPage.contactUs.isClickable()).eq(true);
  });

  it('TC-011 footer link "Terms of Service" is clickable', function () {
    expect(FooterPage.termsOfService.isClickable()).eq(true);
  });

  it('TC-012 footer link "Privacy Policy" is clickable', function () {
    expect(FooterPage.privacyPolicy.isClickable()).eq(true);
  });

  it('TC-013 Verify that redirect to "contact us" page is correct', function () {
    FooterPage.navToContactUs();
    expect(ContactUsPage.headerContactUs.getText()).eq(contactUs.header);
  });

  it('TC-014 Verify that redirect to "Terms of service" page is correct', function () {
    FooterPage.navToTermsOfService();
    expect(TermsOfServicePage.headerTermsOfService.getText()).eq(termsOfService.header);
  });

  it('TC-015 Verify that redirect to "Privacy Policy" page is correct', function () {
    FooterPage.navToPrivacyPolicy();
    expect(PrivacyPolicyPage.headerPrivacyPolicy.getText()).eq(privacyPolicy.header);
  });
});
