import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import roleLearner from '../../../testData/userRoles';
import wait_time_medium from '../../../testData/waitTimes';
import expected from '../../../20610/data/expected.json';
import user from '../../../testData/userRoles';

describe('SUCCESSFUL LOGIN AS LEARNER', () => {
  before(() => {
    LoginPage.open();
  });

  it('TC-04 Login as role: "Learner" (valid input)', () => {
    LoginPage.validLogin(roleLearner.learner.email, roleLearner.learner.password);
    ProfilePage.badgeRole.waitForDisplayed(wait_time_medium);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.learner);
    expect(ProfilePage.getLoginConfirmation()).eq(`${roleLearner.learner.firstName} ${roleLearner.learner.lastName}`);
  });
});
