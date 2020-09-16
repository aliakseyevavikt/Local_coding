import ContactUsPage from '../../../pageObjects/contactUs.page';
import user from '../../../testData/user';
import { newUser } from '../../../20610/data/fakeData';
import expected from '../../../20610/data/expected.json';

describe('CONTACT US PAGE, SMOKE', () => {
  before('Before', () => {
    ContactUsPage.open();
  });

  describe('CONTACT US PAGE FIELDS ACCEPT DATA', () => {
    it('CU01 inputNameField should accept data correct', function () {
      ContactUsPage.nameInputFld.setValue(user.new.firstName);
      expect(ContactUsPage.nameInputFld.getValue()).eq(user.new.firstName);
    });

    it('CU02 inputEmail field accepts data correct', function () {
      ContactUsPage.emailInputFld.setValue(user.new.email);
      expect(ContactUsPage.emailInputFld.getValue()).eq(user.new.email);
    });

    it('CU03 phone field accepts data correct', function () {
      ContactUsPage.phoneInputFld.setValue(user.new.phone);
      expect(ContactUsPage.phoneInputFld.getValue()).eq(user.new.phone);
    });

    it('CU04 message field accepts data correct', function () {
      ContactUsPage.messageInputFld.setValue(newUser.message);
      ContactUsPage.submitBtn.click();
      expect(ContactUsPage.confirmationText.getText()).eq(expected.contactUsElementsDisplayed.submitConfirmation);
    });
  });
});
