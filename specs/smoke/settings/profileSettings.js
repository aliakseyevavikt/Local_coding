import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsProfilePage from '../../../pageObjects/settingsProfile.page';
import { profileSettingsTestResult } from '../../../testResult/settings/profileSettings.testResult';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import waitTime from '../../../testData/waitTimes';
import RegisterPage from '../../../pageObjects/register.page';
import userFake from '../../../testData/userFake';
import RegisterStep2 from '../../../pageObjects/registerStep2.page';
import SettingsPasswordPage from '../../../pageObjects/settingsPassword.page';
import { clearValue } from '../../../helpers/clearValue';
import { userUpdateRole } from '../../../helpers/axios/updateUserRoleByAxios';
import { roles } from '../../../testResult/settings/updatePassword.testResult';

describe('[SMOKE] PROFILE (SETTINGS)', function() {
  before(function() {
    RegisterPage.open();
    RegisterPage.registerUser(userFake);
    RegisterStep2.registerUserStep2(userFake);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
  });
  it('First name and last name can be changed by new', function() {
    clearValue(SettingsProfilePage.firstNameIF);
    SettingsProfilePage.firstNameIF.setValue('aaa');
    clearValue(SettingsProfilePage.lastNameIF);
    SettingsProfilePage.lastNameIF.setValue('aaa');
    SettingsProfilePage.saveBTN.click();
    LoginPage.open();
    LoginPage.login(userFake.email, userFake.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
    browser.pause(2000);
    expect(ProfilePage.headerProfile.getText()).eq('aaa' + ' ' + 'aaa');
  });

  it('Should update role a user', async () => {
    const res = await userUpdateRole(userFake.email, userFake.newPassword, roles.learner); //where userEmail is the email and password of the user you want change role, role is a string exp.: 'student'
    expect(res.success).eq(true);
  });

  it('should ny learner', function() {
    LoginPage.open();
    LoginPage.login(userFake.email, userFake.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
    clearValue(SettingsProfilePage.firstNameIF);
    SettingsProfilePage.firstNameIF.setValue('aaas');
    clearValue(SettingsProfilePage.lastNameIF);
    SettingsProfilePage.lastNameIF.setValue('aaas');
    SettingsProfilePage.saveBTN.click();
    LoginPage.open();
    LoginPage.login(userFake.email, userFake.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
    expect(ProfilePage.headerProfile.getText()).eq('aaas aaas');

  });
});

