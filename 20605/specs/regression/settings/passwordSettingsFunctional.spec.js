import RegisterPage from '../../../../pageObjects/register.page';
import RegisterStep2Page from '../../../../pageObjects/registerStep2.page';
import ProfilePage from '../../../../pageObjects/profile.page';
import SettingsPasswordPage from '../../../../pageObjects/settingsPassword.page';
import { newUser } from '../../../testData/register';
import { passwordSettingsTestResult } from '../../../testResult/passwordSettings';
import { passwordSettingsInputs } from '../../../testData/passwordSettings';
import { userDeleteByEmail } from '../../../helpers/axios/userDeleteByEmail';

describe('PASSWORD (SETTINGS) PAGE', () => {
  before('before all describes => register', () => {
    RegisterPage.open();
    RegisterPage.registerUser(newUser);
    RegisterStep2Page.registerUserStep2(newUser);
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
    SettingsPasswordPage.passwordTab.click();
  });

  describe('PASSWORD (SETTINGS) PAGE FIELDS FUNCTIONALITY', () => {
    beforeEach(() => {
      browser.refresh();
    });

    it('TC-176 "Old password" field should accept current password', function () {
      SettingsPasswordPage.oldPasswordInput.setValue(newUser.password);
      expect(SettingsPasswordPage.oldPasswordInput.getValue()).eq(newUser.password);
    });

    it('TC-177 "Old password" field should accept password with digits', function () {
      SettingsPasswordPage.oldPasswordInput.setValue(passwordSettingsInputs.passwordDigits);
      expect(SettingsPasswordPage.oldPasswordInput.getValue()).eq(passwordSettingsInputs.passwordDigits);
    });

    it('TC-178 "Old password" field should accept password with Upper and Lower case letters', function () {
      SettingsPasswordPage.oldPasswordInput.setValue(passwordSettingsInputs.passwordLetters);
      expect(SettingsPasswordPage.oldPasswordInput.getValue()).eq(passwordSettingsInputs.passwordLetters);
    });

    it('TC-179 "Old password" field should accept password Special Chars', function () {
      SettingsPasswordPage.oldPasswordInput.setValue(passwordSettingsInputs.passwordSpecialChars);
      expect(SettingsPasswordPage.oldPasswordInput.getValue()).eq(passwordSettingsInputs.passwordSpecialChars);
    });

    it('TC-180 "New password" field should accept password with min length', function () {
      SettingsPasswordPage.newPasswordInput.setValue(passwordSettingsInputs.passwordMin);
      expect(SettingsPasswordPage.newPasswordInput.getValue()).eq(passwordSettingsInputs.passwordMin);
    });

    it('TC-181 "New password" field should accept password with digits', function () {
      SettingsPasswordPage.newPasswordInput.setValue(passwordSettingsInputs.passwordDigits);
      expect(SettingsPasswordPage.newPasswordInput.getValue()).eq(passwordSettingsInputs.passwordDigits);
    });

    it('TC-182 "New password" field should accept password with Upper and Lower case letters', function () {
      SettingsPasswordPage.newPasswordInput.setValue(passwordSettingsInputs.passwordLetters);
      expect(SettingsPasswordPage.newPasswordInput.getValue()).eq(passwordSettingsInputs.passwordLetters);
    });

    it('TC-183 "New password" field should accept password with special chars', function () {
      SettingsPasswordPage.newPasswordInput.setValue(passwordSettingsInputs.passwordSpecialChars);
      expect(SettingsPasswordPage.newPasswordInput.getValue()).eq(passwordSettingsInputs.passwordSpecialChars);
    });

    it('TC-184 "Confirm new password" field should accept password with min length', function () {
      SettingsPasswordPage.confirmNewPasswordInput.setValue(passwordSettingsInputs.passwordMin);
      expect(SettingsPasswordPage.confirmNewPasswordInput.getValue()).eq(passwordSettingsInputs.passwordMin);
    });

    it('TC-185 "Confirm new password" field should accept password with digits', function () {
      SettingsPasswordPage.confirmNewPasswordInput.setValue(passwordSettingsInputs.passwordDigits);
      expect(SettingsPasswordPage.confirmNewPasswordInput.getValue()).eq(passwordSettingsInputs.passwordDigits);
    });

    it('TC-186 "Confirm new password" field should accept password with Upper and Lower case letters', function () {
      SettingsPasswordPage.confirmNewPasswordInput.setValue(passwordSettingsInputs.passwordLetters);
      expect(SettingsPasswordPage.confirmNewPasswordInput.getValue()).eq(passwordSettingsInputs.passwordLetters);
    });

    it('TC-187 "Confirm new password" field should accept password with special chars', function () {
      SettingsPasswordPage.confirmNewPasswordInput.setValue(passwordSettingsInputs.passwordSpecialChars);
      expect(SettingsPasswordPage.confirmNewPasswordInput.getValue()).eq(passwordSettingsInputs.passwordSpecialChars);
    });
  });

  describe('PASSWORD (SETTINGS) PAGE EYE ICON FUNCTIONALITY', () => {
    beforeEach(() => {
      browser.refresh();
    });

    it('TC-188 password is invisible by default in "Old password" field ', function () {
      SettingsPasswordPage.oldPasswordInput.setValue(passwordSettingsInputs.passwordNew);
      expect(SettingsPasswordPage.oldPasswordInput.getAttribute('type')).eq(passwordSettingsTestResult.typeInvisiblePassword);
    });

    it('TC-189 password become visible by clicking on Eye icon in "Old password" field ', function () {
      SettingsPasswordPage.oldPasswordInput.setValue(passwordSettingsInputs.passwordNew);
      SettingsPasswordPage.oldPasswordEyeIcon.click();
      expect(SettingsPasswordPage.oldPasswordInput.getAttribute('type')).eq(passwordSettingsTestResult.typeVisiblePassword);
    });

    it('TC-190 password is invisible by default in "New password" field ', function () {
      SettingsPasswordPage.newPasswordInput.setValue(passwordSettingsInputs.passwordNew);
      expect(SettingsPasswordPage.newPasswordInput.getAttribute('type')).eq(passwordSettingsTestResult.typeInvisiblePassword);
    });

    it('TC-191 password become visible by clicking on Eye icon in "New password" field ', function () {
      SettingsPasswordPage.newPasswordInput.setValue(passwordSettingsInputs.passwordNew);
      SettingsPasswordPage.newPasswordEyeIcon.click();
      expect(SettingsPasswordPage.newPasswordInput.getAttribute('type')).eq(passwordSettingsTestResult.typeVisiblePassword);
    });

    it('TC-192 password is invisible by default in "Confirm new password" field ', function () {
      SettingsPasswordPage.confirmNewPasswordInput.setValue(passwordSettingsInputs.passwordNew);
      expect(SettingsPasswordPage.confirmNewPasswordInput.getAttribute('type')).eq(
        passwordSettingsTestResult.typeInvisiblePassword,
      );
    });

    it('TC-193 password become visible by clicking on Eye icon in "Confirm new password" field ', function () {
      SettingsPasswordPage.confirmNewPasswordInput.setValue(passwordSettingsInputs.passwordNew);
      SettingsPasswordPage.confirmNewPasswordEyeIcon.click();
      expect(SettingsPasswordPage.confirmNewPasswordInput.getAttribute('type')).eq(
        passwordSettingsTestResult.typeVisiblePassword,
      );
    });
  });

  describe('PASSWORD (SETTINGS) PAGE UPDATE BUTTON FUNCTIONALITY', () => {
    beforeEach(() => {
      browser.refresh();
    });

    it('TC-194 "Update Password" button is disable by default', function () {
      expect(SettingsPasswordPage.updatePasswordButton.isEnabled()).false;
    });

    it('TC-195 "Update Password" button is disable when "Old password field" is empty', function () {
      SettingsPasswordPage.newPasswordInput.setValue(passwordSettingsInputs.passwordNew);
      SettingsPasswordPage.confirmNewPasswordInput.setValue(passwordSettingsInputs.passwordNew);
      expect(SettingsPasswordPage.updatePasswordButton.isEnabled()).false;
    });

    it('TC-196 "Update Password" button is disable when "New password field" is empty', function () {
      SettingsPasswordPage.oldPasswordInput.setValue(newUser.password);
      SettingsPasswordPage.confirmNewPasswordInput.setValue(passwordSettingsInputs.passwordNew);
      expect(SettingsPasswordPage.updatePasswordButton.isEnabled()).false;
    });

    it('TC-197 "Update Password" button is disable when "Confirm new password field" is empty', function () {
      SettingsPasswordPage.oldPasswordInput.setValue(newUser.password);
      SettingsPasswordPage.newPasswordInput.setValue(passwordSettingsInputs.passwordNew);
      expect(SettingsPasswordPage.updatePasswordButton.isEnabled()).false;
    });

    it('TC-198 "Update Password" button is clickable when all fields are filled', function () {
      SettingsPasswordPage.updatePasswordNegative(
        newUser.password,
        passwordSettingsInputs.passwordNew,
        passwordSettingsInputs.passwordNew,
      );
      expect(SettingsPasswordPage.updatePasswordButton.isClickable()).true;
    });
  });
});

after ('Should delete a user', async () => {
  const res = await userDeleteByEmail(newUser.email);
  console.log('delete ' + res.success);
  expect(res.success).eq(true);
});

