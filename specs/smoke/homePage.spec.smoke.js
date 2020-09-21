import HomePage from '../../pageObjects/home.page';
import RegisterPage from '../../pageObjects/register.page';
import LoginPage from '../../pageObjects/login.page';
import { loginPageTestResult } from '../../testResult/loginPage.testResult';
import { registerPageTestResult } from '../../testResult/registerPage.testResult';

describe('HOME PAGE SMOKE', function() {
  before(() => {
    HomePage.open();
  });

  it('Login button redirects to login page ', function() {
    HomePage.loginBtn.click();
    expect(RegisterPage.headerRegister.getText()).eq(loginPageTestResult.header);
  });

  it('Register button redirects to register page', function() {
    HomePage.open();
    HomePage.registerBtn.click();
    expect(LoginPage.headerLogin.getText()).eq(registerPageTestResult.header);
  });
});
