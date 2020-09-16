import LoginPage from '../../../pageObjects/login.page';
import { textLogin } from '../../data/loginData';
import TopMenuPage from '../../../pageObjects/topMenu.page';

describe('LOGIN', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-059 should have Welcome back header', () => {
    expect(LoginPage.header.getText()).eq(textLogin.headerLogin);
  });

  it('TC-060 should verify link home page is present', function () {
    expect(TopMenuPage.homePageLink.isDisplayed()).eq(true);
  });

  it('TC-061 should  verify link home page is clickable', function () {
    expect(TopMenuPage.homePageLink.isClickable()).eq(true);
  });

  it('TC-062 should verify link home page has right name', function () {
    expect(TopMenuPage.homePageLink.getText()).eq(textLogin.linkLocalCoding);
  });

  it('TC-063 should verify icon mail is present', function () {
    expect(LoginPage.mailIcon.isDisplayed()).eq(true);
  });

  it('TC-064 should verify input email field is present', function () {
    expect(LoginPage.inputUsername.isDisplayed()).eq(true);
  });

  it('TC-065 should verify input email field has right name', function () {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).eq(textLogin.placeholderEmail);
  });

  it('TC-066 should verify icon lock is present', function () {
    expect(LoginPage.lockIcon.isDisplayed()).eq(true);
  });

  it('TC-067 should verify input password field is present', function () {
    expect(LoginPage.inputPassword.isDisplayed()).eq(true);
  });

  it('TC-068 should verify input password field has right name', function () {
    expect(LoginPage.inputPassword.getAttribute('placeholder')).eq(textLogin.placeholderPassword);
  });

  it('TC-069 should verify login button is present', function () {
    expect(LoginPage.loginBtn.isDisplayed()).eq(true);
  });

  it('TC-070 should verify login button is non-clickable', function () {
    expect(LoginPage.loginBtn.isClickable()).eq(false);
  });

  it('TC-071 should verify login button has right name', function () {
    expect(LoginPage.loginBtn.getText()).eq(textLogin.loginBtn);
  });

  it('TC-072 should verify register link is present', function () {
    expect(LoginPage.registerLink.isDisplayed()).eq(true);
  });

  it('TC-073 should verify register link is clickable', function () {
    expect(LoginPage.registerLink.isClickable()).eq(true);
  });

  it('TC-074 should verify register link has right name', function () {
    expect(LoginPage.registerLink.getText()).eq(textLogin.linkCreateAccount);
  });

  it('TC-075 should verify reset link is present', function () {
    expect(LoginPage.resetLink.isDisplayed()).eq(true);
  });

  it('TC-076 should verify reset link is clickable', function () {
    expect(LoginPage.resetLink.isClickable()).eq(true);
  });

  it('TC-077 should verify reset link has right name', function () {
    expect(LoginPage.resetLink.getText()).eq(textLogin.linkResetPassword);
  });

  it('TC-078 should Google login link is present', function () {
    expect(LoginPage.loginGoogleBtn.isDisplayed()).eq(true);
  });

  it('TC-079 should Google login link is clickable', function () {
    expect(LoginPage.loginGoogleBtn.isClickable()).eq(true);
  });

  it('TC-080 should Google login link has right name', function () {
    expect(LoginPage.loginGoogleBtn.getText()).eq(textLogin.linkBtnGoogle);
  });

  it('TC-081 should Facebook login link is present', function () {
    expect(LoginPage.loginFacebookBtn.isDisplayed()).eq(true);
  });

  it('TC-082 should Facebook login link is clickable', function () {
    expect(LoginPage.loginFacebookBtn.isClickable()).eq(true);
  });

  it('TC-083 should Facebook login link has right name', function () {
    expect(LoginPage.loginFacebookBtn.getText()).eq(textLogin.linkBtnFacebook);
  });
});
