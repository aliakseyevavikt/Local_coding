import RegisterPage from '../../pageObjects/register.page';
import userFake from '../../testData/userFake';
import RegisterStep2 from '../../pageObjects/registerStep2.page';
import ProfilePage from '../../pageObjects/profile.page';
import SettingsPasswordPage from '../../pageObjects/settingsPassword.page';
import LoginPage from '../../pageObjects/login.page';
import { userDelete } from '../../helpers/deleteNewUserByAxios';
import { roles } from '../../testResult/updatePassword.testResult';
import { userUpdateRole } from '../../helpers/updateUserRoleByAxios';

describe('NEW USER CHANGE PASSWORD', function () {
  before(function () {
    RegisterPage.open();
    RegisterPage.registerUser(userFake);
    RegisterStep2.registerUserStep2(userFake);
    SettingsPasswordPage.open(process.env.RANDOMUSER_ID);
  });

  it('New user stays logged in after his password has been changed', function () {
    SettingsPasswordPage.updatePassword(userFake.password, userFake.newPassword);
    expect(ProfilePage.dropDownUserMenu.isDisplayed()).true;
  });

  it('New user can log in using the new password', function () {
    ProfilePage.logout();
    LoginPage.login(userFake.email, userFake.newPassword);
    expect(ProfilePage.badgeRole.getText()).eq(roles.new);
    expect(ProfilePage.getLoginConfirmation()).eq(`${userFake.firstName} ${userFake.lastName}`);
  });

  describe('LEARNER CHANGE PASSWORD, users role will be update to a learner', function () {
    before(async () => {
      const res = await userUpdateRole(userFake.email, userFake.newPassword, roles.learner);
      expect(res.success).eq(true);
    });

    it('should update learners password', function () {
      SettingsPasswordPage.open(process.env.RANDOMUSER_ID);
      SettingsPasswordPage.updatePassword(userFake.newPassword, userFake.password);
      expect(ProfilePage.dropDownUserMenu.isDisplayed()).true;
    });

    it('learner can log in using the new password', function () {
      ProfilePage.logout();
      LoginPage.login(userFake.email, userFake.password);
      expect(ProfilePage.badgeRole.getText()).eq(roles.learner);
      expect(ProfilePage.getLoginConfirmation()).eq(`${userFake.firstName} ${userFake.lastName}`);
    });

    describe('STUDENT CHANGE PASSWORD, users role will be update to a student', function () {
      before(async () => {
        const res = await userUpdateRole(userFake.email, userFake.password, roles.student);
        expect(res.success).eq(true);
      });

      it('should update students password', function () {
        SettingsPasswordPage.open(process.env.RANDOMUSER_ID);
        SettingsPasswordPage.updatePassword(userFake.password, userFake.newPassword);
        expect(ProfilePage.dropDownUserMenu.isDisplayed()).true;
      });

      it('student can log in using the new password', function () {
        ProfilePage.logout();
        LoginPage.login(userFake.email, userFake.newPassword);
        expect(ProfilePage.badgeRole.getText()).eq(roles.student);
        expect(ProfilePage.getLoginConfirmation()).eq(`${userFake.firstName} ${userFake.lastName}`);
      });

      after('Should delete a user', async () => {
        const res = await userDelete(userFake.email);
        expect(res.success).eq(true);
      });
    });
  });
});
