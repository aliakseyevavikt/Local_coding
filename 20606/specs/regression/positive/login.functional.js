import LoginPage from '../../../../pageObjects/login.page';
import { admin } from '../../../../testData/user';
import { anyNumbers, anySymbols, uppercaseLowercaseLetters } from '../../../testData/login.funct';

describe('LOGIN PAGE (FUNCTIONAL)', function () {
  before(() => {
    LoginPage.open();
  });

  it('TC-39: Verify that Login button is enabled with valid input', function () {
    LoginPage.login(uppercaseLowercaseLetters.email, admin.password);
    expect(LoginPage.loginBtn.isDisplayed()).true;
  });

  it('TC-40: any numbers in the Email field', function () {
    browser.refresh();
    LoginPage.login(anyNumbers.email, admin.password);
    expect(LoginPage.loginBtn.isDisplayed()).true;
  });

  it('TC-60: any symbols in the Email field', function () {
    browser.refresh();
    LoginPage.login(anySymbols.email, admin.password);
    expect(LoginPage.loginBtn.isDisplayed()).true;
  });

  it('TC-41: any letters (uppercase and lowercase) in the Password field', function () {
    browser.refresh();
    LoginPage.login(admin.email, uppercaseLowercaseLetters.password);
    expect(LoginPage.loginBtn.isDisplayed()).true;
  });

  it('TC-61: Any numbers in the Password field', function () {
    browser.refresh();
    LoginPage.login(admin.email, anyNumbers.password);
    expect(LoginPage.loginBtn.isDisplayed()).true;
  });

  it('TC-62: Any symbols in the Password field', function () {
    browser.refresh();
    LoginPage.login(admin.email, anySymbols.password);
    expect(LoginPage.loginBtn.isDisplayed()).true;
  });
});
