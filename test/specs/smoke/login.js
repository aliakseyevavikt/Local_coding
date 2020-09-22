import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/userRoles';
import waitTime from '../../../testData/waitTimes';

describe('LOGIN', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-001 Successful login as an admin', () => {
    LoginPage.validLogin(user.admin.email, user.admin.password);
    ProfilePage.badgeRole.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
    expect(ProfilePage.getLoginConfirmation()).eq(user.admin.firstName + ' ' + user.admin.lastName);
  });
});
