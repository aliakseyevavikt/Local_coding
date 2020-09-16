import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsPasswordPage from '../../../pageObjects/settingsPassword.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import { updatePassword } from "../../testData/login";
import { passwordSettingsNegative} from "../../testData/passwordSettings";
import { errorMessagesRegistration } from '../../testResult/errorMessages';
import { errorMsgPasswordSettings } from '../../testResult/errorMessages';

describe ('UPDATE PASSWORD',function () {
    before(() => {
        LoginPage.open();
        LoginPage.login(updatePassword.email, updatePassword.password);
        RegisterStep2Page.skipBtn.click();
        ProfilePage.dropDownUserMenu.click();
        ProfilePage.settingsLink.click();
        SettingsPasswordPage.passwordTab.click();
    });
    describe('TC-044 UPDATE PASSWORD FROM SETTINGS NEGATIVE TESTING', function () {
        beforeEach(() => {
            browser.refresh();
        });

        it('TC-045 a pop-up with an error message should appears after entering wrong old password  ', function () {
            SettingsPasswordPage.updatePasswordNegative(passwordSettingsNegative.oldWrongPassword, passwordSettingsNegative.newPassword, passwordSettingsNegative.newPassword);
            SettingsPasswordPage.updatePasswordButton.click();
            expect(SettingsPasswordPage.popUpWrongOldPwrd.getText()).eq(errorMsgPasswordSettings.wrongOldPassword);
        });

        it('TC-046 the "Update Password" button is disabled when "Old password" field is not filled ', function () {
            SettingsPasswordPage.newPasswordInput.addValue(passwordSettingsNegative.newPassword);
            SettingsPasswordPage.confirmNewPasswordInput.addValue(passwordSettingsNegative.newPassword);
            expect(SettingsPasswordPage.updatePasswordButton.isEnabled().false);
        });

        it('TC-047 the "Update Password" button is disabled when "Confirm new password" field is not filled ', function () {
            SettingsPasswordPage.oldPasswordInput.addValue(passwordSettingsNegative.oldCorrectPassword);
            SettingsPasswordPage.newPasswordInput.addValue(passwordSettingsNegative.newPassword);
            expect(SettingsPasswordPage.updatePasswordButton.isEnabled().false);
        });

        it('TC-048 the "Update Password" button is disabled when "New password" field is not filled ', function () {
            SettingsPasswordPage.oldPasswordInput.addValue(passwordSettingsNegative.oldCorrectPassword);
            SettingsPasswordPage.confirmNewPasswordInput.addValue(passwordSettingsNegative.newPassword);
            expect(SettingsPasswordPage.updatePasswordButton.isEnabled().false);
        });

        it('TC-049 an error message should appears  when new password mismatch with confirm new password ', function () {
            SettingsPasswordPage.updatePasswordNegative(passwordSettingsNegative.oldWrongPassword, passwordSettingsNegative.newPassword, passwordSettingsNegative.confirmNewWrongPassword)
            expect(SettingsPasswordPage.errorMsgPasswordNotMatch.getText()).eq(errorMsgPasswordSettings.newMismatchPassword);
            expect(SettingsPasswordPage.updatePasswordButton.isEnabled().false);
        });

        it('TC-050 a pop-up with an error message should appears when new password contains only four symbols', function () {
            SettingsPasswordPage.updatePasswordNegative(passwordSettingsNegative.oldCorrectPassword, passwordSettingsNegative.newSmallPassword, passwordSettingsNegative.newSmallPassword);
            SettingsPasswordPage.updatePasswordButton.click();
            expect(SettingsPasswordPage.popUpWrongOldPwrd.getText()).eq(errorMessagesRegistration.wrongPasswordError);
        });
    });
})
