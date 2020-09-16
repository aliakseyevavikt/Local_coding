import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsPasswordPage from '../../../pageObjects/settingsPassword.page';
import expected from '../../data/expected.json';
import { newRole, admin } from '../../data/settingsPasswordData';
import user from '../../data/users';
import { WAIT_TIME_MEDIUM } from '../../../testData/waitTimes';

before(() => {
  LoginPage.open();
  LoginPage.login(newRole.email, newRole.oldPassword);
  ProfilePage.dropDownUserMenu.click();
  ProfilePage.settingsLink.waitForClickable();
  ProfilePage.settingsLink.click();
  SettingsPasswordPage.passwordTab.click();
});

describe('ALL ELEMENTS IS PRESENT CORRECTLY BY DEFAULT', () => {
  it('TC-003-001 Old password IF is present ', function () {
    expect(SettingsPasswordPage.oldPasswordInput.isDisplayed()).true;
  });

  it('TC-003-002 New password IF is present ', function () {
    expect(SettingsPasswordPage.newPasswordInput.isDisplayed()).true;
  });

  it('TC-003-003 Confirm New password IF is present ', function () {
    expect(SettingsPasswordPage.confirmNewPasswordInput.isDisplayed()).true;
  });

  it('TC-003-004 Update Password button is present ', function () {
    expect(SettingsPasswordPage.updatePasswordButton.isDisplayed()).true;
  });

  it('TC-003-005 Old password IF have toggle visibility icon ', function () {
    expect(SettingsPasswordPage.oldPasswordEyeIcon.isDisplayed()).true;
  });

  it('TC-003-006 New password IF have toggle visibility icon ', function () {
    expect(SettingsPasswordPage.newPasswordEyeIcon.isDisplayed()).true;
  });

  it('TC-003-007 Confirm new password IF have toggle visibility icon ', function () {
    expect(SettingsPasswordPage.confirmNewPasswordEyeIcon.isDisplayed()).true;
  });

  it('TC-003-008 Label of Old password IF = Old password', function () {
    expect(SettingsPasswordPage.oldPasswordLabel.getText()).eq(expected.settingsPasswordData['TC-003-008-oldPasswordLabel']);
  });

  it('TC-003-009 Label of New password IF = New password', function () {
    expect(SettingsPasswordPage.newPasswordLabel.getText()).eq(expected.settingsPasswordData['TC-003-009-newPasswordLabel']);
  });

  it('TC-003-010 Label of Confirm New password IF = Confirm new password', function () {
    expect(SettingsPasswordPage.confirmNewPasswordLabel.getText()).eq(
      expected.settingsPasswordData['TC-003-010-confirmNewPasswordLabel'],
    );
  });

  it('TC-003-011 Update password button = Update Password', function () {
    expect(SettingsPasswordPage.updatePasswordButton.getText()).eq(
      expected.settingsPasswordData['TC-003-011-updatePasswordButton'],
    );
  });

  it('TC-003-012 Update password button is disabled by default', function () {
    expect(SettingsPasswordPage.updatePasswordButton.isEnabled()).false;
  });
});

describe('CORRECT FUNCTIONALITY', () => {
  it('TC-003-016 Update password button enabled when all fields are filled in', function () {
    browser.refresh();
    SettingsPasswordPage.updatePasswordNegative(newRole.oldPassword, newRole.newPassword, newRole.confirmNewPassword);
    expect(SettingsPasswordPage.updatePasswordButton.isEnabled()).true;
  });

  it('TC-003-017 Old password eye icon is works', function () {
    SettingsPasswordPage.oldPasswordInput.setValue(newRole.oldPassword);
    SettingsPasswordPage.oldPasswordEyeIcon.click();
    expect(SettingsPasswordPage.oldPasswordInput.getAttribute('type')).eq(
      expected.settingsPasswordData['TC-003-017-018-019-TypeInput'],
    );
  });

  it('TC-003-018 New password eye icon is works', function () {
    SettingsPasswordPage.newPasswordInput.setValue(newRole.newPassword);
    SettingsPasswordPage.newPasswordEyeIcon.click();
    expect(SettingsPasswordPage.newPasswordInput.getAttribute('type')).eq(
      expected.settingsPasswordData['TC-003-017-018-019-TypeInput'],
    );
  });

  it('TC-003-019 Confirm new password eye icon is works', function () {
    SettingsPasswordPage.confirmNewPasswordInput.setValue(newRole.newPassword);
    SettingsPasswordPage.confirmNewPasswordEyeIcon.click();
    expect(SettingsPasswordPage.confirmNewPasswordInput.getAttribute('type')).eq(expected.settingsPasswordData['TC-003-017-018-019-TypeInput']);
  });
});

