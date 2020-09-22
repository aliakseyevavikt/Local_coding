import LoginPage from "../../../pageObjects/login.page";
import {userNegativeData} from "../../data/userNegativeData";
import user from "../../../testData/userRoles";

describe ("LOGIN NEGATIVE", () => {
  before( () => {
    LoginPage.open();
  });

  it('TC-084 should enter wrong email', () => {
    LoginPage.login(userNegativeData.emailWrong, user.admin.password);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC-085 should enter wrong password', () => {
    LoginPage.login(user.admin.email, userNegativeData.passwordWrong);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC-086 should enter wrong email and password', () => {
    LoginPage.login(userNegativeData.emailWrong, userNegativeData.passwordWrong);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC-087 should enter student email and admin password', () => {
    LoginPage.login(user.student.email, user.admin.password);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC-088 should enter admin email and student password', () => {
    LoginPage.login(user.admin.email, user.student.password);
    browser.waitUntil( () => LoginPage.errorMessageCloseBtn.isDisplayed());
  });

  it('TC-089 should leave empty password field', () => {
    browser.refresh();
    LoginPage.inputUsername.setValue(user.admin.email);
    expect(LoginPage.loginBtn.isEnabled()).equal(false);
  });

  it('TC-090 should leave empty email field', () => {
    browser.refresh();
    LoginPage.inputPassword.setValue(user.admin.password);
    expect(LoginPage.loginBtn.isEnabled()).equal(false);
  });

});
