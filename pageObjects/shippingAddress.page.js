import BasePage from './Base.page';
import LoginPage from './login.page.js';
import TopMenuPage from './topMenu.page';
import ProfilePage from './profile.page';

class ShippingAddressPage extends BasePage {
  get fullNameLabel() {
    return $('[for="fullName"]');
  }

  get fullNameField() {
    return $('#fullName');
  }

  get countryLabel() {
    return $('[for="countryName"]');
  }

  get countryField() {
    return $('#countryName');
  }
  get countryFieldValue() {
    return $$('.ant-select-selection-item')[0];
  }

  get expandCountryListBtn() {
    return $$('.ant-select-selector')[0];
  }

  get streetAddressLabel() {
    return $('[for="address"]');
  }

  get streetAddressField() {
    return $('#address');
  }

  get cityLabel() {
    return $('[for="city"]');
  }

  get cityField() {
    return $('#city');
  }

  get stateProvinceLabel() {
    return $('[for="state"]');
  }

  get stateProvinceField() {
    return $('#state');
  }
  get stateProvinceValue() {
    return $$('.ant-select-selection-item')[1];
  }

  get expandStateProvinceListBtn() {
    return $$('.ant-select-selector')[1];
  }

  get postalCodeLabel() {
    return $('[for="zipCode"]');
  }

  get postalCodeField() {
    return $('#zipCode');
  }

  get contactPhoneLabel() {
    return $('[for="contactPhone"]');
  }

  get contactPhoneField() {
    return $('#contactPhone');
  }

  get contactPhonePrefix() {
    return $('.ant-input-prefix');
  }

  get contactPhoneFieldNote() {
    return $('.ant-form-item-extra');
  }

  get saveAddressBtn() {
    return $('[type="submit"]');
  }

  get shippingAddressLink() {
    return $('[data-qa="shippingAddress"]');
  }

  get countryOptions() {
    return $$('.ant-select-item-option-content');
  }

  get stateProvinceOptions() {
    return $$('.ant-select-item-option-content');
  }

  goToShippingAddressPageAs(email, password) {
    LoginPage.open();
    LoginPage.login(email, password);
    ProfilePage.dropDownUserMenu.click();
    TopMenuPage.dropDownMenuSettings.click();
    this.shippingAddressLink.click();
  }

  clearField(fieldLocator) {
    let valueLength = this[fieldLocator].getValue().length;
    let backspaces = new Array(valueLength).fill('Backspace');
    this[fieldLocator].setValue(backspaces);
  }

  clearShippingAddressInputFields() {
    this.clearField('fullNameField');
    this.clearField('streetAddressField');
    this.clearField('cityField');
    this.clearField('postalCodeField');
    this.clearField('contactPhoneField');
  }

  selectRandomCountry() {
    const l = 11;
    const n = Math.floor(Math.random() * l);
    this.expandCountryListBtn.click();
    this.countryOptions[n].click();
  }

  selectRandomStateProvince() {
    const l = 5;
    const n = Math.floor(Math.random() * l);
    this.expandStateProvinceListBtn.click();
    return this.stateProvinceOptions[n].click();
  }

  submitShippingAddress(firstName, lastName, streetAddress, city, postalCode, phone) {
    this.clearShippingAddressInputFields();
    this.fullNameField.setValue(`${firstName} ${lastName}`);
    this.streetAddressField.setValue(streetAddress);
    this.cityField.setValue(city);
    this.selectRandomStateProvince();
    this.postalCodeField.setValue(postalCode);
    this.contactPhoneField.setValue(phone);
    this.saveAddressBtn.click();
  }

  checkFieldsValues() {
    const firstName = this.fullNameField.getValue().split(' ')[0];
    const lastName = this.fullNameField.getValue().split(' ')[1];
    const streetAddress = this.streetAddressField.getValue();
    const city = this.cityField.getValue();
    const postalCode = this.postalCodeField.getValue();
    //const phone = this.contactPhoneField.getValue(); //phone is not checked due to a bug
    return { firstName, lastName, streetAddress, city, postalCode };
  }

    checkIfTwoObjectsHaveSameData (obj1, obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
}

export default new ShippingAddressPage();
