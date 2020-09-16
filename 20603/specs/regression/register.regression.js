import {expect} from 'chai';
import RegisterPage from '../../pageObjects/register.page';
import {registration} from "../../data/expectedResult";
import LoginPage from "../../pageObjects/login.page";

describe('Register Page', () => {
  before(() => {
    RegisterPage.open()
  });

  describe('Should verify that all elements are Displayed', () => {

    it('Verify that Header is Displayed', function () {
      expect(RegisterPage.headerRegister.isDisplayed()).true;
    });

    it('Verify that First Name Field is Displayed', function () {
      expect(RegisterPage.firstNameInput.isDisplayed()).true;
    });

    it('Verify that Last Name Field is Displayed', function () {
      expect(RegisterPage.lastNameInput.isDisplayed()).true;
    });

    it('Verify that Email Field is Displayed', function () {
      expect(RegisterPage.email.isDisplayed()).true;
    });

    it('Verify that Password Field is Displayed', function () {
      expect(RegisterPage.password.isDisplayed()).true;
    });

    it('Verify that Checkbox is Displayed', function () {
      expect(RegisterPage.agreementCheckBox.isEnabled()).true;//?method
    });

    it('Verify that Password Field is Displayed', function () {
      expect(RegisterPage.password.isDisplayed()).true;
    });

    it('Verify that Register Button is Displayed', function () {
      expect(RegisterPage.registerBtn.isDisplayed()).true;
    });

    it('Verify that Register Button is Displayed', function () {
      expect(RegisterPage.loginLink.isDisplayed()).true;
    });
  })

  describe('Should verify that all elements are Displayed', () => {

    it('Verify that Site Name Link has a Text "Local Coding"', () => {
      expect(browser.getTitle()).eq(registration.title);
    });

    it('Verify that the Header has a text "Create an account"', () => {
      expect(RegisterPage.headerRegister.getText()).eq(registration.header);
    });

    it('Verify that First Name input field placeholder text is "First Name"', function () {
      expect(RegisterPage.firstNameInput.getAttribute('placeholder')).eq(registration.firstName);
    });

    it('Verify that Last Name input field placeholder text is "Last Name"', function () {
      expect(RegisterPage.lastNameInput.getAttribute('placeholder')).eq(registration.lastName);
    });

    it('Verify that Email input field placeholder text is "Email"', function () {
      expect(RegisterPage.email.getAttribute('placeholder')).eq(registration.email);
    });

    it('Verify that Password input field placeholder text is "Password"', function () {
      expect(RegisterPage.password.getAttribute('placeholder')).eq(registration.password);
    });

    it('Verify that Checkbox Label Text is "I have read Terms and agreements"', function () {
      expect(RegisterPage.agreementLabel.getText()).eq(registration.agreementLabelText);
    });

    it('Verify that Register button text is "Register"', function () {
      expect(RegisterPage.registerBtn.getText()).eq(registration.registerBtn);
    });

    it('Verify that Log in link has a prompt text "Already have an account? Just click Log in."', function () {
      expect(RegisterPage.promptLabel.getText()).eq(registration.loginInLinkPrompt);
    });




    it('Verify that Login In Link redirect user from Register Page to Login Page', function () {
      RegisterPage.open();
      RegisterPage.loginLink.click();
      expect(LoginPage.header.isDisplayed()).true;
    });

  })

})


const registration = {
  title: "Local Coding",
  header: "Create an account",
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  password: "Password",
  agreementLabelText: "I have readTerms and agreements",
  registerBtn: "Register",
  loginInLinkPrompt: "Already have an account? Just click Log in."


}