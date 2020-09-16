import LoginPage from "../../../pageObjects/login.page";
import LoginResetPasswordPage from "../../../pageObjects/resetPassword.page";
import {loginResetPasswordData} from "../../data/loginData";

describe( "RESET PASSWORD LAYOUT", () => {
  before( () => {
    LoginPage.open();
    LoginPage.resetLink.click();
  });

  it('TC-091 should have correct header', () => {
    expect(LoginResetPasswordPage.header.getText()).eq(loginResetPasswordData.header);
  });

  it('TC-092 should input email field be present', () => {
    expect(LoginResetPasswordPage.email.isDisplayed()).eq(true);
  });

  it('TC-093 should input email field has correct text', ()=> {
    expect(LoginResetPasswordPage.email.getAttribute('placeholder')).eq(loginResetPasswordData.emailPlaceholder);
  });

  it('TC-094 should reset button is present', () => {
    expect(LoginResetPasswordPage.submitBtn.isDisplayed()).eq(true);
  });

  it('TC-095 should reset button has correct text', () => {
    expect(LoginResetPasswordPage.submitBtn.getText()).eq(loginResetPasswordData.resetBtn);
  });

  it('TC-096 should reset button disable by default', () => {
    expect(LoginResetPasswordPage.submitBtn.isEnabled()).eq(false);
  });

  it('TC-097 should login link be present', ()=> {
    expect(LoginResetPasswordPage.loginLink.isDisplayed()).eq(true);
  });

  it('TC-098 should login link has correct text', ()=> {
    expect(LoginResetPasswordPage.loginLink.getText()).eq(loginResetPasswordData.loginLink);
  });

  it('TC-099 should login link be clickable', ()=> {
    expect(LoginResetPasswordPage.loginLink.isClickable()).eq(true);
  });

  it('TC-100 should register link be present', ()=> {
    expect(LoginResetPasswordPage.registerLink.isDisplayed()).eq(true);
  });

  it('TC-101 should register link has correct text', ()=> {
    expect(LoginResetPasswordPage.registerLink.getText()).eq(loginResetPasswordData.registerLink);
  });

  it('TC-102 should register link be clickable', ()=> {
    expect(LoginResetPasswordPage.registerLink.isClickable()).eq(true);
  });

});