import { expect } from 'chai';
import LoginPage from './../../../pageObjects/login.page';
import loginData from './../../data/login.data.json';
import homePageData from './../../data/homePage.data.json';

describe('LOGIN PAGE ELEMENTS', function () {
  before('', function () {
    browser.maximizeWindow();
    LoginPage.open();
  });

  it('TC-N Home link is displayed', function () {
    expect(LoginPage.homePageLink.isClickable()).to.be.true;
  });

  it('TC-N Home link text = "Local Coding"', function () {
    expect(LoginPage.homePageLink.getText()).eq(homePageData.homePageLink);
  });

  it('TC-N Header is displayed', function () {
    expect(LoginPage.headerLogin.isDisplayed()).to.be.true;
  });

  it('TC-N Header text = "Welcome Back!"', function () {
    expect(LoginPage.headerLogin.getText()).eq(loginData.header);
  });

  it('TC-N Email field is displayed', function () {
    expect(LoginPage.inputUsername.isDisplayed()).to.be.true;
  });

  it('TC-N Email field placeholder = "Email"', function () {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(loginData.emailPlaceholder);
  });

  it('TC-N Email icon is displayed', function () {
    expect(LoginPage.mailIcon.isDisplayed()).to.be.true;
  });

  it('TC-N Password field is displayed', function () {
    expect(LoginPage.inputPassword.isDisplayed()).to.be.true;
  });

  it('TC-N Password field placeholder = "Password"', function () {
    expect(LoginPage.inputPassword.getAttribute('placeholder')).eq(loginData.passwordPlaceholder);
  });

  it('TC-N Password icon is displayed', function () {
    expect(LoginPage.lockIcon.isDisplayed()).to.be.true;
  });

  it('TC-N Log in button is displayed', function () {
    expect(LoginPage.loginBtn.isDisplayed()).to.be.true;
  });

  it('TC-N Log in button is disabled by default', function () {
    expect(LoginPage.loginBtn.isEnabled()).to.be.false;
  });

  it('TC-N Log in button text = "Log in"', function () {
    expect(LoginPage.loginBtn.getText()).eq(loginData.loginBtn);
  });

  it('TC-N Register account link is displayed', function () {
    expect(LoginPage.registerLink.isClickable()).to.be.true;
  });

  it('TC-N Register account link text = "Creat one"', function () {
    expect(LoginPage.registerLink.getText()).eq(loginData.registerAccountLink);
  });

  it('TC-N Register account description is displayed', function () {
    expect(LoginPage.txtCreateOne.isDisplayed()).to.be.true;
  });

  it('TC-N Register account description text = "Don’t have an account? Create one."', function () {
    expect(LoginPage.txtCreateOne.getText()).eq(loginData.registerAccountDescription);
  });

  it('TC-N Reset password link is displayed', function () {
    expect(LoginPage.resetLink.isClickable()).to.be.true;
  });

  it('TC-N Reset password link text = "Reset it"', function () {
    expect(LoginPage.resetLink.getText()).eq(loginData.resetPasswordLink);
  });

  it('TC-N Forgot password description is displayed', function () {
    expect(LoginPage.txtResetIt.isDisplayed()).to.be.true;
  });

  it('TC-N Forgot password description = "Forgot your password? Reset it."', function () {
    expect(LoginPage.txtResetIt.getText()).eq(loginData.forgotPasswordDescription);
  });

  it('TC-N Sign in with Google button is displayed', function () {
    expect(LoginPage.loginGoogleBtn.isClickable()).to.be.true;
  });

  it('TC-N Sign in with Google button text = "Sign in with Google"', function () {
    expect(LoginPage.loginGoogleBtn.getText()).eq(loginData.signInWithGoogle);
  });

  it('TC-N Sign in with Facebook button is displayed', function () {
    expect(LoginPage.loginFacebookBtn.isClickable()).to.be.true;
  });

  it('TC-N Sign in with Facebook button text = "Sign in with Facebook"', function () {
    expect(LoginPage.loginFacebookBtn.getText()).eq(loginData.signInWithFacebook);
  });
});
