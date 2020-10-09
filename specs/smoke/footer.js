import FooterPage from '../../pageObjects/footer.page';
import ContactUsPage from '../../pageObjects/contactUs.page';
import { contactUsTestResult } from '../../testResult/contactUs.testResult';

describe('[SMOKE] FOOTER', function() {
  before(() => {
    FooterPage.open();
  });

  it('Redirect to "contact us" page is correct', function() {
    FooterPage.contactUs.click();
    expect(ContactUsPage.headerContactUs.getText()).eq(contactUsTestResult.header);
  });
});
