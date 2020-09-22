import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/userRoles';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingsProfilePage from '../../../pageObjects/settingsProfile.page';

let count = 0;

for (let property in user) {
  describe(`ALL ELEMENTS ARE PRESENT CORRECTLY WHEN YOU LOGIN AS ${user[property].password} `, () => {
    before(() => {
      LoginPage.open();
      LoginPage.login(user[property].email, user[property].password);
      ProfilePage.dropDownUserMenu.click();
      ProfilePage.settingsLink.click();
    });

   let flag = count >= 9 ? '' : '0';

    it(`TC-002-0${flag + (1 + count)} First name IF is present and present correct data`, function () {
      expect(SettingsProfilePage.firstNameIF.getValue()).eq(user[property].firstName);
    });
    it(`TC-002-0${flag + (2 + count)} Last name IF is present and present correct data`, function () {
      expect(SettingsProfilePage.lastNameIF.getValue()).eq(user[property].lastName);
    });
    it(`TC-002-0${flag + (3 + count)} Phone IF is present and present correct data`, function () {
      expect(SettingsProfilePage.phoneIF.getValue()).eq(user[property].phone);
    });
    it(`TC-002-0${flag + (4 + count)} About RIF is present and present correct data`, function () {
      expect(SettingsProfilePage.aboutFieldRIF.getValue()).eq(user[property].about);  //??????????????????
    });
    it(`TC-002-0${flag + (5 + count)} My goals RIF is present and present correct data`, function () {
      expect(SettingsProfilePage.myGoalsRIF.getValue()).eq(user[property].goals);
    });
    it(`TC-002-0${flag + (6 + count)} Country DDBtn is present and present correct data`, function () {
      expect(SettingsProfilePage.countryFieldDDL.getText()).eq(user[property].countryName); //??????????????
    });
    it(`TC-002-0${flag + (7 + count)} English Level DDBtn is present and present correct data`, function () {
      expect(SettingsProfilePage.englishLevelDDL.getText()).eq(user[property].englishLevel);
    });
    it(`TC-002-0${flag + (8 + count)} T-Shirt DDBtn is present and present correct data`, function () {
      expect(SettingsProfilePage.tShirtSizeDDL.getValue()).eq('');  // ?????????????????
    });
    it(`TC-002-0${flag + (9 + count)} Save Btn is present and present correct data`, function () {
      expect(SettingsProfilePage.saveBTN.isDisplayed().true);
    });
    count += 9;
  });
}
