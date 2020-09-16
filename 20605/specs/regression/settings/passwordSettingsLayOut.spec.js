import RegisterPage from '../../../../pageObjects/register.page';
import RegisterStep2Page from '../../../../pageObjects/registerStep2.page';
import ProfilePage from '../../../../pageObjects/profile.page';
import SettingsPasswordPage from '../../../../pageObjects/settingsPassword.page';
import { newUser } from '../../../testData/register';
import { passwordSettingsTestResult } from '../../../testResult/passwordSettings';

describe('PASSWORD (SETTINGS) PAGE', () => {
  before('before all describes => register', () => {
    RegisterPage.open();
    RegisterPage.registerUser(newUser);
    RegisterStep2Page.registerUserStep2(newUser);
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
    SettingsPasswordPage.passwordTab.click();
  });

  describe('PASSWORD (SETTINGS) PAGE LAYOUT', () => {
    it('TC-165 "Old password" field should be displayed', function () {
      expect(SettingsPasswordPage.oldPasswordInput.isDisplayed()).true;
    });

    it('TC-166 "Old password" field has label with correct text', function () {
      expect(SettingsPasswordPage.oldPasswordLabel.getText()).eq(passwordSettingsTestResult.oldPasswordLabel);
    });

    it('TC-167 "Old password" field has Eye icon', function () {
      expect(SettingsPasswordPage.oldPasswordEyeIcon.isDisplayed()).true;
    });

    it('TC-168 "New password" field should be displayed', function () {
      expect(SettingsPasswordPage.newPasswordInput.isDisplayed()).true;
    });

    it('TC-169 "New password" field has label with correct text', function () {
      expect(SettingsPasswordPage.newPasswordLabel.getText()).eq(passwordSettingsTestResult.newPasswordLabel);
    });

    it('TC-170 "New password" field has Eye icon', function () {
      expect(SettingsPasswordPage.newPasswordEyeIcon.isDisplayed()).true;
    });

    it('TC-171 "Confirm new password" field should be displayed', function () {
      expect(SettingsPasswordPage.confirmNewPasswordInput.isDisplayed()).true;
    });

    it('TC-172 "Confirm new password" field has label with correct text', function () {
      expect(SettingsPasswordPage.confirmNewPasswordLabel.getText()).eq(passwordSettingsTestResult.confirmNewPasswordLabel);
    });

    it('TC-173 "Confirm new password" field has Eye icon', function () {
      expect(SettingsPasswordPage.confirmNewPasswordEyeIcon.isDisplayed()).true;
    });

    it('TC-174 "Update password" button should be displayed', function () {
      expect(SettingsPasswordPage.updatePasswordButton.isDisplayed()).true;
    });

    it('TC-175 "Update password" button should have correct text', function () {
      expect(SettingsPasswordPage.updatePasswordButton.getText()).eq(passwordSettingsTestResult.updatePasswordButton);
    });
  });
});
