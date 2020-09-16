import LoginPage from '../../../../pageObjects/login.page';
import user from '../../../../testData/user';
import ProfilePage from '../../../../pageObjects/profile.page';
import SettingsProfilePage from '../../../../pageObjects/settingsProfile.page';
import {profileSettings} from '../../../testResult/profileSettings';

describe('PROFILE TAB (SETTINGS) LAYOUT', function () {

    before(() => {
        LoginPage.open();
        LoginPage.login(user.admin.email, user.admin.password);
        ProfilePage.dropDownUserMenu.click();
        ProfilePage.settingsLink.click();
    });

    it('TC-256 "First Name" title should be display', function () {
        expect(SettingsProfilePage.firstNameIFTitle.isDisplayed());
    });

    it('TC-257 "First Name" title has label with correct text', function () {
        expect(SettingsProfilePage.firstNameIFTitle.getText()).eq(profileSettings.firstName);
    });

    it('TC-258 "First Name" input field should be display', function () {
        expect(SettingsProfilePage.firstNameIF.isDisplayed()).true;
    });

    it('TC-259 "First Name" input field should has value', function () {
        expect(SettingsProfilePage.firstNameIF.getValue()).eq(user.admin.firstName);
    });

    it('TC-260 "Last Name" title should be display', function () {
        expect(SettingsProfilePage.lastNameIFTitle.isDisplayed()).true;
    });

    it('TC-261 "Last Name" title has label with correct text', function () {
        expect(SettingsProfilePage.lastNameIFTitle.getText()).eq(profileSettings.lastName);
    });

    it('TC-262 "Last Name" input field should be display', function () {
        expect(SettingsProfilePage.lastNameIF.isDisplayed()).true;
    });

    it('TC-263 "Last Name" input field should has value', function () {
        expect(SettingsProfilePage.lastNameIF.getValue()).eq(user.admin.lastName);
    });

    it('TC-264 "Phone" title should be display', function () {
        expect(SettingsProfilePage.phoneIFTitle.isDisplayed()).true;
    });

    it('TC-265 "Phone" title has label with correct text', function () {
        expect(SettingsProfilePage.phoneIFTitle.getText()).eq(profileSettings.phone);
    });

    it('TC-266 "Phone" input field should be display', function () {
        expect(SettingsProfilePage.phoneIF.isDisplayed()).true;
    });

    it('TC-267 "About" title should be display', function () {
        expect(SettingsProfilePage.aboutIFTitle.isDisplayed()).true;
    });

    it('TC-268 "About" title has label with correct text', function () {
        expect(SettingsProfilePage.aboutIFTitle.getText()).eq(profileSettings.about);
    });

    it('TC-269 "About" input field should be display', function () {
        expect(SettingsProfilePage.aboutFieldRIF.isDisplayed()).true;
    });

    it('TC-270 "My goals" title should be display', function () {
        expect(SettingsProfilePage.myGoalsIFTitle.isDisplayed()).true;
    });

    it('TC-271 "My goals" title has label with correct text', function () {
        expect(SettingsProfilePage.myGoalsIFTitle.getText()).eq(profileSettings.myGoals);
    });

    it('TC-272 "My goals" input field should be display', function () {
        expect(SettingsProfilePage.myGoalsRIF.isDisplayed()).true;
    });

    it('TC-273 "Country" title should be display', function () {
        expect(SettingsProfilePage.countryFieldDDBTitle.isDisplayed()).true;
    });

    it('TC-274 "Country" title has label with correct text', function () {
        expect(SettingsProfilePage.countryFieldDDBTitle.getText()).eq(profileSettings.country);
    });

    it('TC-275 "Country" input field should be display', function () {
        expect(SettingsProfilePage.countryFieldDDL.isDisplayed()).true;
    });

    it('TC-276 "English level" title should be display', function () {
        expect(SettingsProfilePage.englishLevelDDBTitle.isDisplayed()).true;
    });

    it('TC-277 "English level" title has label with correct text', function () {
        expect(SettingsProfilePage.englishLevelDDBTitle.getText()).eq(profileSettings.englishLevel);
    });

    it('TC-278 "English level" input field should be display', function () {
        expect(SettingsProfilePage.englishLevelDDL.isDisplayed()).true;
    });

    it('TC-279 "T-Shirt size" title should be display', function () {
        expect(SettingsProfilePage.tShirtSizeDDBTitle.isDisplayed()).true;
    });

    it('TC-280 "T-Shirt size" title has label with correct text', function () {
        expect(SettingsProfilePage.tShirtSizeDDBTitle.getText()).eq(profileSettings.tShirtSize);
    });

    it('TC-281 "T-Shirt size" input field should be display', function () {
        expect(SettingsProfilePage.tShirtSizeDDL.isDisplayed()).true;
    });

    it('TC-282 "Save" button is display', function () {
        expect(SettingsProfilePage.saveBTN.isDisplayed()).true;
    });

    it('TC-283 "Save" button has text "Save"', function () {
        expect(SettingsProfilePage.saveBTN.getText()).eq(profileSettings.saveBTN);
    });

});
