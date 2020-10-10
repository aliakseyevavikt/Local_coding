import BasePage from './Base.page';
import LoginPage from './login.page';
import ProfilePage from './profile.page';
import { clearValue } from '../helpers/clearValue';

class settingsProfilePage extends BasePage {

  get firstNameLabel() {
    return $('[title="First Name"]');
  }

  get firstNameField() {
    return $('#editProfile_firstName');
  }

  get lastNameLabel() {
    return $('[title="Last Name"]');
  }

  get lastNameField() {
    return $('#editProfile_lastName');
  }

  get phoneLabel() {
    return $('[title="Phone"]');
  }

  get phoneField() {
    return $('#editProfile_phone');
  }

  get aboutLabel() {
    return $('[title="About"]');
  }

  get aboutField() {
    return $('#editProfile_about');
  }

  get myGoalsLabel() {
    return $('[title="My goals"]');
  }

  get myGoalsField() {
    return $('#editProfile_goals');
  }

  get countryFieldLabel() {
    return $('[title="Country"]');
  }

  get countryField() {
    return $('[data-qa="countries"]');
  }

  get englishLevelTitle() {
    return $('[title="English level"]');
  }

  get englishLevelField() {
    return $('[data-qa="englishLevel"]');
  }

  get englishLevelValue() {
    return $('[data-qa="englishLevel"] span.ant-select-selection-item');
  }

  get englishLevelOptions() {
    return $$('.ant-select-item.ant-select-item-option');
  }

  get tShirtSizeLabel() {
    return $('[title="T-Shirt size"]');
  }

  get tShirtSizeField() {
    return $('[data-qa="tShirtSize"]');
  }

  get tShirtSizeValue() {
    return $('[data-qa="tShirtSize"] span.ant-select-selection-item');
  }

  get saveProfileButton() {
    return $('.ant-btn.ant-btn-primary');
  }

  goToSettingsProfilePage(email, password) {
    LoginPage.open();
    LoginPage.login(email, password);
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
  }

  clearProfileSettingsPageInputFields() {
    clearValue(this.firstNameField);
    clearValue(this.lastNameField);
    clearValue(this.phoneField);
    clearValue(this.aboutField);
    clearValue(this.myGoalsField);
  }

  selectRandomEnglishLevel() {
    const l = 8;
    const n = Math.floor(Math.random() * l);
    this.englishLevelValue.click();
    browser.pause(2000);
    return this.englishLevelOptions[n].click();
  }

  // selectRandomTShirtSize() {
  //   const l = 12;
  //   const n = Math.floor(Math.random() * l);
  //   this.tShirtSizeValue.click();
  //   browser.pause(2000);
  //   return this.englishLevelOptions[n].click();
  // }


  changeProfilePageData(firstName, lastName, phone, about, goals) {
    this.clearProfileSettingsPageInputFields();
    this.firstNameField.setValue(firstName);
    this.lastNameField.setValue(lastName);
    this.phoneField.setValue(phone);
    this.aboutField.setValue(about);
    this.myGoalsField.setValue(goals);
    this.selectRandomEnglishLevel();
    // this.selectRandomTShirtSize();
    this.saveProfileButton.click();
    // return { firstName, lastName, phone, about, goals };
  }

  checkAllFieldsValues() {
    return [this.firstNameField.getValue(),
      this.lastNameField.getValue(),
      this.phoneField.getValue(),
      this.aboutField.getValue(),
      this.myGoalsField.getValue(),
      //   this.englishLevelField.getValue()
    ];
  }
}
export default new settingsProfilePage();
