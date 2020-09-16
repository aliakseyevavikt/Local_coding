import RegisterPage from '../../../../pageObjects/register.page';
import { negativeRegisterStep1 } from '../../../testData/register';
import { newUser } from '../../../testData/register';
import user from '../../../../testData/user';
import { errorMessagesRegistration } from '../../../testResult/errorMessages';

describe('REGISTER PAGE STEP-1 NEGATIVE', function () {
  beforeEach(() => {
    RegisterPage.open();
  });

  describe('REGISTER BUTTON IS DISABLED FOR EMPTY REQUIRED FIELDS', function () {
    it('TC-013 should verify that user can not register with empty First Name', function () {
      RegisterPage.lastNameInput.setValue(newUser.lastName);
      RegisterPage.email.setValue(newUser.email);
      RegisterPage.password.setValue(newUser.password);
      RegisterPage.agreementCheckBox.click();
      expect(RegisterPage.registerBtn.isClickable()).eq(false);
    });

    it('TC-014 should verify that user can not register with empty Last Name', function () {
      RegisterPage.firstNameInput.setValue(newUser.firstName);
      RegisterPage.email.setValue(newUser.email);
      RegisterPage.password.setValue(newUser.password);
      RegisterPage.agreementCheckBox.click();
      expect(RegisterPage.registerBtn.isClickable()).eq(false);
    });

    it('TC-015 should verify that user can not register with empty Email', function () {
      RegisterPage.firstNameInput.setValue(newUser.firstName);
      RegisterPage.lastNameInput.setValue(newUser.lastName);
      RegisterPage.password.setValue(newUser.password);
      RegisterPage.agreementCheckBox.click();
      expect(RegisterPage.registerBtn.isClickable()).eq(false);
    });

    it('TC-016 should verify that user can not register with empty Password', function () {
      RegisterPage.firstNameInput.setValue(newUser.firstName);
      RegisterPage.lastNameInput.setValue(newUser.lastName);
      RegisterPage.email.setValue(newUser.email);
      RegisterPage.agreementCheckBox.click();
      expect(RegisterPage.registerBtn.isClickable()).eq(false);
    });

    it('TC-017 should verify that user can not register with unchecked Terms and agreements checkbox\n', function () {
      RegisterPage.firstNameInput.setValue(newUser.firstName);
      RegisterPage.lastNameInput.setValue(newUser.lastName);
      RegisterPage.email.setValue(newUser.email);
      RegisterPage.password.setValue(newUser.password);
      expect(RegisterPage.registerBtn.isClickable()).eq(false);
    });
  });

  describe('ENTERING INCORRECT DATA', function () {
    it('TC-118 should verify that user can not register with invalid First Name', function () {
      for (let i = 0; i < negativeRegisterStep1.invalidName.length; i++) {
        browser.refresh();
        RegisterPage.firstNameInput.setValue(negativeRegisterStep1.invalidName[i]);
        RegisterPage.lastNameInput.setValue(newUser.lastName);
        RegisterPage.email.setValue(newUser.email);
        RegisterPage.password.setValue(newUser.password);
        RegisterPage.agreementCheckBox.click();
        RegisterPage.registerBtn.click();
        browser.waitUntil(() => RegisterPage.errorMessage.isDisplayed());
        expect(RegisterPage.errorMessage.getText()).eq(errorMessagesRegistration.userNotCreatedError);
      }
    });

    it('TC-119 should verify that user can not register with invalid Last Name', function () {
      for (let i = 0; i < negativeRegisterStep1.invalidName.length; i++) {
        browser.refresh();
        RegisterPage.firstNameInput.setValue(newUser.firstName);
        RegisterPage.lastNameInput.setValue(negativeRegisterStep1.invalidName[i]);
        RegisterPage.email.addValue(newUser.email);
        RegisterPage.password.setValue(newUser.password);
        RegisterPage.agreementCheckBox.click();
        RegisterPage.registerBtn.click();
        browser.waitUntil(() => RegisterPage.errorMessage.isDisplayed());
        expect(RegisterPage.errorMessage.getText()).eq(errorMessagesRegistration.userNotCreatedError);
      }
    });

    it('TC-120 should verify that user can not register with invalid Email', function () {
      for (let i = 0; i < negativeRegisterStep1.invalidEmail1.length; i++) {
        browser.refresh();
        RegisterPage.firstNameInput.setValue(newUser.firstName);
        RegisterPage.lastNameInput.setValue(newUser.lastName);
        RegisterPage.email.setValue(negativeRegisterStep1.invalidEmail1[i]);
        browser.waitUntil(() => RegisterPage.inputFieldErrorMessages[0].isDisplayed());
        expect(RegisterPage.inputFieldErrorMessages[0].getText()).eq(errorMessagesRegistration.invalidEmailError);
      }
    });

    it('TC-121 should verify that user can not register with already existing email', function () {
      RegisterPage.firstNameInput.setValue(newUser.firstName);
      RegisterPage.lastNameInput.setValue(newUser.lastName);
      RegisterPage.email.setValue(user.new.email);
      RegisterPage.password.setValue(newUser.password);
      RegisterPage.agreementCheckBox.click();
      RegisterPage.registerBtn.click();
      browser.waitUntil(() => RegisterPage.errorMessage.isDisplayed());
      expect(RegisterPage.errorMessage.getText()).eq(errorMessagesRegistration.emailExistsError);
    });

    it('TC-122 should verify that user can not register with invalid password', function () {
      RegisterPage.firstNameInput.setValue(newUser.firstName);
      RegisterPage.lastNameInput.setValue(newUser.lastName);
      RegisterPage.email.setValue(newUser.email);
      RegisterPage.password.setValue(negativeRegisterStep1.invalidPassword);
      RegisterPage.agreementCheckBox.click();
      RegisterPage.registerBtn.click();
      browser.waitUntil(() => RegisterPage.errorMessage.waitForDisplayed());
      expect(RegisterPage.errorMessage.getText()).eq(errorMessagesRegistration.wrongPasswordError);
    });

    it('TC-123 should verify that "Required" appears after First Name has been cleared', function () {
      RegisterPage.firstNameInput.setValue(negativeRegisterStep1.oneLetter);
      browser.keys('Back space');
      browser.waitUntil(() => RegisterPage.inputFieldErrorMessages[0].isDisplayed());
      expect(RegisterPage.inputFieldErrorMessages[0].isDisplayed()).true;
    });

    it('TC-124 should verify that "Required" appears after Last Name has been cleared', function () {
      RegisterPage.lastNameInput.setValue(negativeRegisterStep1.oneLetter);
      browser.keys('Back space');
      browser.waitUntil(() => RegisterPage.inputFieldErrorMessages[0].isDisplayed());
      expect(RegisterPage.inputFieldErrorMessages[0].isDisplayed()).true;
    });

    it('TC-125 should verify that "Required" appears after Email has been cleared', function () {
      RegisterPage.email.setValue(negativeRegisterStep1.oneLetter);
      browser.keys('Back space');
      browser.waitUntil(() => RegisterPage.inputFieldErrorMessages[0].isDisplayed());
      expect(RegisterPage.inputFieldErrorMessages[0].isDisplayed()).true;
    });

    it('TC-126 should verify that "Required" appears after password has been cleared', function () {
      RegisterPage.password.setValue(negativeRegisterStep1.oneLetter);
      browser.keys('Back space');
      browser.waitUntil(() => RegisterPage.inputFieldErrorMessages[0].isDisplayed());
      expect(RegisterPage.inputFieldErrorMessages[0].isDisplayed()).true;
    });
  });
});
