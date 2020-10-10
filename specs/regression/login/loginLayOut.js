import LoginPage from '../../../pageObjects/login.page';
import { loginPageTestResult } from '../../../testResult/loginPage.testResult';

describe('[REGRESSION] LOGIN PAGE', function() {
  before(() => {
    LoginPage.open();
  });

  describe('HEADER', function() {
    it('Header should be displayed', function() {
      expect(LoginPage.headerLogin.isDisplayed()).true;
    });

    it('Header should have correct text', function() {
      expect(LoginPage.headerLogin.getText()).eq(loginPageTestResult.header);
    });
  });

  describe('ALL ELEMENTS ARE DISPLAYED', function() {
    it('Should verify that "Mail" icon is displayed', function() {
      expect(LoginPage.mailIcon.isDisplayed()).true;
    });

    it('Should verify that "Email" input field is displayed', function() {
      expect(LoginPage.inputUsername.isDisplayed()).true;
    });

    it('Should verify that "Email" input field has placeholder "Email"', function() {
      expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(loginPageTestResult.emailPlaceholder);
    });

    it('Should verify that "Lock" icon is displayed', function () {
      expect(LoginPage.lockIcon.isDisplayed()).true;
    });

    it('Should verify that "Password" input field is displayed', function () {
      expect(LoginPage.inputPassword.isDisplayed()).true;
    });

    it('Should verify that "Password" input field has placeholder "Email"', function () {
      expect(LoginPage.inputPassword.getAttribute('placeholder')).eq(loginPageTestResult.passwordPlaceholder);
    });

    it('Should verify that "Log in" button is displayed', function () {
      expect(LoginPage.loginBtn.isDisplayed()).true;
    });

    it('Should verify that register link is displayed', function () {
      expect(LoginPage.registerLink.isDisplayed()).true;
    });

    it('Should verify that reset link is displayed', function () {
      expect(LoginPage.resetLink.isDisplayed()).true;
    });

    it('Should verify that GoogleSignIn link is displayed', function () {
      expect(LoginPage.loginGoogleBtn.isDisplayed()).true;
    });

    it('Should verify that FacebookSignIn link is displayed', function () {
      expect(LoginPage.loginFacebookBtn.isDisplayed()).true;
    });
  });
});
