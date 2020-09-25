import HomePage from '../../../pageObjects/home.page';
import RegisterPage from '../../../pageObjects/register.page';
import user from '../../../testData/userFake';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import expected from '../../data/expected.json';
import { userDelete } from '../../../helpers/axios/deleteNewUserByAxios';
import waitTime from '../../../testData/waitTimes';
import ProfilePage from '../../../pageObjects/profile.page';
import LoginPage from '../../../pageObjects/login.page';

before(() => {
  HomePage.open();
  HomePage.registerBtn.click();
  RegisterPage.registerUser(user);
});

describe('Pop-up drawer', () => {
  it('TC-008-047 Verify that if user clicks "Skip", log-out, log-in - pop-up drawer shows-up', function() {
    RegisterStep2Page.skipBtn.click();
    ProfilePage.logout();
    LoginPage.login(user.email, user.password);
    expect(RegisterStep2Page.popupDrawer.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });

  it('TC-008-048 Verify that if user clicks "Skip", log-out, log-in - pop-up drawer title is displayed ', function() {
    RegisterStep2Page.skipBtn.click();
    ProfilePage.logout();
    LoginPage.login(user.email, user.password);
    expect(RegisterStep2Page.title.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });

  it('TC-008-049 Verify that if user clicks "Skip", log-out, log-in - pop-up drawer title text is "Contact information"', function() {
    RegisterStep2Page.skipBtn.click();
    ProfilePage.logout();
    LoginPage.login(user.email, user.password);
    expect(RegisterStep2Page.title.getText()).eq(expected.registerStep2Data.popupDrawerTitle);
  });

  it('TC-008-050 Verify that if user clicks "Skip", log-out, log-in - close icon (x) is displayed', function() {
    RegisterStep2Page.skipBtn.click();
    ProfilePage.logout();
    LoginPage.login(user.email, user.password);
    expect(RegisterStep2Page.closeBtn.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });

  it('TC-008-051 Verify that if user clicks "Skip", log-out, log-in and clicks close icon (x) drawer closes', function() {
    RegisterStep2Page.skipBtn.click();
    ProfilePage.logout();
    LoginPage.login(user.email, user.password);
    RegisterStep2Page.closeBtn.click();
    expect(ProfilePage.headerProfile.getText()).eq(user.firstName + ' ' + user.lastName);
  });

  it('TC-008-052 Verify that if user clicks "Skip", log-out, log-in and clicks "Skip" link drawer closes', function() {
    ProfilePage.logout();
    LoginPage.login(user.email, user.password);
    RegisterStep2Page.skipBtn.click();
    expect(ProfilePage.headerProfile.getText()).eq(user.firstName + ' ' + user.lastName);
  });

  it('TC-008-053 Verify that if user clicks "Skip", log-out, log-in and enters valid information (country, phone) drawer doesnt show up again', function() {
    ProfilePage.logout();
    LoginPage.login(user.email, user.password);
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone10);
    RegisterStep2Page.SubmitBtn.click();
    expect(ProfilePage.headerProfile.getText()).eq(user.firstName + ' ' + user.lastName);
    ProfilePage.logout();
    LoginPage.login(user.email, user.password);
    expect(ProfilePage.headerProfile.getText()).eq(user.firstName + ' ' + user.lastName);
  });
});

after('Should delete a user', async () => {
  const res = await userDelete(user.email);
  expect(res.success).eq(true);
});
