import ContactUsPage from '../../pageObjects/contactUs.page';
import userFake from '../../testData/userFake';
import { contactUsTestResult } from '../../testResult/contactUs.testResult';

describe('[SMOKE] CONTACT US PAGE', () => {
  before('Before', () => {
    ContactUsPage.open();
  });

  describe('CONTACT US PAGE FIELDS ACCEPT DATA', function() {
    it('inputNameField should accept data correct', function() {
      ContactUsPage.nameInputFld.setValue(userFake.firstName);
      expect(ContactUsPage.nameInputFld.getValue()).eq(userFake.firstName);
    });

    it('inputEmail field accepts data correct', function () {
      ContactUsPage.emailInputFld.setValue(userFake.email);
      expect(ContactUsPage.emailInputFld.getValue()).eq(userFake.email);
    });

    it('phone field accepts data correct', function () {
      ContactUsPage.phoneInputFld.setValue(userFake.phone);
      expect(ContactUsPage.phoneInputFld.getValue()).eq(userFake.phone);
    });

    it('message field accepts data correct', function () {
      ContactUsPage.messageInputFld.setValue(userFake.message);
      expect(ContactUsPage.resetBtn.isClickable()).eq(true);
      ContactUsPage.submitBtn.click();
      expect(ContactUsPage.confirmationText.getText()).eq(contactUsTestResult.submitConfirmation);
    });
  });
});
