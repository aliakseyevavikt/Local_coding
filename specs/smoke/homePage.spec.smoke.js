import BasePage from '../../pageObjects/Base.page';
import HomePage from '../../pageObjects/home.page';
import { loginPageTestResult } from '../../testResult/loginPage.testResult';
import { registerPageTestResult } from '../../testResult/registerPage.testResult';


describe('HOME PAGE SMOKE', function() {
  before(() => {
    HomePage.open();
  });

  it('Login button redirects to login page ', function() {
    HomePage.loginLink.click();
    expect(BasePage.header.getText()).eq(loginPageTestResult.header);
  });

  it('Register button redirects to register page', function() {
    HomePage.registerLink.click();
    expect(BasePage.header.getText()).eq(registerPageTestResult.header);
  });
});
