import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/user';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';

describe('LOGIN', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('TC-01-001 Successful login as an admin', () => {
    LoginPage.validLogin(user.admin.email, user.admin.password);
    expect(ProfilePage.getLoginConfirmation()).eq(user.admin.firstName + ' ' + user.admin.lastName);
  });

  it('TC-01-002 Successful login as a new user', () => {
    LoginPage.validLogin(user.new2.email, user.new2.password);
    expect(ProfilePage.getLoginConfirmation()).eq(user.new2.firstName + ' ' + user.new2.lastName);
  });

  it('TC-01-003 Successful login as a learner', () => {
    LoginPage.validLogin(user.learner.email, user.learner.password);
    expect(ProfilePage.getLoginConfirmation()).eq(user.learner.firstName + ' ' + user.learner.lastName);
  });

  it('TC-01-004 Successful login as a student', () => {
    LoginPage.validLogin(user.student.email, user.student.password);
    expect(ProfilePage.getLoginConfirmation()).eq(user.student.firstName + ' ' + user.student.lastName);
  });
});
