import FooterPage from '../../pageObjects/footer.page';
import TermsOfServicePage from '../../pageObjects/termsOfService.page';
import PrivacyPolicyPage from '../../pageObjects/privacyPolicy.page';
import { FooterTestResult } from '../../testResult/footer.testResult';
import { termsOfServiceTestResult } from '../../testResult/termsOfService.testResult';
import { privacyPolicyTestResult } from '../../testResult/privacyPolicy.testResult';

describe('[REGRESSION] FOOTER', function() {
  before(() => {
    FooterPage.open();
  });
  it('Footer is displayed', function() {
    expect(FooterPage.footer.isDisplayed()).true;
  });

  it('Footer should have correct text', function() {
    expect(FooterPage.footer.getText()).eq(FooterTestResult.footerText);
  });

  it('Footer link "contact us" is displayed', function() {
    expect(FooterPage.contactUs.isDisplayed()).true;
  });

  it('Footer link "contact us" has correct text', function() {
    expect(FooterPage.contactUs.getText()).eq(FooterTestResult.contactUsText);
  });

  it('Footer link "Terms of Service" is displayed', function() {
    expect(FooterPage.termsOfService.isDisplayed()).true;
  });

  it('Footer link "Terms of Service" is displayed', function() {
    expect(FooterPage.termsOfService.getText()).eq(FooterTestResult.termsOfServiceText);
  });

  it('Footer link "Privacy Policy" is displayed', function() {
    expect(FooterPage.privacyPolicy.isDisplayed()).true;
  });

  it('Redirect to "Terms of service" page is correct', function() {
    FooterPage.termsOfService.click();
    expect(TermsOfServicePage.headerTermsOfService.getText()).eq(termsOfServiceTestResult.header);
  });

  it('Redirect to "Privacy Policy" page is correct', function() {
    FooterPage.open();
    FooterPage.privacyPolicy.click();
    expect(PrivacyPolicyPage.headerPrivacyPolicy.getText()).eq(privacyPolicyTestResult.header);
  });
});
