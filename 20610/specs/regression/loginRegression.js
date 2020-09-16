import LoginPage from '../../../pageObjects/login.page';
import expected from '../../data/expected.json';
import RegisterPage from '../../../pageObjects/register.page';
import ResetPasswordPage from '../../../pageObjects/resetPassword.page';

before(() => {
  LoginPage.open();
});

describe('Login Regression - All elements are present', () => {
  it('LR - 001 h1 should be correct', () => {
    expect(LoginPage.headerLogin.getText()).eq(expected.loginPage.h1);
  });

  it('LR - 002 siteName should be correct', () => {
    expect(LoginPage.siteName.getText()).eq(expected.loginPage.siteName);
  });

  it('LR - 003 Should have Email Input Field present on the page', () => {
    expect(LoginPage.inputUsername.isDisplayed()).true;
  });

  it('LR - 004 Email Input Field should have correct placeholder', () => {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(expected.loginPage.emailPlaceholder);
  });

  it('LR - 005 Should have Password Input Field present on the page', () => {
    expect(LoginPage.inputPassword.isDisplayed()).true;
  });

  it('LR - 006 Password Input Field should have correct placeholder', () => {
    expect(LoginPage.inputPassword.getAttribute('placeholder')).eq(expected.loginPage.passwordPlaceholder);
  });

  it('LR - 007 Should have Log in Btn present on the page', () => {
    expect(LoginPage.loginBtn.isDisplayed()).true;
  });

  it('LR - 008 Should "Create one" Link be clickable', () => {
    LoginPage.registerLink.click();
    expect(RegisterPage.headerRegister.getText()).eq(expected.newUser.h1);
    RegisterPage.loginLink.click();
  });

  it('LR - 009 Should "Reset it" Link be clickable', () => {
    LoginPage.resetLink.click();
    expect(ResetPasswordPage.resetHeader.getText()).eq(expected.resetPassword.h1);
    ResetPasswordPage.loginLink.click();
  });

  it('LR - 010 Should have "Sign in with Google" Btn is present on the page', () => {
    expect(LoginPage.loginGoogleBtn.isDisplayed()).true;
    expect(LoginPage.loginGoogleBtn.isEnabled()).true;
  });

  it('LR - 011 Should have "Sign in with Facebook" Btn is present on the page', () => {
    expect(LoginPage.loginFacebookBtn.isDisplayed()).true;
    expect(LoginPage.loginFacebookBtn.isEnabled()).true;
  });
});
