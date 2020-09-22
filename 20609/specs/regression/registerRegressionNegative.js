import RegisterPage from '../../../pageObjects/register.page';
import { userNew } from '../../data/registerData';
import { userNegativeData, invalidFirstNameData } from '../../data/userNegativeData';
import ResetPasswordPage from '../../../pageObjects/resetPassword.page';
import { errorMessages } from '../../data/errorMessages';
import user from '../../../testData/userRoles';

describe('REGISTER USER - NEGATIVE', () => {
  before(() => {
    RegisterPage.open();
  });

  it('TC-044 should Submit button be disabled by default', () => {
    expect(RegisterPage.registerBtn.isEnabled()).eq(false);
  });

  it('TC-045 should Submit Button stay disabled if password field has not been populated (the checkbox is selected)', () => {
    RegisterPage.firstNameInput.setValue(userNew.firstName);
    RegisterPage.lastNameInput.setValue(userNew.lastName);
    RegisterPage.email.setValue(userNew.email);
    RegisterPage.agreementCheckBox.click();
    expect(RegisterPage.registerBtn.isEnabled()).eq(false);
  });

  it('TC-046 should Submit Button stay disabled when all fields have been populated but Checkbox is not selected ', () => {
    RegisterPage.firstNameInput.setValue(userNew.firstName);
    RegisterPage.lastNameInput.setValue(userNew.lastName);
    RegisterPage.email.setValue(userNew.email);
    RegisterPage.password.setValue(userNew.password);
    expect(RegisterPage.registerBtn.isEnabled()).eq(false);
  });

  it('TC-047 should be displayed a pop -up message when First Name Field is populated with incorrect data ', () => {
    for (let i = 0; i < invalidFirstNameData.length; i++) {
      browser.refresh();
      RegisterPage.firstNameInput.setValue(invalidFirstNameData[i]);
      RegisterPage.lastNameInput.setValue(userNew.lastName);
      RegisterPage.email.setValue(userNew.email);
      RegisterPage.password.setValue(userNew.password);
      RegisterPage.agreementCheckBox.click();
      RegisterPage.registerBtn.click();
      browser.waitUntil(() => ResetPasswordPage.errorMessage.isDisplayed()).true;
    }
  });

  it('TC-048 should a pop -up message be displayed "User was not created"  when firstName field has been populated with invalid data', () => {
    browser.refresh();
    RegisterPage.firstNameInput.setValue(userNegativeData.firstNameInvalid);
    RegisterPage.lastNameInput.setValue(userNew.lastName);
    RegisterPage.email.setValue(userNew.email);
    RegisterPage.password.setValue(userNew.password);
    RegisterPage.agreementCheckBox.click();
    RegisterPage.registerBtn.click();
    browser.waitUntil(() => ResetPasswordPage.errorMessage.getText() === errorMessages.userNotCreatedError);
  });

  it('TC-049 should a pop -up message be displayed when an existing email is entered', () => {
    browser.refresh();
    RegisterPage.firstNameInput.setValue(userNew.firstName);
    RegisterPage.lastNameInput.setValue(userNew.lastName);
    RegisterPage.password.setValue(userNew.password);
    RegisterPage.agreementCheckBox.click();
    RegisterPage.email.setValue(user.student.email);
    RegisterPage.registerBtn.click();
    browser.waitUntil(() => ResetPasswordPage.errorMessage.isDisplayed());
  });

  it('TC-050 should a pop -up message be displayed "User with this e-mail exists" when an existing email is entered', () => {
    browser.refresh();
    RegisterPage.firstNameInput.setValue(userNew.firstName);
    RegisterPage.lastNameInput.setValue(userNew.lastName);
    RegisterPage.password.setValue(userNew.password);
    RegisterPage.agreementCheckBox.click();
    RegisterPage.email.setValue(user.student.email);
    RegisterPage.registerBtn.click();
    browser.waitUntil(() => ResetPasswordPage.errorMessage.getText() === errorMessages.emailExistsError);
  });

  it('TC-051 should a pop -up message be displayed "Wrong password format" when an existing email is entered', () => {
    browser.refresh();
    RegisterPage.firstNameInput.setValue(userNew.firstName);
    RegisterPage.lastNameInput.setValue(userNew.lastName);
    RegisterPage.email.setValue(userNew.email);
    RegisterPage.password.setValue(userNegativeData.invalidPassword);
    RegisterPage.agreementCheckBox.click();
    RegisterPage.registerBtn.click();
    browser.waitUntil(() => ResetPasswordPage.errorMessage.getText() === errorMessages.wrongPasswordFormatError);
  });

  it('TC-052 should be displayed a pop -up message when entering 4 digits passwords ', () => {
    RegisterPage.firstNameInput.setValue(userNew.firstName);
    RegisterPage.lastNameInput.setValue(userNew.lastName);
    RegisterPage.email.setValue(userNew.email);
    RegisterPage.password.setValue(userNegativeData.invalidPassword);
    RegisterPage.agreementCheckBox.click();
    RegisterPage.registerBtn.click();
    browser.waitUntil(() => ResetPasswordPage.errorMessage.isDisplayed());
  });

  it('TC-053 should check that by deleting data in the First Name field (making it empty) message ""Required" will appear under the field', () => {
    browser.refresh();
    RegisterPage.firstNameInput.setValue(userNegativeData.oneLetterInvalidName);
    browser.keys('Back space');
    browser.waitUntil(() => RegisterPage.inputFieldErrorMessages[0].getText() === errorMessages.emptyFieldError);
  });
});
