import BasePage from './Base.page';
import LoginPage from './login.page.js';
import user from '../testData/userRoles';
import TopMenuPage from './topMenu.page';
import users from '../20602/data/users';
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
    return $('[data-qa="shippingAddress"]')
  }

  get countryOptions() {
    return $$('.ant-select-item-option-content');
  }

  get stateProvinceOptions() {
    return $$('.ant-select-item-option-content');
  }

  goToShippingAddressPageAsAdmin() {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
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
    const l = 11;
    const n = Math.floor(Math.random() * l) + 11;
    this.expandStateProvinceListBtn.click();
    return this.stateProvinceOptions[n].click();
  }

  submitShippingAddress() {
    this.clearShippingAddressInputFields();
    const name = `${user.admin.firstName} ${user.admin.lastName}`;
    this.fullNameField.setValue(name);
    this.selectRandomCountry();
    const country = this.countryFieldValue.getAttribute('title');
    const streetAddress = users.shippingStreetAddress;
    this.streetAddressField.setValue(streetAddress);
    const city = users.shippingCity;
    this.cityField.setValue(city);
    this.selectRandomStateProvince();
    const stateProvince = this.stateProvinceValue.getAttribute('title');
    const postalCode = users.shippingPostalCode;
    this.postalCodeField.setValue(postalCode);
    let contactPhone;
    if (this.contactPhonePrefix.getText().length === 2) {
      contactPhone = users.phone;
    } else {
      contactPhone = users.phone2;
    }
    this.contactPhoneField.setValue(contactPhone);
    this.saveAddressBtn.click();
    return { name, country, streetAddress, city, stateProvince, postalCode, contactPhone };
  }

  checkFieldsValues() {
    const name = this.fullNameField.getValue();
    const country = this.countryFieldValue.getAttribute('title');
    const streetAddress = this.streetAddressField.getValue();
    const city = this.cityField.getValue();
    const stateProvince = this.stateProvinceValue.getAttribute('title');
    const postalCode = this.postalCodeField.getValue();
    const contactPhone = this.contactPhoneField.getValue();
    return { name, country, streetAddress, city, stateProvince, postalCode, contactPhone };
  }
}

export default new ShippingAddressPage();
