import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import { registerPageTestResult } from '../../../testResult/registerPage.testResult';
import { newUser } from '../../../testData/register.testData';


describe('REGISTER PAGE STEP 2', function () {
  before(() => {
    RegisterPage.open();
    RegisterPage.registerUser(newUser);
    browser.maximizeWindow();
  });

  describe('HEADER', function () {
    it('Header should be displayed', function () {
      expect(RegisterStep2Page.headerRegisterStep2.isDisplayed());
    });

    it('Header has correct text', function () {
      expect(RegisterStep2Page.headerRegisterStep2.getText()).eq(
        `Dear ${newUser.firstName} ${newUser.lastName}!\nPlease complete these fields`);
    });
  });

  describe('ELEMENTS ARE DISPLAYED', function () {
    it('Phone field should be displayed', function () {
      expect(RegisterStep2Page.phoneNumber.isDisplayed());
    });

    it('Phone field placeholder has correct text', function () {
      expect(RegisterStep2Page.phoneNumber.getAttribute('placeholder')).eq(
        registerPageTestResult.phoneNumberPlaceholder);
    });

    it('Phone label is displayed', function () {
      expect(RegisterStep2Page.phoneLabel.isDisplayed());
    });

    it('Phone label has correct text', function () {
      expect(RegisterStep2Page.phoneLabel.getText()).eq(
        registerPageTestResult.phoneLabel);
    });

    it('Country field should be displayed', function () {
      expect(RegisterStep2Page.openDropdown.isDisplayed());
    });

    it('Country label is displayed', function () {
      expect(RegisterStep2Page.countryLabel.isDisplayed());
    });

    it('Country label has correct text', function () {
      expect(RegisterStep2Page.countryLabel.getText()).eq(
        registerPageTestResult.countryLabel);
    });

    it('Submit Btn should be displayed', function () {
      expect(RegisterStep2Page.SubmitBtn.isDisplayed());
    });

    it('Submit Btn has correct text', function () {
      expect(RegisterStep2Page.SubmitBtn.getText()).eq(registerPageTestResult.submitBtn);
    });

    it('Skip Btn should be displayed', function () {
      expect(RegisterStep2Page.skipBtn.isDisplayed());
    });

    it('Skip Btn has correct text', function () {
      expect(RegisterStep2Page.skipBtn.getText()).eq(registerPageTestResult.skipBtn);
    });
  });


});


