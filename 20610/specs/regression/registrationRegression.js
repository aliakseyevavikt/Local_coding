import RegisterPage from '../../../pageObjects/register.page';
import user from '../../../testData/user';
import expected from '../../data/expected.json';
import clearInputValue from '../../../helpers/clearValueMethod';

before(() => {
  RegisterPage.open();
});

describe('REGRESSION USER REGISTER', () => {
  describe('ELEMENTS DISPLAYED', () => {
    it('REG1 Should have h1 Create an account!', () => {
      expect(RegisterPage.headerRegister.getText()).eq(expected.newUser.h1);
    });

    it('REG2 Should have First Name Input Field present on the page', () => {
      expect(RegisterPage.firstNameInput.isDisplayed()).true;
    });

    it('REG3 First Name Input Field should have correct placeholder', () => {
      expect(RegisterPage.firstNameInput.getAttribute('placeholder'))
        .eq(expected.newUser.firstNamePlaceholder);
    });

    it('REG4 Should have Last Name Input Field present on the page', () => {
      expect(RegisterPage.lastNameInput.isDisplayed()).true;
    });

    it('REG5 Last Name Input Field should have correct placeholder', () => {
      expect(RegisterPage.lastNameInput.getAttribute('placeholder'))
        .eq(expected.newUser.lastNamePlaceholder);
    });

    it('REG6 Should have Email Input Field present on the page', () => {
      expect(RegisterPage.email.isDisplayed()).true;
    });

    it('REG7 Email Input Field should have correct placeholder', () => {
      expect(RegisterPage.email.getAttribute('placeholder'))
        .eq(expected.newUser.emailPlaceholder);
    });

    it('REG8 Should have Password Input Field present on the page', () => {
      expect(RegisterPage.password.isDisplayed()).true;
    });

    it('REG9 Password Input Field should have correct placeholder', () => {
      expect(RegisterPage.password.getAttribute('placeholder'))
        .eq(expected.newUser.passwordPlaceholder);
    });

    it('REG10 Should have agreementCheckBox present on the page', () => {
      expect(RegisterPage.agreementCheckBox.isSelected()).false;
    });

    it('REG11 Should Terms and Agreement clickable link on the page', () => {
      expect(RegisterPage.termsAndAgreementsLink.isDisplayed()).true;
      expect(RegisterPage.termsAndAgreementsLink.isClickable()).true;
    });

    it('REG12 Should have Register Btn on the page', () => {
      expect(RegisterPage.registerBtn.isDisplayed()).true;
    });

    it('REG13 Default Register Btn State is disabled', () => {
      expect(RegisterPage.registerBtn.getAttribute('disabled')).exist;
    });

    it('REG14 Already have an account? text is present on the page', () => {
      expect(RegisterPage.promptLabel.getText()).eq(expected.newUser.promptText);
    });

    it('REG15 Should have login link on the page', () => {
      expect(RegisterPage.loginLink.isDisplayed()).true;
    });
  });

  describe('USER REGISTER ERROR MESSAGES', () => {
    it('REG16 If First Name Input field is cleared, Required field error message pops up', () => {
      RegisterPage.firstNameInput.setValue(user.new.firstName);
      clearInputValue(RegisterPage.firstNameInput);
      RegisterPage.inputFieldErrorMessages[0].waitForDisplayed();
      expect(RegisterPage.inputFieldErrorMessages[0].getText()).eq(expected.errorMsgs.fieldErrorRequired);
    });

    it('REG17 If Last Name Input field is cleared, Required field error message pops up', () => {
      RegisterPage.lastNameInput.setValue(user.new.lastName);
      clearInputValue(RegisterPage.lastNameInput);
      RegisterPage.inputFieldErrorMessages[1].waitForDisplayed();
      expect(RegisterPage.inputFieldErrorMessages[1].getText()).eq(expected.errorMsgs.fieldErrorRequired);
    });

    it('REG18 If email input field is cleared, Required field error message pops up', () => {
      RegisterPage.email.setValue(user.new.email);
      clearInputValue(RegisterPage.email);
      RegisterPage.inputFieldErrorMessages[2].waitForDisplayed();
      expect(RegisterPage.inputFieldErrorMessages[2].getText()).eq(expected.errorMsgs.fieldErrorRequired);
    });

    it("REG19 'email' is not a valid email Error should pop up if email input is not valid ", () => {
      RegisterPage.email.setValue(expected.errorMsgs.emailInvalidInput);
      expect(RegisterPage.inputFieldErrorMessages[2].isDisplayed()).true;
    });

    it('REG20 If password input field is cleared, Required field error message pops up', () => {
      RegisterPage.password.setValue(user.new.password);
      clearInputValue(RegisterPage.password);
      RegisterPage.inputFieldErrorMessages[3].waitForDisplayed();
      expect(RegisterPage.inputFieldErrorMessages[3].getText()).eq(expected.errorMsgs.fieldErrorRequired);
    });

    it('REG21 checkbox is clickable', () => {
      RegisterPage.agreementCheckBox.click();
    });
  });
});
