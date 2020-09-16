import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2 from '../../../pageObjects/registerStep2.page';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsPasswordPage from '../../../pageObjects/settingsPassword.page';
import LoginPage from '../../../pageObjects/login.page';
import expected from '../../data/expected.json';
import { userDelete } from '../../../helpers/deleteNewUserByAxios';
import user from '../../data/fakerData';

before(() => {
  RegisterPage.open();
  RegisterPage.registerUser(user.tempUser);
  RegisterStep2.registerUserStep2(user.tempUser);
  ProfilePage.dropDownUserMenu.click();
  ProfilePage.settingsLink.waitForClickable();
  ProfilePage.settingsLink.click();
  SettingsPasswordPage.passwordTab.click();
});

describe(' CHANGE PASSWORD FOR NEW USER ', () => {
  it('TC- User stays logged in after password has been changed', function () {
    SettingsPasswordPage.updatePassword(user.tempUser.password, user.tempUser.newPassword);
    expect(ProfilePage.dropDownUserMenu.isDisplayed()).true;
  });

  it('TC-  User can log with the new password', function () {
    ProfilePage.logout();
    LoginPage.login(user.tempUser.email, user.tempUser.newPassword);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.new);
    expect(ProfilePage.getLoginConfirmation()).eq(`${user.tempUser.firstName} ${user.tempUser.lastName}`);
    ProfilePage.logout();
  });
});

after('Should delete user', async () => {
  const res = await userDelete(user.tempUser.email);
  expect(res.success).eq(true);
});
