import LoginPage from '../../../pageObjects/login.page';
import { invalidUserCredentials } from '../../../testData/login';
import waitTime from '../../../testData/waitTimes';
import user from '../../../testData/user';
import { emptyField } from '../../../testData/login';

describe('LOGIN PAGE (NEGATIVE SCENARIOS)', function() {
  beforeEach(() => {
    LoginPage.open();
  });
  it('User is not able to log in with invalid email and password', function() {
    LoginPage.login(invalidUserCredentials.email, invalidUserCredentials.password);
    LoginPage.loginBtn.click();
    LoginPage.errorMessageCloseBtn.waitForDisplayed({ timeout: waitTime.WAIT_TIME_SHORT });
    expect(LoginPage.errorMessageCloseBtn.isDisplayed()).true;
  });
  it('User is not able to log in with valid email and invalid password', function() {
    LoginPage.login(user.admin.email, invalidUserCredentials.password);
    LoginPage.loginBtn.click();
    LoginPage.errorMessageCloseBtn.waitForDisplayed({ timeout: waitTime.WAIT_TIME_SHORT });
    expect(LoginPage.errorMessageCloseBtn.isDisplayed()).true;
  });
  it('User is not able to log in with invalid email and valid password', function() {
    LoginPage.login(invalidUserCredentials.email, user.admin.password);
    LoginPage.loginBtn.click();
    LoginPage.errorMessageCloseBtn.waitForDisplayed({ timeout: waitTime.WAIT_TIME_SHORT });
    expect(LoginPage.errorMessageCloseBtn.isDisplayed()).true;
  });
  it('User is not able to log in with valid email and password that doesnt match to the account', function() {
    LoginPage.login(user.admin.email, user.learner.password);
    LoginPage.loginBtn.click();
    LoginPage.errorMessageCloseBtn.waitForDisplayed({ timeout: waitTime.WAIT_TIME_SHORT });
    expect(LoginPage.errorMessageCloseBtn.isDisplayed()).true;
  });
  it('User is not able to log in with valid email and empty password field', function() {
    LoginPage.login(user.admin.email, emptyField);
    expect(LoginPage.loginBtn.isEnabled()).false;
  });
  it('User is not able to log in with empty email field and valid password ', function() {
    LoginPage.login(emptyField, user.learner.password);
    expect(LoginPage.loginBtn.isEnabled()).false;
  });
});