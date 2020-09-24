import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/userRoles';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';

describe('Login as a student', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('TLC-298 Successful login as a student', () => {
    LoginPage.validLogin(user.student.email, user.student.password);
    ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).eq(user.student.firstName + ' ' + user.student.lastName);
  });
});
