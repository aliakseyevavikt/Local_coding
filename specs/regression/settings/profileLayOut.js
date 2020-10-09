import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsProfilePage from '../../../pageObjects/settingsProfile.page';
import user from '../../../testData/userRoles';
import { profileSettingsTestResult } from '../../../testResult/settings/profileSettings.testResult';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import waitTime from '../../../testData/waitTimes';

describe('PROFILE (SETTINGS) LAYOUT', function() {

    before(() => {
        LoginPage.open();
        LoginPage.login(user.admin.email, user.admin.password);
        TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
        ProfilePage.dropDownUserMenu.click();
        ProfilePage.settingsLink.click();
    });

    describe('GENERAL LAYOUT', function() {
        it('"First Name" title should be display', function() {
            expect(SettingsProfilePage.firstNameLabel.isDisplayed());
        });

        it('"First Name" title has label with correct text', function() {
            expect(SettingsProfilePage.firstNameLabel.getText()).eq(profileSettingsTestResult.firstName);
        });

        it('"First Name" input field should be display', function() {
            expect(SettingsProfilePage.firstNameField.isDisplayed()).true;
        });

        it('"Last Name" title should be display', function() {
            expect(SettingsProfilePage.lastNameLabel.isDisplayed()).true;
        });

        it('"Last Name" title has label with correct text', function() {
            expect(SettingsProfilePage.lastNameLabel.getText()).eq(profileSettingsTestResult.lastName);
        });

        it('"Last Name" input field should be display', function() {
            expect(SettingsProfilePage.lastNameField.isDisplayed()).true;
        });

        it('"Phone" title should be display', function() {
            expect(SettingsProfilePage.phoneLabel.isDisplayed()).true;
        });

        it('"Phone" title has label with correct text', function() {
            expect(SettingsProfilePage.phoneLabel.getText()).eq(profileSettingsTestResult.phone);
        });

        it('"Phone" input field should be display', function() {
            expect(SettingsProfilePage.phoneField.isDisplayed()).true;
        });

        it('"About" title should be display', function() {
            expect(SettingsProfilePage.aboutLabel.isDisplayed()).true;
        });

        it('"About" title has label with correct text', function() {
            expect(SettingsProfilePage.aboutLabel.getText()).eq(profileSettingsTestResult.about);
        });

        it('"About" input field should be display', function() {
            expect(SettingsProfilePage.aboutField.isDisplayed()).true;
        });

        it('"My goals" title should be display', function() {
            expect(SettingsProfilePage.myGoalsLabel.isDisplayed()).true;
        });

        it('"My goals" title has label with correct text', function() {
            expect(SettingsProfilePage.myGoalsLabel.getText()).eq(profileSettingsTestResult.myGoals);
        });

        it('"My goals" input field should be display', function() {
            expect(SettingsProfilePage.myGoalsField.isDisplayed()).true;
        });

        it('"Country" title should be display', function() {
            expect(SettingsProfilePage.countryFieldLabel.isDisplayed()).true;
        });

        it('"Country" title has label with correct text', function() {
            expect(SettingsProfilePage.countryFieldLabel.getText()).eq(profileSettingsTestResult.country);
        });

        it('"Country" input field should be display', function() {
            expect(SettingsProfilePage.countryField.isDisplayed()).true;
        });

        it('"English level" title should be display', function() {
            expect(SettingsProfilePage.englishLevelTitle.isDisplayed()).true;
        });

        it('"English level" title has label with correct text', function() {
            expect(SettingsProfilePage.englishLevelTitle.getText()).eq(profileSettingsTestResult.englishLevel);
        });

        it('"English level" input field should be display', function() {
            expect(SettingsProfilePage.englishLevelField.isDisplayed()).true;
        });

        it('"T-Shirt size" title should be display', function() {
            expect(SettingsProfilePage.tShirtSizeLabel.isDisplayed()).true;
        });

        it('"T-Shirt size" title has label with correct text', function() {
            expect(SettingsProfilePage.tShirtSizeLabel.getText()).eq(profileSettingsTestResult.tShirtSize);
        });

        it('"T-Shirt size" input field should be display', function() {
            expect(SettingsProfilePage.tShirtSizeField.isDisplayed()).true;
        });

        it('"Save" button is display', function() {
            expect(SettingsProfilePage.saveProfileButton.isDisplayed()).true;
        });

        it('"Save" button has correct text', function() {
            expect(SettingsProfilePage.saveProfileButton.getText()).eq(profileSettingsTestResult.saveBTN);
        });
    });
});

for (let property in user) {
    describe(`[REGRESSION] LAYOUT VALUE ARE CORRECT FOR ${user[property].password} `, () => {
        before(() => {
            LoginPage.open();
            LoginPage.login(user[property].email, user[property].password);
            TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
            ProfilePage.dropDownUserMenu.click();
            ProfilePage.settingsLink.click();
        });

        it('First name is correct', function() {
            expect(SettingsProfilePage.firstNameField.getValue()).eq(user[property].firstName);
        });
        it('Last name is correct', function() {
            expect(SettingsProfilePage.lastNameField.getValue()).eq(user[property].lastName);
        });
        it('Phone is correct', function() {
            expect(SettingsProfilePage.phoneField.getValue()).eq(user[property].phone);
        });
        it('About is correct', function() {
            expect(SettingsProfilePage.aboutField.getValue()).eq(user[property].about);
        });
        it('My goals is correct', function() {
            expect(SettingsProfilePage.myGoalsField.getValue()).eq(user[property].goals);
        });
        it('Country is correct', function() {
            expect(SettingsProfilePage.countryField.getText()).eq(user[property].country);
        });
        it('English Level is correct', function() {
            expect(SettingsProfilePage.englishLevelField.getText()).eq(user[property].englishLevel);
        });
        it('T-Shirt is correct', function() {
            expect(SettingsProfilePage.tShirtSizeValue.getAttribute('title')).eq(user[property].TShirtSize);
        });
    });
}
