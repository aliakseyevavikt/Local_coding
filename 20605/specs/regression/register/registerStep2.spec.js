import RegisterPage from '../../../../pageObjects/register.page';
import RegisterStep2Page from '../../../../pageObjects/registerStep2.page';
import { registerPageTestResult } from '../../../testResult/register';
import { newUser } from '../../../testData/register';


describe('REGISTER PAGE STEP 2', function () {
  before(() => {
    RegisterPage.open();
    RegisterPage.registerUser(newUser);
    browser.maximizeWindow();
  });

  describe('HEADER', function () {
    it('TC-077 header should be displayed', function () {
      expect(RegisterStep2Page.headerRegisterStep2.isDisplayed());
    });

    it('TC-078 header has correct text', function () {
      expect(RegisterStep2Page.headerRegisterStep2.getText()).eq(
        `Dear ${newUser.firstName} ${newUser.lastName}!\nPlease complete these fields`);
    });
  });

  describe('ELEMENTS ARE DISPLAYED', function () {
    it('TC-083 Phone field should be displayed', function () {
      expect(RegisterStep2Page.phoneNumber.isDisplayed());
    });

    it('TC-086 Phone field placeholder has correct text', function () {
      expect(RegisterStep2Page.phoneNumber.getAttribute('placeholder')).eq(
        registerPageTestResult.phoneNumberPlaceholder);
    });

    it('TC-084 Phone label is displayed', function () {
      expect(RegisterStep2Page.phoneLabel.isDisplayed());
    });

    it('TC-085 Phone label has correct text', function () {
      expect(RegisterStep2Page.phoneLabel.getText()).eq(
        registerPageTestResult.phoneLabel);
    });

    it('TC-079 Country field should be displayed', function () {
      expect(RegisterStep2Page.openDropdown.isDisplayed());
    });

    it('TC-080 Country label is displayed', function () {
      expect(RegisterStep2Page.countryLabel.isDisplayed());
    });

    it('TC-081 Country label has correct text', function () {
      expect(RegisterStep2Page.countryLabel.getText()).eq(
        registerPageTestResult.countryLabel);
    });

    it('TC-087 Submit Btn should be displayed', function () {
      expect(RegisterStep2Page.SubmitBtn.isDisplayed());
    });

    it('TC-088 Submit Btn has correct text', function () {
      expect(RegisterStep2Page.SubmitBtn.getText()).eq(registerPageTestResult.submitBtn);
    });

    it('TC-089 Skip Btn should be displayed', function () {
      expect(RegisterStep2Page.skipBtn.isDisplayed());
    });

    it('TC-090 Skip Btn has correct text', function () {
      expect(RegisterStep2Page.skipBtn.getText()).eq(registerPageTestResult.skipBtn);
    });
  });


});


