import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsPasswordPage from '../../../pageObjects/settingsPassword.page';
import LoginPage from '../../../pageObjects/login.page';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import { newUser } from '../../testData/register';
import { passwordSettingsInputs } from '../../testData/passwordSettings';
import waitTime from '../../../testData/waitTimes';
import { userDeleteByEmail } from '../../helpers/axios/userDeleteByEmail';

describe('UPDATE PASSWORD IN SETTINGS', () => {
  it('TC-199 User (new) can update password in settings', function () {
    RegisterPage.open();
    RegisterPage.registerUser(newUser);
    RegisterStep2Page.registerUserStep2(newUser);
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
    SettingsPasswordPage.passwordTab.click();
    SettingsPasswordPage.updatePassword(newUser.password, passwordSettingsInputs.passwordNew);
    LoginPage.open();
    LoginPage.login(newUser.email, passwordSettingsInputs.passwordNew);
    TopMenuPage.userAvatarName.waitForDisplayed(waitTime.WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).eq(newUser.firstName + ' ' + newUser.lastName);
  });
});

after ('Should delete a user', async () => {
  const res = await userDeleteByEmail(newUser.email);
  console.log('delete ' + res.success);
  expect(res.success).eq(true);
});

