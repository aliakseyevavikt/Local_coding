import LoginPage from '../../../pageObjects/login.page';
import RegisterPage from '../../../pageObjects/register.page';
import ResetPasswordPage from '../../../pageObjects/resetPassword.page';
import HomePage from '../../../pageObjects/home.page';
import expected from '../../data/expected.json';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';
import {admin} from '../../data/settingsPasswordData';


describe('TEST LOGIN PAGE HEADER', () => {
  before(() => {
  LoginPage.open();
});

  it('TC-001-001 Verify that Page Title is "Local Coding"', function () {
    expect(browser.getTitle()).eq(expected.loginPageData.title);
  });

  it('TC-001-002 Verify that text "Local Coding" is present"', function () {
    expect(LoginPage.homePageLink.getText()).eq(expected.loginPageData.title);
  });

  it('TC-001-003 Verify that text "Local Coding" has a link and leads to Main Page"', function () {
    expect(LoginPage.homePageLink.isClickable()).true;
    LoginPage.homePageLink.click();
    expect(HomePage.header.getText()).eq(expected.homePageData.header);
  });

  it('TC-001-004 Verify that text "Welcome back!" is present', function () {
    LoginPage.open();
    expect(LoginPage.headerLogin.getText()).eq(expected.loginPageData.header);
  });
});


describe('TEST LOGIN PAGE FIELDS', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-001-005 Verify that Email Field is present', function () {
    expect(LoginPage.inputUsername.isDisplayed()).true;
  });

  it('TC-001-006 Verify that Email Field has a placeholder "Email"', function () {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(expected.loginPageData.email);
  });

  it('TC-001-007 Verify that Email Field has icon', function () {
    expect(LoginPage.mailIcon.isDisplayed()).true;
  });

  it('TC-01-008 Verify that Password Field is present', function () {
    expect(LoginPage.inputPassword.isDisplayed()).true;
  });

  it('TC-001-009 Verify that Password Field contains icon', function () {
    expect(LoginPage.lockIcon.isDisplayed()).true;
  });

  it('TC-001-010 Verify that Password Field has a placeholder "Password"', function () {
    expect(LoginPage.inputPassword.getAttribute('placeholder')).eq(expected.loginPageData.password);
  });

  it('TC-001-011 Verify that button "Log in" is present', function () {
    expect(LoginPage.loginBtn.isDisplayed()).true;
  });

  it('TC-001-012 Verify that button "Log in" is inactive by default', function () {
    expect(LoginPage.loginBtn.isClickable()).false;
  });

  it('TC-001-013 Verify that text "Don’t have an account? Create one." is present', function () {
    expect(LoginPage.txtCreateOne.getText()).eq(expected.loginPageData.txtNoAccount);
  });

  it('TC-001-014 Verify that text "Create one" has a link and leads to Register Page', function () {
    expect(LoginPage.registerLink.isClickable()).true;
    LoginPage.registerLink.click();
    expect(RegisterPage.headerRegister.getText()).eq(expected.registerPageData.header);
  });

  it('TC-001-015 Verify that text "Forgot your password? Reset it." is present', function () {
    LoginPage.open();
    expect(LoginPage.txtResetIt.getText()).eq(expected.loginPageData.txtForgotPassword);
  });

  it('TC-001-016 Verify that text "Reset it" has a link and leads to Reset Password Page', function () {
    expect(LoginPage.resetLink.isClickable()).true;
    LoginPage.resetLink.click();
    expect(ResetPasswordPage.header.getText()).eq(expected.resetPasswordData.header);
  });

});


describe('TEST LOGIN PAGE BUTTONS', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-001-017 Verify that button "Google" is present', function () {
    expect(LoginPage.loginGoogleBtn.isDisplayed()).true;
  });

  it('TC-001-018 Verify that button "Google" has text "Sign in with Google"', function () {
    expect(LoginPage.loginGoogleBtn.getText()).eq(expected.loginPageData.txtGoogleBtn);
  });

  it('TC-001-019 Verify that button "Facebook" is present', function () {
    expect(LoginPage.loginFacebookBtn.isDisplayed()).true;
  });

  it('TC-001-020 Verify that button "Facebook" has text "Sign in with Facebook"', function () {
    expect(LoginPage.loginFacebookBtn.getText()).eq(expected.loginPageData.txtFacebookBtn);
  });
});


describe('TEST LOGIN PAGE EMAIL, PASSWORD NOTES', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-01-021 Verify that when Email is invalid the text "emai is not a valid email" appears', function () {
    LoginPage.inputUsername.setValue(expected.loginPageData.valueForFields);
    expect(LoginPage.txtEmailNotValid.getText()).eq(expected.loginPageData.notValidEmail);
  });

  it('TC-001-022 Verify that when Email was deleted text "Required" appears', function () {
    LoginPage.inputUsername.click();
    browser.keys('Backspace');
    expect(LoginPage.txtEmailNotValid.getText()).eq(expected.loginPageData.required);
  });

  it('TC-001-023 Verify that after entering valid Email button "Log in" is still inactive', function () {
    browser.refresh();
    LoginPage.inputUsername.setValue(expected.loginPageData.invalidEmail);
    expect(LoginPage.loginBtn.isEnabled()).false;
  });

  it('TC-001-024 Verify that when Password was deleted text "Required" appears', function () {
    LoginPage.inputPassword.setValue(expected.loginPageData.valueForFields);
    browser.keys('Backspace');
    expect(LoginPage.txtEmailNotValid.getText()).eq(expected.loginPageData.required);
  });

  it('TC-001-025 Verify that when valid email and password is entered button "Log in" is active', function () {
    browser.refresh();
    LoginPage.inputUsername.setValue(expected.loginPageData.invalidEmail);
    LoginPage.inputPassword.setValue(expected.loginPageData.invalidPassword);
    expect(LoginPage.loginBtn.isClickable()).true;
  });

});


describe('OTHERS', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-001-026 Verify that if Password is not right Error Notification pops up', function () {
    LoginPage.inputUsername.setValue(admin.email);
    LoginPage.inputPassword.setValue(expected.loginPageData.invalidPassword)
    LoginPage.loginBtn.click();
    LoginPage.errorMessage.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(LoginPage.errorMessage.isDisplayed()).true;
  });

  it('TC-001-027 Verify that if Email is not right Error Notification pops up', function () {
    browser.refresh();
    LoginPage.inputUsername.setValue(expected.loginPageData.invalidEmail);
    LoginPage.inputPassword.setValue(admin.password)
    LoginPage.loginBtn.click();
    LoginPage.errorMessage.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(LoginPage.errorMessage.isDisplayed()).true;
  });

  it('TC-001-028 Verify that Error Notification has text "Auth failed"', function () {
    expect(LoginPage.errorMessage.getText()).eq(expected.loginPageData.authFailed);
  });

  it('TC-001-029 Verify that Error Notification has red circle icon', function () {
    expect(LoginPage.errorMessageRedCircle.isDisplayed()).true;
  });

  it('TC-001-030 Verify that Error Notification disappears when press sign "X"', function () {
    LoginPage.errorMessageCloseBtn.click();
    browser.waitUntil(() => LoginPage.errorMessage.isDisplayed() === false);
    expect(LoginPage.errorMessage.isDisplayed()).false;
  });
});
