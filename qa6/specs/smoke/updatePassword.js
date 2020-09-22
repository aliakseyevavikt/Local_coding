import RegisterPage from '../../../pageObjects/register.page';
import { newUser } from '../../helpers/faker';
import RegisterStep2 from '../../../pageObjects/registerStep2.page';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsPasswordPage from '../../../pageObjects/settingsPassword.page';
import LoginPage from '../../../pageObjects/login.page';
import { userDelete } from '../../../helpers/deleteNewUserByAxios';
import expected from '../../data/expected.json';
import { userUpdateRole } from '../../helpers/userUpdateRole';
import { userBadges } from '../../data/expected.json';
import user from '../../../testData/userRoles'

describe('NEW USER CHANGE PASSWORD', () => {
  before(function () {
    RegisterPage.open();
    RegisterPage.registerUser(newUser);
    RegisterStep2.registerUserStep2(newUser);
    SettingsPasswordPage.open(process.env.RANDOMUSER_ID);
  });

  it('UP01 User stays logged in after password has been changed', () => {
    SettingsPasswordPage.updatePassword(newUser.password, newUser.newPassword);
    expect(ProfilePage.dropDownUserMenu.isDisplayed()).true;
  });

  it('UP02 User can log in using the new password', () => {
    ProfilePage.logout();
    LoginPage.login(newUser.email, newUser.newPassword);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.new);
    expect(ProfilePage.getLoginConfirmation()).eq(`${newUser.firstName} ${newUser.lastName}`);
  });
});

describe('LEARNER CHANGE PASSWORD', () => {
  before(async () => {
    await userUpdateRole(newUser.email, newUser.newPassword, userBadges.learner);
    SettingsPasswordPage.open(process.env.RANDOMUSER_ID);
  });

  it('UP03 User stays logged in after password has been changed', () => {
    SettingsPasswordPage.updatePassword(newUser.newPassword, newUser.password);
    expect(ProfilePage.dropDownUserMenu.isDisplayed()).true;
  });

  it('UP04 User can log in using the new password', () => {
    ProfilePage.logout();
    LoginPage.login(newUser.email, newUser.password);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.learner);
    expect(ProfilePage.getLoginConfirmation()).eq(`${newUser.firstName} ${newUser.lastName}`);
  });
});

describe('STUDENT CHANGE PASSWORD', () => {
  before(async () => {
    await userUpdateRole(newUser.email, newUser.password, userBadges.student);
    SettingsPasswordPage.open(process.env.RANDOMUSER_ID);
  });

  it('UP05 User stays logged in after password has been changed', () => {
    SettingsPasswordPage.updatePassword(newUser.password, newUser.newPassword);
    expect(ProfilePage.dropDownUserMenu.isDisplayed()).true;
  });

  it('UP06 User can log in using the new password', () => {
    ProfilePage.logout();
    LoginPage.login(newUser.email, newUser.newPassword);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.student);
    expect(ProfilePage.getLoginConfirmation()).eq(`${newUser.firstName} ${newUser.lastName}`);
  });
});

describe('ADMIN CHANGE PASSWORD', () => {
  before(() => {
    ProfilePage.logout();
    LoginPage.login(user.adminUpdatePassword.email, user.adminUpdatePassword.oldPassword);
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.waitForClickable();
    ProfilePage.settingsLink.click();
    SettingsPasswordPage.passwordTab.click();
  });

  it('UP07 User stays logged in after password has been changed', () => {
    SettingsPasswordPage.updatePassword(user.adminUpdatePassword.oldPassword, user.adminUpdatePassword.newPassword);
    expect(ProfilePage.dropDownUserMenu.isDisplayed()).true;
  });

  it('UP08 User can log in using the new password', () => {
    ProfilePage.logout();
    LoginPage.login(user.adminUpdatePassword.email, user.adminUpdatePassword.newPassword);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.admin);
    expect(ProfilePage.getLoginConfirmation()).eq(`${user.adminUpdatePassword.firstName} ${user.adminUpdatePassword.lastName}`);
  });

  it('UP09 Return old password for Admin', () => {
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.waitForClickable();
    ProfilePage.settingsLink.click();
    SettingsPasswordPage.passwordTab.click();
    SettingsPasswordPage.updatePassword(user.adminUpdatePassword.newPassword, user.adminUpdatePassword.oldPassword);
  });
});

after('Should delete user', async () => {
  const res = await userDelete(newUser.email);
  expect(res.success).eq(true);
});