describe('NEGATIVE FUNCTIONALITY', () => {
  it('TC-003-013 Update password button disabled until all fields are filled in (Confirm new password = empty)', function () {
    SettingsPasswordPage.updatePasswordNegative(newRole.oldPassword, newRole.newPassword, newRole.confirmNewPasswordEmpty);
    expect(SettingsPasswordPage.updatePasswordButton.isEnabled()).false;
  });

  it('TC-003-014 Update password button disabled until all fields are filled in (new password = empty)', function () {
    browser.refresh();
    SettingsPasswordPage.updatePasswordNegative(newRole.oldPassword, newRole.newPasswordEmpty, newRole.confirmNewPassword);
    expect(SettingsPasswordPage.updatePasswordButton.isEnabled()).false;
  });

  it('TC-003-015 Update password button disabled until all fields are filled in (old password = empty)', function () {
    browser.refresh();
    SettingsPasswordPage.updatePasswordNegative(newRole.oldPasswordEmpty, newRole.newPasswordEmpty, newRole.confirmNewPassword);
    expect(SettingsPasswordPage.updatePasswordButton.isEnabled()).false;
  });

  it('TC-003-020 Wrong old password: pop-up error message will appear ', function () {
    browser.refresh();
    SettingsPasswordPage.updatePassword(newRole.oldPasswordIncorrect, newRole.newPassword);
    SettingsPasswordPage.popUpWrongOldPwrd.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(SettingsPasswordPage.popUpWrongOldPwrd.isDisplayed()).true;
  });

  it('TC-003-021 Wrong old password: pop-up error message = User Settings Update: Error', function () {
    browser.refresh();
    SettingsPasswordPage.updatePassword(newRole.oldPasswordIncorrect, newRole.newPassword);
    SettingsPasswordPage.popUpWrongOldPwrd.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(SettingsPasswordPage.popUpWrongOldPwrd.getText()).eq(expected.settingsPasswordData['TC-003-021-popUpMsg']);
  });

  it('TC-003-022 pop-up error window closed after refresh', function () {
    browser.refresh();
    expect(SettingsPasswordPage.popUpWrongOldPwrd.isDisplayed()).false;
  });

  it('TC-003-023  pop-up error window can be closed by clicking icon cross', function () {
    SettingsPasswordPage.updatePassword(newRole.oldPasswordIncorrect, newRole.newPassword);
    SettingsPasswordPage.popUpWrongOldPwrd.waitForDisplayed();
    SettingsPasswordPage.popUpWrongOldPwrdClose.click();
    browser.waitUntil(() => SettingsPasswordPage.popUpWrongOldPwrd.isDisplayed() === false);
    expect(SettingsPasswordPage.popUpWrongOldPwrd.isDisplayed()).false;
  });

  it('TC-003-024 "New password mismatch: error message is appears', function () {
    browser.refresh();
    SettingsPasswordPage.updatePasswordNegative(newRole.oldPassword, newRole.newPassword, newRole.confirmNewPasswordIncorrect);
    expect(SettingsPasswordPage.errorMsgPasswordNotMatch.isDisplayed()).true;
  });

  it('TC-003-025 "New password mismatch: error message = New passwords do not match', function () {
    browser.refresh();
    SettingsPasswordPage.updatePasswordNegative(newRole.oldPassword, newRole.newPassword, newRole.confirmNewPasswordIncorrect);
    expect(SettingsPasswordPage.errorMsgPasswordNotMatch.getText()).eq(expected.settingsPasswordData['TC-003-025-errorMsg']);
  });

  it('TC-003-030 User can not log in using the old password', function() {
    browser.refresh();
    SettingsPasswordPage.updatePassword(newRole.oldPassword, newRole.newPassword)
    ProfilePage.logout();
    LoginPage.login(newRole.email, newRole.oldPassword);
    LoginPage.errorMessage.waitForDisplayed();
    expect(LoginPage.errorMessage.isDisplayed()).true;
  });
});

after(() => {
  LoginPage.open();
  LoginPage.login(newRole.email, newRole.newPassword);
  ProfilePage.dropDownUserMenu.click();
  ProfilePage.settingsLink.waitForClickable();
  ProfilePage.settingsLink.click();
  SettingsPasswordPage.passwordTab.click();
  SettingsPasswordPage.updatePassword(newRole.newPassword, newRole.oldPassword)
});
