import BasePage from './Base.page';

class settingsProfilePage extends BasePage {
  get firstNameIFTitle() {
    return $('[title="First Name"]');
  }

  get firstNameIF() {
    return $('#editProfile_firstName');
  }

  get lastNameIFTitle() {
    return $('[title="Last Name"]');
  }

  get lastNameIF() {
    return $('#editProfile_lastName');
  }

  get phoneIFTitle() {
    return $('[title="Phone"]');
  }

  get phoneIF() {
    return $('#editProfile_phone');
  }

  get aboutIFTitle() {
    return $('[title="About"]');
  }

  get aboutFieldRIF() {
    return $('#editProfile_about');
  }

  get myGoalsIFTitle() {
    return $('[title="My goals"]');
  }

  get myGoalsRIF() {
    return $('#editProfile_goals');
  }

  get countryFieldDDBTitle() {
    return $('[title="Country"]');
  }

  get countryFieldDDL() {
    return $('[data-qa="countries"]');
  }

  get englishLevelDDBTitle() {
    return $('[title="English level"]');
  }

  get englishLevelDDL() {
    return $('[data-qa="englishLevel"]');
  }

  get tShirtSizeDDBTitle() {
    return $('[title="T-Shirt size"]');
  }

  get tShirtSizeDDL() {
    return $('[data-qa="tShirtSize"]');
  }

  get saveBTN() {
    return $('.ant-btn.ant-btn-primary');
  }

  changeDataAtProfile(firstName, lastName) {
    this.firstNameIF.setValue(firstName);
    this.lastNameIF.setValue(lastName);
    this.saveBTN.click();
  }
}
export default new settingsProfilePage();
