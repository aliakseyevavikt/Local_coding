import FooterPage from '../../../pageObjects/footer.page';
import ContactUsPage from '../../../pageObjects/contactUs.page';
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

  it('Redirect to "contact us" page is correct', function() {
    FooterPage.navToContactUs();
    expect(ContactUsPage.headerContactUs.getText()).eq(contactUs.header);
  });

  it('Redirect to "Terms of service" page is correct', function() {
    FooterPage.navToTermsOfService();
    expect(TermsOfServicePage.headerTermsOfService.getText()).eq(termsOfService.header);
  });

  it('Redirect to "Privacy Policy" page is correct', function() {
    FooterPage.navToPrivacyPolicy();
    expect(PrivacyPolicyPage.headerPrivacyPolicy.getText()).eq(privacyPolicy.header);
  });
});