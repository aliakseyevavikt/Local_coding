import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/userRoles';
import ProfilePage from '../../../pageObjects/profile.page';
import { WAIT_TIME_MEDIUM } from '../../../testData/waitTimes';
const profile = require('../testData/expected.json').profile;
import SettingsProfile from '../../../pageObjects/settingsProfile.page';

describe('Verify that header is present', () => {
  it('TC-049 should register new user and verify header', function () {
    LoginPage.open();
    LoginPage.validLogin(user.learner.email, user.learner.password);
    ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
    expect(ProfilePage.getLoginConfirmation()).eq(user.learner.firstName + ' ' + user.learner.lastName);
  });

  it('TC-050 Verify that paragraph1 has text About', function () {
    expect(ProfilePage.aboutText.getText()).eq(profile.paragraph1);
  });

  it('TC-051 Verify that paragraph2 has text Goals', function () {
    expect(ProfilePage.goalsText.getText()).eq(profile.paragraph2);
  });

  it('TC-052 Verify that paragraph3 has text Completed Codewars Katas', function () {
    expect(ProfilePage.completedCodeWarsText.getText()).eq(profile.paragraph3);
  });

  // it('TC-053 Verify that paragraph4 has text Daily reports', function () {
  //   expect(ProfilePage.dailyReportsText.getText()).eq(profile.paragraph4);
  // });

  it('TC-054 Verify create day report btn text', function () {
    expect(ProfilePage.createDayReportBtn.getText()).eq(profile.createDayReportBtn);
  });

  it('TC-055 Verify contact us link text', function () {
    expect(ProfilePage.contactUsLink.getText()).eq(profile.contactUsLink);
  });

  it('TC-056 Verify terms of service link text', function () {
    expect(ProfilePage.termsOfServiceLink.getText()).eq(profile.termsOfServiceLink);
  });

  it('TC-057 Verify privacy policy link text', function () {
    expect(ProfilePage.privacyPolicy.getText()).eq(profile.privacyPolicyLink);
  });

  it('TC-058 Check Profile -> First Name value ', function () {
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
    expect(SettingsProfile.firstNameField.getValue()).to.equal(user.learner.firstName);
  });

  it('TC-059 Check Profile -> Last Name value ', function () {
    expect(SettingsProfile.lastNameField.getValue()).to.equal(user.learner.lastName);
  });

  it('TC-060 Check Profile -> Phone value ', function () {
    expect(SettingsProfile.phoneField.getValue()).to.equal(user.learner.phone);
  });

  it('TC-061 Check Profile -> About value ', function () {
    expect(SettingsProfile.aboutField.getValue()).to.equal(user.learner.about);
  });

  it('TC-062 Check Profile -> My Goals value ', function () {
    expect(SettingsProfile.myGoalsField.getValue()).to.equal(user.learner.goals);
  });

  it('TC-063 Check Profile -> Country value ', function () {
    expect(SettingsProfile.countryField.getAttribute('title')).to.equal(user.learner.country);
  });

  it('TC-064 Check Profile -> English Level value ', function () {
    expect(SettingsProfile.englishLevelField.getAttribute('title')).to.equal(user.learner.englishLevel);
  });

  it('TC-065 Check Profile -> T-Shirt Size field exists ', function () {
    expect(SettingsProfile.tShirtSizeField).to.exist;
  });
});
