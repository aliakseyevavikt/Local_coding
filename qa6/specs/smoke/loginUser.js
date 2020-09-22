import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/userRoles';
import expected from '../../data/expected.json';

before(() => {
  LoginPage.open();
});

afterEach(() => {
  ProfilePage.logout();
});

describe('POSITIVE ADMIN LOGIN', () => {
  it('UL01 Login as admin with correct data', () => {
    LoginPage.validLogin(user.admin.email, user.admin.password);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.admin);
    expect(ProfilePage.getLoginConfirmation()).eq(`${user.admin.firstName} ${user.admin.lastName}`);
  });
});

describe('POSITIVE LEARNER LOGIN', () => {
  it('UL02 Login as learner with correct data', () => {
    LoginPage.validLogin(user.learner.email, user.learner.password);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.learner);
    expect(ProfilePage.getLoginConfirmation()).eq(`${user.learner.firstName} ${user.learner.lastName}`);
  });
});

describe('POSITIVE STUDENT LOGIN', () => {
  it('UL03 Login as student with correct data', () => {
    LoginPage.validLogin(user.student.email, user.student.password);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.student);
    expect(ProfilePage.getLoginConfirmation()).eq(`${user.student.firstName} ${user.student.lastName}`);
  });
});

describe('POSITIVE NEW USER LOGIN', () => {
  it('UL04 Login as new user with correct data', () => {
    LoginPage.validLogin(user.new2.email, user.new2.password);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.new);
    expect(ProfilePage.getLoginConfirmation()).eq(`${user.new.firstName} ${user.new.lastName}`);
  });
});
