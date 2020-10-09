import RegisterPage from '../../../pageObjects/register.page';
import { registerPageTestResult } from '../../../testResult/register.testResult';

describe('REGISTER PAGE STEP 1', function () {
  before(() => {
    RegisterPage.open();
  });

  describe('HEADER', function () {
    it('Header should be displayed', function () {
      expect(RegisterPage.headerRegister.isDisplayed()).true;
    });

    it('Header should have correct text', function () {
      expect(RegisterPage.headerRegister.getText()).eq(registerPageTestResult.header);
    });
  });

  describe('ELEMENTS ARE DISPLAYED', function () {
    it('First Name field should be displayed', function () {
      expect(RegisterPage.firstNameInput.isDisplayed()).true;
    });

    it('Last Name field should be displayed', function () {
      expect(RegisterPage.lastNameInput.isDisplayed()).true;
    });

    it('Email field should be displayed', function () {
      expect(RegisterPage.email.isDisplayed()).true;
    });

    it('Password field should be displayed', function () {
      expect(RegisterPage.password.isDisplayed()).true;
    });

    it('Eye icon should be displayed', function () {
      expect(RegisterPage.eyeIconClosed.isDisplayed()).true;
    });

    it('Lock icon should be displayed', function () {
      expect(RegisterPage.lockIcon.isDisplayed()).true;
    });

    it('Terms and agreements checkbox should be displayed', function () {
      expect(RegisterPage.agreementCheckBox.isSelected()).false;
    });

    it('Terms and agreements link should be displayed', function () {
      expect(RegisterPage.termsAndAgreementsLink.isDisplayed()).true;
    });

    it('Register button should be displayed', function () {
      expect(RegisterPage.registerBtn.isDisplayed()).true;
    });

    it('Log in link should be displayed', function () {
      expect(RegisterPage.loginLink.isDisplayed()).true;
    });
  });

  describe('ELEMENTS HAVE CORRECT TEXT', function () {
    it('First Name field placeholder should have correct text', function () {
      expect(RegisterPage.firstNameInput.getAttribute('placeholder')).eq(registerPageTestResult.firstNamePlaceholder);
    });

    it('Last Name field placeholder should have correct text', function () {
      expect(RegisterPage.lastNameInput.getAttribute('placeholder')).eq(registerPageTestResult.lastNamePlaceholder);
    });

    it('Email field placeholder should have correct text', function () {
      expect(RegisterPage.email.getAttribute('placeholder')).eq(registerPageTestResult.email);
    });

    it('Password field placeholder should have correct text', function () {
      expect(RegisterPage.password.getAttribute('placeholder')).eq(registerPageTestResult.password);
    });

    it('Agreement label should have correct text', function () {
      expect(RegisterPage.agreementLabel.getText()).eq(
        registerPageTestResult.agreementLabel + registerPageTestResult.termsAndAgreementsLink,
      );
    });

    it('Terms and agreements link should have correct text', function () {
      expect(RegisterPage.termsAndAgreementsLink.getText()).eq(registerPageTestResult.termsAndAgreementsLink);
    });

    it('Register button should have correct text', function () {
      expect(RegisterPage.registerBtn.getText()).eq(registerPageTestResult.registerBtn);
    });

    it('Log in prompt label should have correct text', function () {
      expect(RegisterPage.promptLabel.getText()).eq(
        registerPageTestResult.loginPromptLabel + ' ' + registerPageTestResult.loginLink + '.',
      );
    });

    it('Log in link should have correct text', function () {
      expect(RegisterPage.loginLink.getText()).eq(registerPageTestResult.loginLink);
    });
  });
});
