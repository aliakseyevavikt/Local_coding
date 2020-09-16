import LoginPage from '../../../pageObjects/login.page';
import ProfilPage from '../../../pageObjects/profile.page';
import { WAIT_TIME_MEDIUM, WAIT_TIME_LONGEST } from '../../../testData/waitTimes';
import user from '../../../testData/user';
import ProfilePage from '../../../pageObjects/profile.page';

describe('SMOKE LOGIN PAGE TEST', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  describe('TC-01-031 LOGIN ADMIN', () => {
    it('should Successful log in as an Admin ', function () {
      LoginPage.validLogin(user.admin.email, user.admin.password);
      ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
      expect(ProfilePage.getLoginConfirmation()).eq(user.admin.firstName + ' ' + user.admin.lastName);
    });
  });

  describe('TC-01-032 LOGIN NEW USER', () => {
    it('should Successful log in as an New ', function () {
      LoginPage.validLogin(user.new.email, user.new.password);
      ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
      expect(ProfilePage.getLoginConfirmation()).eq(user.new.firstName + ' ' + user.new.lastName);
    });
  });

  describe('TC-01-033 LOGIN LEARNER', () => {
    it('should Successful log in as an Learner ', function () {
      LoginPage.validLogin(user.learner.email, user.learner.password);
      ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
      expect(ProfilePage.getLoginConfirmation()).eq(user.learner.firstName + ' ' + user.learner.lastName);
    });
  });

  describe('TC-01-034 LOGIN STUDENT', () => {
    it('should Successful log in as an Student ', function () {
      LoginPage.validLogin(user.student.email, user.student.password);
      ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
      expect(ProfilePage.getLoginConfirmation()).eq(user.student.firstName + ' ' + user.student.lastName);
    });
  });
});
