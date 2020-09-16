import LoginPage from '../../../pageObjects/login.page';
import RegisterPage from '../../../pageObjects/register.page';
import ResetPasswordPage from '../../../pageObjects/resetPassword.page';
import HomePage from '../../../pageObjects/home.page';
import expected from '../../data/expected.json';

describe('LOGIN PAGE HEADERS AND FIELDS', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-02-001 verify that header of the Login Page is "Welcome back!"', function () {
    expect(LoginPage.headerLogin.getText()).contains(expected.pagesHeaders.LoginHeader);
  });

  it('TC-02-002 verify that placeholder of Email Field is "Email!"', function () {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(expected.pagesHeaders.emailPlaceholder);
  });

  it('TC-02-003 Verify that Email Field has icon', function () {
    expect(LoginPage.mailIcon.isDisplayed()).true;
  });

  it('TC-02-004 verify that placeholder of Password Field is "Password!"', function () {
    expect(LoginPage.inputPassword.getAttribute('placeholder')).eq(expected.pagesHeaders.passwordPlaceholder);
  });

  it('TC-02-005 Verify that Password Field contains icon', function () {
    expect(LoginPage.lockIcon.isDisplayed()).true;
  });

  it('TC-02-006 Verify that text "Don’t have an account? Create one." is present', function () {
    expect(LoginPage.txtCreateOne.getText()).eq('Don’t have an account? Create one.');
  });

  it('TC-02-007 Verify that text "Forgot your password? Reset it." is present', function () {
    expect(LoginPage.txtResetIt.getText()).eq('Forgot your password? Reset it.');
  });
});

describe('LOGIN PAGE BUTTONS', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-02-008 Verify that button "Log in" is present', function () {
    expect(LoginPage.loginBtn.isDisplayed()).true;
  });

  it('TC-02-009 Verify that button "Google" is present', function () {
    expect(LoginPage.loginGoogleBtn.isDisplayed()).true;
  });

  it('TC-02-010 Verify that button "Google" has text "Sign in with Google"', function () {
    expect(LoginPage.loginGoogleBtn.getText()).eq('Sign in with Google');
  });

  it('TC-02-011 Verify that button "Facebook" is present', function () {
    expect(LoginPage.loginFacebookBtn.isDisplayed()).true;
  });

  it('TC-02-012 Verify that button "Facebook" has text "Sign in with Facebook"', function () {
    expect(LoginPage.loginFacebookBtn.getText()).eq('Sign in with Facebook');
  });
});

describe('LOGIN PAGE LINKS', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('TC-02-013 verify that "Create one." link redirects into Register Page', function () {
    LoginPage.goToRegisterPage();
    expect(RegisterPage.headerRegister.getText()).contains(expected.pagesHeaders.RegisterPageHeader);
  });

  it('TC-02-014 verify that "Reset it." link redirects into Reset password Page', function () {
    LoginPage.goToResetPasswordPage();
    expect(ResetPasswordPage.header.getText()).contains(expected.pagesHeaders.resetPasswordHeader);
  });

  it('TTC-02-015 verify that "Local Coding" link redirects into Home Page', function () {
    LoginPage.homePageLink.click();
    expect(HomePage.header.getText()).eq(expected.pagesHeaders.homePageHeader);
  });
});

describe('LOGIN PAGE EMAIL, PASSWORD MESSAGES', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('TC-02-016 verify that the message "\'email\' is not a valid email" shows if input wrong Email', function () {
    LoginPage.inputUsername.setValue('asd');
    expect(LoginPage.txtEmailNotValid.getText()).eq(expected.pagesHeaders.notValidEmailMessage);
  });

  it('TC-02-017 verify that there is the text "Required" if Email Field is empty', function () {
    LoginPage.inputUsername.clearValue();
    expect(LoginPage.txtEmailNotValid.getText()).eq(expected.pagesHeaders.Required);
  });

  it('TC-02-018 verify that there is the text "Required" if Password Field is empty', function () {
    LoginPage.inputPassword.clearValue();
    expect(LoginPage.txtEmailNotValid.getText()).eq(expected.pagesHeaders.Required);
  });

  it('TC-02-019 verify that after entering valid Email button "Log in" is still inactive', function () {
    LoginPage.open();
    LoginPage.inputUsername.setValue('123@gmail.com');
    expect(LoginPage.loginBtn.isClickable()).false;
  });
});

describe('LOGIN PAGE NEGATIVE TESTING', () => {
  before(() => {
    LoginPage.open();
  });

});

