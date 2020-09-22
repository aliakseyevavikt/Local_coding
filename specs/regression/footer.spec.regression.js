import FooterPage from '../../pageObjects/footer.page';
import ContactUsPage from '../../pageObjects/contactUs.page';
import TermsOfServicePage from '../../../pageObjects/termsOfService.page';
import PrivacyPolicyPage from '../../../pageObjects/privacyPolicy.page';
import { FooterItems } from '../../testResult/footer';
import { contactUs } from '../../testResult/contactUs';
import { termsOfService } from '../../testResult/termsOfService';
import { privacyPolicy } from '../../testResult/privacyPolicy';

describe('FOOTER ELEMENTS', function() {
  before(() => {
    FooterPage.open();
  });
  it('Footer is displayed', function() {
    expect(FooterPage.footer.isDisplayed()).eq(true);
  });

  it('Footer should have correct text', function() {
    expect(FooterPage.footer.getText()).eq(FooterItems.footerText);
  });

  it('Footer link "contact us" is clickable', function() {
    expect(FooterPage.contactUs.isClickable()).eq(true);
  });

  it('Footer link "Terms of Service" is clickable', function() {
    expect(FooterPage.termsOfService.isClickable()).eq(true);
  });

  it('Footer link "Privacy Policy" is clickable', function() {
    expect(FooterPage.privacyPolicy.isClickable()).eq(true);
  });
});
