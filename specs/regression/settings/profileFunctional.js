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
    clearValue(settingProfilePage.firstNameField);
    settingProfilePage.firstNameField.setValue(inputProfileSettings.firstLastNameMin);
    expect(settingProfilePage.firstNameField.getValue()).eq(profileSettingsTestData.firstLastNameMin);
  });

  it('first name input field should accept " aaaaaaaaaaaaaaaaaa " ', function() {
    clearValue(settingProfilePage.firstNameField);
    settingProfilePage.firstNameField.setValue(inputProfileSettings.firstLastNameMax);
    expect(settingProfilePage.firstNameField.getValue()).eq(profileSettingsTestData.firstLastNameMax);
  });

  it('first name input field should accept " a\'sssa- " ', function() {
    clearValue(settingProfilePage.firstNameField);
    settingProfilePage.firstNameField.setValue(inputProfileSettings.firstLastName3);
    expect(settingProfilePage.firstNameField.getValue()).eq(profileSettingsTestData.firstLastName3);
  });

  it('last name input field should accept " A " ', function() {
    clearValue(settingProfilePage.lastNameField);
    settingProfilePage.lastNameField.setValue(inputProfileSettings.firstLastNameMin);
    expect(settingProfilePage.lastNameField.getValue()).eq(profileSettingsTestData.firstLastNameMin);
  });

  it('last name input field should accept " aaaaaaaaaaaaaaaaaa " ', function() {
    clearValue(settingProfilePage.lastNameField);
    settingProfilePage.lastNameField.setValue(inputProfileSettings.firstLastNameMax);
    expect(settingProfilePage.lastNameField.getValue()).eq(profileSettingsTestData.firstLastNameMax);
  });

  it('last name input field should accept " a\'sssa- " ', function() {
    clearValue(settingProfilePage.lastNameField);
    settingProfilePage.lastNameField.setValue(inputProfileSettings.firstLastName3);
    expect(settingProfilePage.lastNameField.getValue()).eq(profileSettingsTestData.firstLastName3);
  });

  it('phone input field should accept 11 numbers " 11111111111 " ', function() {
    clearValue(settingProfilePage.phoneField);
    settingProfilePage.phoneField.setValue(inputProfileSettings.phoneField11);
    expect(settingProfilePage.phoneField.getValue()).eq(profileSettingsTestData.phoneField11);
  });

  it('phone input field should accept 12 numbers " 111111111111 " ', function() {
    clearValue(settingProfilePage.phoneField);
    settingProfilePage.phoneField.setValue(inputProfileSettings.phoneField12);
    expect(settingProfilePage.phoneField.getValue()).eq(profileSettingsTestData.phoneField12);
  });

  it('user should be able to update About field with 50 random letters and spaces', function() {
    clearValue(settingProfilePage.aboutField);
    settingProfilePage.aboutField.setValue(inputProfileSettings.aboutField);
    expect(settingProfilePage.aboutField.getValue()).eq(profileSettingsTestData.aboutField);
  });

  it('user should be able to update My Goal field with 50 random letters and spaces', function() {
    clearValue(settingProfilePage.myGoalsField);
    settingProfilePage.myGoalsField.setValue(inputProfileSettings.myGoalsField);
    expect(settingProfilePage.myGoalsField.getValue()).eq(profileSettingsTestData.myGoalsField);
  });

  it('user should be able to change the country using DDL', function() {
    if (settingProfilePage.countryField.getText() == profileSettingsTestData.countryFieldCurrent) {
      settingProfilePage.countryField.click();
      browser.keys('ArrowDown');
      browser.keys('Enter');
      expect(settingProfilePage.countryField.getText()).eq(profileSettingsTestData.countryFiled);
    }
  });

  it('user should be able to change level of english using DDL', function() {
    if (settingProfilePage.englishLevelField.getText() == profileSettingsTestData.englishLevelFieldCurrent) {
      settingProfilePage.englishLevelField.click();
      browser.keys('ArrowDown');
      browser.keys('Enter');
      expect(settingProfilePage.englishLevelField.getText()).eq(profileSettingsTestData.englishLevelField);
    }
  });

  it('user should be able to change t-shirt size using DDL', function() {
    if (settingProfilePage.tShirtSizeField.getText() == profileSettingsTestData.tShirtSizeFieldCurrent) {
      settingProfilePage.tShirtSizeField.click();
      browser.keys('ArrowDown');
      browser.keys('Enter');
      expect(settingProfilePage.tShirtSizeField.getText()).eq(profileSettingsTestData.tShirtSizeField);
    }
  });
});
