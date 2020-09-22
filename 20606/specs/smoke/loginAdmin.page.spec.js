import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/userRoles';
import wait_time_medium from '../../../testData/waitTimes';
import expected from '../../../20610/data/expected.json';

describe('SUCCESSFUL LOGIN AS ADMIN', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-01 Login as role: "ADMIN" (valid input)', () => {
    LoginPage.validLogin(user.admin.email, user.admin.password);
    ProfilePage.badgeRole.waitForDisplayed(wait_time_medium);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.admin);
    expect(ProfilePage.getLoginConfirmation()).eq(`${user.admin.firstName} ${user.admin.lastName}`);
  });
});
