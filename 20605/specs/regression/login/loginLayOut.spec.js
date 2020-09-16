import LoginPage from '../../../../pageObjects/login.page';
import { loginPage } from '../../../testResult/login';

describe('LOGIN PAGE', function () {
  before(() => {
    LoginPage.open();
  });

  describe('HEADER', function () {
    it('TC-255 header should be displayed', function () {
      expect(LoginPage.headerLogin.isDisplayed()).true;
    });

    it('TC-016 header should have correct text', function () {
      expect(LoginPage.headerLogin.getText()).eq(loginPage.header);
    });
  });

  describe('ALL ELEMENTS ARE DISPLAYED', function () {
    it('TC-017 should verify that "Mail" icon is displayed', function () {
      expect(LoginPage.mailIcon.isDisplayed()).true;
    });

    it('TC-018 should verify that "Email" input field is displayed', function () {
      expect(LoginPage.inputUsername.isDisplayed()).true;
    });

    it('TC-019 should verify that "Email" input field has placeholder "Email"', function () {
      expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(loginPage.emailPlaceholder);
    });

    it('TC-020 should verify that "Lock" icon is displayed', function () {
      expect(LoginPage.lockIcon.isDisplayed()).true;
    });

    it('TC-021 should verify that "Password" input field is displayed', function () {
      expect(LoginPage.inputPassword.isDisplayed()).true;
    });

    it('TC-022 should verify that "Password" input field has placeholder "Email"', function () {
      expect(LoginPage.inputPassword.getAttribute('placeholder')).eq(loginPage.passwordPlaceholder);
    });

    it('TC-023 should verify that "Log in" button is displayed', function () {
      expect(LoginPage.loginBtn.isDisplayed()).true;
    });

    it('TC-024 should verify that register link is displayed', function () {
      expect(LoginPage.registerLink.isDisplayed()).true;
    });

    it('TC-025 should verify that reset link is displayed', function () {
      expect(LoginPage.resetLink.isDisplayed()).true;
    });

    it('TC-026 should verify that GoogleSignIn link is displayed', function () {
      expect(LoginPage.loginGoogleBtn.isDisplayed()).true;
    });

    it('TC-027 should verify that FacebookSignIn link is displayed', function () {
      expect(LoginPage.loginFacebookBtn.isDisplayed()).true;
    });
  });
});
