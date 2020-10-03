import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsProfilePage from '../../../pageObjects/settingsProfile.page';
import user from '../../../testData/userRoles';
import { profileSettingsTestResult } from '../../../testResult/settings/profileSettings.testResult';

describe('PROFILE (SETTINGS) LAYOUT', function() {

    before(() => {
        LoginPage.open();
        LoginPage.login(user.admin.email, user.admin.password);
        ProfilePage.dropDownUserMenu.click();
        ProfilePage.settingsLink.click();
    });

    it('"First Name" title should be display', function() {
        expect(SettingsProfilePage.firstNameIFTitle.isDisplayed());
    });

    it('"First Name" title has label with correct text', function() {
        expect(SettingsProfilePage.firstNameIFTitle.getText()).eq(profileSettingsTestResult.firstName);
    });

    it('"First Name" input field should be display', function() {
        expect(SettingsProfilePage.firstNameIF.isDisplayed()).true;
    });

    it('"Last Name" title should be display', function() {
        expect(SettingsProfilePage.lastNameIFTitle.isDisplayed()).true;
    });

    it('"Last Name" title has label with correct text', function() {
        expect(SettingsProfilePage.lastNameIFTitle.getText()).eq(profileSettingsTestResult.lastName);
    });

    it('"Last Name" input field should be display', function() {
        expect(SettingsProfilePage.lastNameIF.isDisplayed()).true;
    });

    it('"Phone" title should be display', function() {
        expect(SettingsProfilePage.phoneIFTitle.isDisplayed()).true;
    });

    it('"Phone" title has label with correct text', function() {
        expect(SettingsProfilePage.phoneIFTitle.getText()).eq(profileSettingsTestResult.phone);
    });

    it('"Phone" input field should be display', function() {
        expect(SettingsProfilePage.phoneIF.isDisplayed()).true;
    });

    it('"About" title should be display', function() {
        expect(SettingsProfilePage.aboutIFTitle.isDisplayed()).true;
    });

    it('"About" title has label with correct text', function() {
        expect(SettingsProfilePage.aboutIFTitle.getText()).eq(profileSettingsTestResult.about);
    });

    it('"About" input field should be display', function() {
        expect(SettingsProfilePage.aboutFieldRIF.isDisplayed()).true;
    });

    it('"My goals" title should be display', function() {
        expect(SettingsProfilePage.myGoalsIFTitle.isDisplayed()).true;
    });

    it('"My goals" title has label with correct text', function() {
        expect(SettingsProfilePage.myGoalsIFTitle.getText()).eq(profileSettingsTestResult.myGoals);
    });

    it('"My goals" input field should be display', function() {
        expect(SettingsProfilePage.myGoalsRIF.isDisplayed()).true;
    });

    it('"Country" title should be display', function() {
        expect(SettingsProfilePage.countryFieldDDBTitle.isDisplayed()).true;
    });

    it('"Country" title has label with correct text', function() {
        expect(SettingsProfilePage.countryFieldDDBTitle.getText()).eq(profileSettingsTestResult.country);
    });

    it('"Country" input field should be display', function() {
        expect(SettingsProfilePage.countryFieldDDL.isDisplayed()).true;
    });

    it('"English level" title should be display', function() {
        expect(SettingsProfilePage.englishLevelDDBTitle.isDisplayed()).true;
    });

    it('"English level" title has label with correct text', function() {
        expect(SettingsProfilePage.englishLevelDDBTitle.getText()).eq(profileSettingsTestResult.englishLevel);
    });

    it('"English level" input field should be display', function() {
        expect(SettingsProfilePage.englishLevelDDL.isDisplayed()).true;
    });

    it('"T-Shirt size" title should be display', function() {
        expect(SettingsProfilePage.tShirtSizeDDBTitle.isDisplayed()).true;
    });

    it('"T-Shirt size" title has label with correct text', function() {
        expect(SettingsProfilePage.tShirtSizeDDBTitle.getText()).eq(profileSettingsTestResult.tShirtSize);
    });

    it('"T-Shirt size" input field should be display', function() {
        expect(SettingsProfilePage.tShirtSizeDDL.isDisplayed()).true;
    });

    it('"Save" button is display', function() {
        expect(SettingsProfilePage.saveBTN.isDisplayed()).true;
    });

    it('"Save" button has correct text', function() {
        expect(SettingsProfilePage.saveBTN.getText()).eq(profileSettingsTestResult.saveBTN);
    });
});
