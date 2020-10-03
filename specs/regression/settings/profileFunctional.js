import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import settingProfilePage from '../../../pageObjects/settingsProfile.page';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import user from '../../../testData/userRoles';
import { clearValue } from '../../../helpers/clearValue';
import { inputProfileSettings } from '../../../20605/testData/inputProfileSettings';
import { profileSettingsTestData } from '../../../testData/profileSettings.testData';
import waitTime from '../../../testData/waitTimes';


describe('PROFILE (FUNCTIONAL) IN SETTINGS', function() {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
  });

  it('first name input field should accept " A " ', function() {
    clearValue(settingProfilePage.firstNameIF);
    settingProfilePage.firstNameIF.setValue(inputProfileSettings.firstLastNameMin);
    expect(settingProfilePage.firstNameIF.getValue()).eq(profileSettingsTestData.firstLastNameMin);
  });

  it('first name input field should accept " aaaaaaaaaaaaaaaaaa " ', function() {
    clearValue(settingProfilePage.firstNameIF);
    settingProfilePage.firstNameIF.setValue(inputProfileSettings.firstLastNameMax);
    expect(settingProfilePage.firstNameIF.getValue()).eq(profileSettingsTestData.firstLastNameMax);
  });

  it('first name input field should accept " a\'sssa- " ', function() {
    clearValue(settingProfilePage.firstNameIF);
    settingProfilePage.firstNameIF.setValue(inputProfileSettings.firstLastName3);
    expect(settingProfilePage.firstNameIF.getValue()).eq(profileSettingsTestData.firstLastName3);
  });

  it('last name input field should accept " A " ', function() {
    clearValue(settingProfilePage.lastNameIF);
    settingProfilePage.lastNameIF.setValue(inputProfileSettings.firstLastNameMin);
    expect(settingProfilePage.lastNameIF.getValue()).eq(profileSettingsTestData.firstLastNameMin);
  });

  it('last name input field should accept " aaaaaaaaaaaaaaaaaa " ', function() {
    clearValue(settingProfilePage.lastNameIF);
    settingProfilePage.lastNameIF.setValue(inputProfileSettings.firstLastNameMax);
    expect(settingProfilePage.lastNameIF.getValue()).eq(profileSettingsTestData.firstLastNameMax);
  });

  it('last name input field should accept " a\'sssa- " ', function() {
    clearValue(settingProfilePage.lastNameIF);
    settingProfilePage.lastNameIF.setValue(inputProfileSettings.firstLastName3);
    expect(settingProfilePage.lastNameIF.getValue()).eq(profileSettingsTestData.firstLastName3);
  });

  it('phone input field should accept 11 numbers " 11111111111 " ', function() {
    clearValue(settingProfilePage.phoneIF);
    settingProfilePage.phoneIF.setValue(inputProfileSettings.phoneField11);
    expect(settingProfilePage.phoneIF.getValue()).eq(profileSettingsTestData.phoneField11);
  });

  it('phone input field should accept 12 numbers " 111111111111 " ', function() {
    clearValue(settingProfilePage.phoneIF);
    settingProfilePage.phoneIF.setValue(inputProfileSettings.phoneField12);
    expect(settingProfilePage.phoneIF.getValue()).eq(profileSettingsTestData.phoneField12);
  });

  it('user should be able to update About field with 50 random letters and spaces', function() {
    clearValue(settingProfilePage.aboutFieldRIF);
    settingProfilePage.aboutFieldRIF.setValue(inputProfileSettings.aboutField);
    expect(settingProfilePage.aboutFieldRIF.getValue()).eq(profileSettingsTestData.aboutField);
  });

  it('user should be able to update My Goal field with 50 random letters and spaces', function() {
    clearValue(settingProfilePage.myGoalsRIF);
    settingProfilePage.myGoalsRIF.setValue(inputProfileSettings.myGoalsField);
    expect(settingProfilePage.myGoalsRIF.getValue()).eq(profileSettingsTestData.myGoalsField);
  });

  it('user should be able to change the country using DDL', function() {
    if (settingProfilePage.countryFieldDDL.getText() == profileSettingsTestData.countryFieldCurrent) {
      settingProfilePage.countryFieldDDL.click();
      browser.keys('ArrowDown');
      browser.keys('Enter');
      expect(settingProfilePage.countryFieldDDL.getText()).eq(profileSettingsTestData.countryFiled);
    }
  });

  it('user should be able to change level of english using DDL', function() {
    if (settingProfilePage.englishLevelDDL.getText() == profileSettingsTestData.englishLevelFieldCurrent) {
      settingProfilePage.englishLevelDDL.click();
      browser.keys('ArrowDown');
      browser.keys('Enter');
      expect(settingProfilePage.englishLevelDDL.getText()).eq(profileSettingsTestData.englishLevelField);
    }
  });

  it('user should be able to change t-shirt size using DDL', function() {
    if (settingProfilePage.tShirtSizeDDL.getText() == profileSettingsTestData.tShirtSizeFieldCurrent) {
      settingProfilePage.tShirtSizeDDL.click();
      browser.keys('ArrowDown');
      browser.keys('Enter');
      expect(settingProfilePage.tShirtSizeDDL.getText()).eq(profileSettingsTestData.tShirtSizeField);
    }
  });
});
