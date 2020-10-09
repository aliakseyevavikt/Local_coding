import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2 from '../../../pageObjects/registerStep2.page';
import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsProfilePage from '../../../pageObjects/settingsProfile.page';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import waitTime from '../../../testData/waitTimes';
import userFake from '../../../testData/userFake';
import { roles } from '../../../testResult/settings/updatePassword.testResult';
import { userUpdateRole } from '../../../helpers/axios/updateUserRoleByAxios';

describe('[SMOKE] PROFILE (SETTINGS)', function() {
  before(function() {
    RegisterPage.open();
    RegisterPage.registerUser(userFake);
    RegisterStep2.registerUserStep2(userFake);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    ProfilePage.logout();
  });
  it('Profile page information can be changed by NEW', function() {   //except country + T-shirt
    SettingsProfilePage.goToSettingsProfilePage(userFake.email, userFake.password);
    SettingsProfilePage.changeProfilePageData(
      userFake.firstNameUpdated,
      userFake.lastNameUpdated,
      userFake.phoneUpdated,
      userFake.aboutUpdated,
      userFake.goalsUpdated,
    );
    ProfilePage.logout();
    LoginPage.open();
    LoginPage.login(userFake.email, userFake.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
    expect(ProfilePage.headerProfile.getText()).eq(userFake.firstNameUpdated + ' ' + userFake.lastNameUpdated);
  });

  describe('Profile page information can be changed by LEARNER', function() {
    before(async () => {
      const res = await userUpdateRole(userFake.email, userFake.password, roles.learner);
      expect(res.success).eq(true);
    });

    it('Profile page information can be changed by LEARNER', () => {
      SettingsProfilePage.goToSettingsProfilePage(userFake.email, userFake.password);
      SettingsProfilePage.changeProfilePageData(
        userFake.firstName,
        userFake.lastName,
        userFake.phone,
        userFake.about,
        userFake.goals,
      );
      ProfilePage.logout();
      LoginPage.open();
      LoginPage.login(userFake.email, userFake.password);
      TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
      expect(ProfilePage.headerProfile.getText()).eq(userFake.firstName + ' ' + userFake.lastName);
    });
  });

  describe('Profile page information can be changed by STUDENT', function() {
    before(async () => {
      const res = await userUpdateRole(userFake.email, userFake.password, roles.student);
      expect(res.success).eq(true);
    });

    it('Profile page information can be changed by Student', () => {
      SettingsProfilePage.goToSettingsProfilePage(userFake.email, userFake.password);
      SettingsProfilePage.changeProfilePageData(
        userFake.firstNameUpdated,
        userFake.lastNameUpdated,
        userFake.phoneUpdated,
        userFake.aboutUpdated,
        userFake.goalsUpdated,
      );
      ProfilePage.logout();
      LoginPage.open();
      LoginPage.login(userFake.email, userFake.password);
      TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
      expect(ProfilePage.headerProfile.getText()).eq(userFake.firstNameUpdated + ' ' + userFake.lastNameUpdated);
    });
  });
});
