import LoginPage from "../../../pageObjects/login.page";
import user from "../../../testData/user";
import {textLogin} from "../../data/loginData";
import {studentData} from "../../data/usersData";
import SettingsPasswordUpdatePage from "../../../pageObjects/settingsPassword.page";
import ProfilePage from "../../../pageObjects/profile.page";
import TopMenuPage from "../../../pageObjects/topMenu.page";
import WAIT_TIME_MEDIUM from "../../../testData/waitTimes";

describe( 'SETTINGS CHANGE PASSWORD', () => {
  before( () => {
    browser.maximizeWindow();
    LoginPage.open();
    LoginPage.login(user.student.email, user.student.password);
    browser.waitUntil( () => ProfilePage.headerProfile.getText() === user.student.firstName + ' ' + user.student.lastName);
  });

  it('should go to Settings page', () => {
    TopMenuPage.dropDownArrow.click();
    TopMenuPage.dropDownMenuSettings.click();
    SettingsPasswordUpdatePage.passwordTab.click();
    browser.waitUntil( () => SettingsPasswordUpdatePage.passwordTab.isDisplayed());
  });

  it('should click Password link in menu', () => {
    SettingsPasswordUpdatePage.passwordTab.click();
    browser.waitUntil( () => SettingsPasswordUpdatePage.oldPasswordLabel.isDisplayed());
  });

  it('should fill out Change Password form', () => {
    SettingsPasswordUpdatePage.oldPasswordInput.setValue(user.student.password);
    SettingsPasswordUpdatePage.newPasswordInput.setValue(studentData.passwordNew);
    SettingsPasswordUpdatePage.confirmNewPasswordInput.setValue(studentData.passwordNew);
    SettingsPasswordUpdatePage.updatePasswordButton.click();
    ProfilePage.logout();
    expect(LoginPage.headerLogin.getText()).eq(textLogin.headerLogin);
  });

  it('should user login with new password', () => {
    LoginPage.login(user.student.email, studentData.passwordNew);
    ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect( ProfilePage.getLoginConfirmation()).eq(user.student.firstName + ' ' + user.student.lastName);
  });

  it('should user restore old password', () => {
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
    SettingsPasswordUpdatePage.passwordTab.click();
    SettingsPasswordUpdatePage.updatePassword(studentData.passwordNew, user.student.password);
    ProfilePage.logout();
    expect(LoginPage.headerLogin.getText()).eq(textLogin.headerLogin);
  });

  it('should user login with old password', () => {
    LoginPage.login(user.student.email, user.student.password);
    ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect( ProfilePage.getLoginConfirmation()).eq(user.student.firstName + ' ' + user.student.lastName);
  });

});
