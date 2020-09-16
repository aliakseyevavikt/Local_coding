import RegisterPage from '../../../../pageObjects/register.page';
import { inputRegisterStep1 } from '../../../testData/register';
import { expectedRegisterStep1 } from '../../../testResult/register';

describe('REGISTER PAGE STEP-1 FUNCTIONAL PART', function() {
  beforeEach(() => {
    RegisterPage.open();
  });

  it('TC-92 First name field should accept letter " min input "  ', function() {
    RegisterPage.firstNameInput.setValue(inputRegisterStep1.firstLastNameMin);
    expect(RegisterPage.firstNameInput.getValue()).eq(expectedRegisterStep1.firstLastNameMin);
  });

  it('TC-93 First name field should accept letter " maximum input "  ', function() {
    RegisterPage.firstNameInput.setValue(inputRegisterStep1.firstLastNameMax);
    expect(RegisterPage.firstNameInput.getValue()).eq(expectedRegisterStep1.firstLastNameMax);
  });

  it('TC-94 First name field should accept letter " a\'sssa- "  ', function() {
    RegisterPage.firstNameInput.setValue(inputRegisterStep1.firstLastName3);
    expect(RegisterPage.firstNameInput.getValue()).eq(expectedRegisterStep1.firstLastName3);
  });

  it('TC-95 Last name field should accept letter " min input "  ', function() {
    RegisterPage.lastNameInput.setValue(inputRegisterStep1.firstLastNameMin);
    expect(RegisterPage.lastNameInput.getValue()).eq(expectedRegisterStep1.firstLastNameMin);
  });

  it('TC-96 Last name field should accept letter " maximum input"  ', function() {
    RegisterPage.lastNameInput.setValue(inputRegisterStep1.firstLastNameMax);
    expect(RegisterPage.lastNameInput.getValue()).eq(expectedRegisterStep1.firstLastNameMax);
  });

  it('TC-97 Last name field should accept letter " a\'sssa- "  ', function() {
    RegisterPage.lastNameInput.setValue(inputRegisterStep1.firstLastName3);
    expect(RegisterPage.lastNameInput.getValue()).eq(expectedRegisterStep1.firstLastName3);
  });

  it('TC-98 email field should accept general format of email ', function() {
    RegisterPage.email.setValue(inputRegisterStep1.email);
    expect(RegisterPage.email.getValue()).eq(expectedRegisterStep1.email);
  });

  it('TC-99 password field should accept 5 random letters + "@" symbol and 3 number "123" ', function() {
    RegisterPage.password.setValue(inputRegisterStep1.password);
    expect(RegisterPage.password.getValue()).eq(expectedRegisterStep1.password);
  });

  it('TC-100 user should be able to expose the password', function() {
    RegisterPage.password.setValue(inputRegisterStep1.password);
    RegisterPage.eyeIconClosed.click();
    expect(RegisterPage.eyeIconOpen.isDisplayed()).true;
  });

  it('TC-101 user should be able to agree with the terms ans agreements by clicking the checkbox ', function() {
    RegisterPage.agreementCheckBox.click();
    expect(RegisterPage.agreementCheckBox.isSelected()).true;
  });

  it('TC-102 user should be able to click on terms and agreements link ', function() {
    expect(RegisterPage.termsAndAgreementsLink.isClickable()).true;
  });

  it('TC-103 register button should be clickable if all required fields are filled ', function() {
    RegisterPage.firstNameInput.setValue(inputRegisterStep1.firstLastName3);
    RegisterPage.lastNameInput.setValue(inputRegisterStep1.firstLastName3);
    RegisterPage.email.setValue(inputRegisterStep1.email);
    RegisterPage.password.setValue(inputRegisterStep1.password);
    RegisterPage.agreementCheckBox.click();
    expect(RegisterPage.registerBtn.isClickable()).true;
  });

  it('TC-104 user should be able to click Log in button', function() {
  expect(RegisterPage.loginLink.isClickable()).true;
  });
});
