import LoginPage from '../../../pageObjects/login.page';
const login = require('../testData/expected.json').login;

describe('New user registration page', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-043 Check the header', function () {
    expect(LoginPage.headerLogin.getText()).eq(login.header);
  });

  it('TC-044 Check if the Email input has a placeholder text Email ', function () {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(login.emailInput);
  });

  it('TC-045 Check if the Password input has a placeholder text Password ', function () {
    expect(LoginPage.inputPassword.getAttribute('placeholder')).eq(login.passwordInput);
  });

  it('TC-046 Check if the Register link has text Create one ', function () {
    expect(LoginPage.registerLink.getText()).eq(login.registerLink);
  });

  it('TC-047 Check if the Reset link has text Reset it ', function () {
    expect(LoginPage.resetLink.getText()).eq(login.resetLink);
  });

  it('TC-048 Check if the Login Button has text Log in ', function () {
    expect(LoginPage.loginBtn.getText()).eq(login.loginBtn);
  });
});
