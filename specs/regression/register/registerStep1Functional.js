import RegisterPage from '../../../pageObjects/register.page';
import { inputRegisterStep1 } from '../../../testData/register.testData';
import { expectedRegisterStep1 } from '../../../testResult/registerPage.testResult';

describe('REGISTER PAGE STEP-1 FUNCTIONAL PART', function() {
  beforeEach(() => {
    RegisterPage.open();
  });

  it('First name field should accept letter " min input "  ', function() {
    RegisterPage.firstNameInput.setValue(inputRegisterStep1.firstLastNameMin);
    expect(RegisterPage.firstNameInput.getValue()).eq(expectedRegisterStep1.firstLastNameMin);
  });

  it('First name field should accept letter " maximum input "  ', function() {
    RegisterPage.firstNameInput.setValue(inputRegisterStep1.firstLastNameMax);
    expect(RegisterPage.firstNameInput.getValue()).eq(expectedRegisterStep1.firstLastNameMax);
  });

  it('First name field should accept letter " a\'sssa- "  ', function() {
    RegisterPage.firstNameInput.setValue(inputRegisterStep1.firstLastName3);
    expect(RegisterPage.firstNameInput.getValue()).eq(expectedRegisterStep1.firstLastName3);
  });

  it('Last name field should accept letter " min input "  ', function() {
    RegisterPage.lastNameInput.setValue(inputRegisterStep1.firstLastNameMin);
    expect(RegisterPage.lastNameInput.getValue()).eq(expectedRegisterStep1.firstLastNameMin);
  });

  it('Last name field should accept letter " maximum input"  ', function() {
    RegisterPage.lastNameInput.setValue(inputRegisterStep1.firstLastNameMax);
    expect(RegisterPage.lastNameInput.getValue()).eq(expectedRegisterStep1.firstLastNameMax);
  });

  it('TC-97 Last name field should accept letter " a\'sssa- "  ', function() {
    RegisterPage.lastNameInput.setValue(inputRegisterStep1.firstLastName3);
    expect(RegisterPage.lastNameInput.getValue()).eq(expectedRegisterStep1.firstLastName3);
  });

  it('Email field should accept general format of email ', function() {
    RegisterPage.email.setValue(inputRegisterStep1.email);
    expect(RegisterPage.email.getValue()).eq(expectedRegisterStep1.email);
  });

  it('Password field should accept 5 random letters + "@" symbol and 3 number "123" ', function() {
    RegisterPage.password.setValue(inputRegisterStep1.password);
    expect(RegisterPage.password.getValue()).eq(expectedRegisterStep1.password);
  });

  it('User should be able to expose the password', function() {
    RegisterPage.password.setValue(inputRegisterStep1.password);
    RegisterPage.eyeIconClosed.click();
    expect(RegisterPage.eyeIconOpen.isDisplayed()).true;
  });

  it('User should be able to agree with the terms ans agreements by clicking the checkbox ', function() {
    RegisterPage.agreementCheckBox.click();
    expect(RegisterPage.agreementCheckBox.isSelected()).true;
  });

  it('User should be able to click on terms and agreements link ', function() {
    expect(RegisterPage.termsAndAgreementsLink.isClickable()).true;
  });

  it('Register button should be clickable if all required fields are filled ', function() {
    RegisterPage.firstNameInput.setValue(inputRegisterStep1.firstLastName3);
    RegisterPage.lastNameInput.setValue(inputRegisterStep1.firstLastName3);
    RegisterPage.email.setValue(inputRegisterStep1.email);
    RegisterPage.password.setValue(inputRegisterStep1.password);
    RegisterPage.agreementCheckBox.click();
    expect(RegisterPage.registerBtn.isClickable()).true;
  });

  it('User should be able to click Log in button', function() {
    expect(RegisterPage.loginLink.isClickable()).true;
  });
});
