import LoginPage from '../../../../pageObjects/login.page';
import user from '../../../../testData/userRoles';
import TopMenuPage from '../../../../pageObjects/topMenu.page';
import ShippingAddressPage from '../../../../pageObjects/shippingAddress.page';
import { shippingAddressSettings } from '../../../testResult/shippingAddressSettings';

describe('PROFILE TAB (SETTINGS) LAYOUT', function () {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.new.email, user.new.password);
    TopMenuPage.dropDownArrow.click();
    TopMenuPage.dropDownMenuSettings.click();
    ShippingAddressPage.shippingAddressLink.click();
  });

  it('TC-284 Full Name input field should be displayed', function () {
    expect(ShippingAddressPage.fullNameField.isDisplayed());
  });

  it('TC-285 Full Name input field should have correct label', function () {
    expect(ShippingAddressPage.fullNameLabel.getText()).eq(shippingAddressSettings.fullName);
  });

  it('TC-286 Country input field should be displayed', function () {
    expect(ShippingAddressPage.countryField.isDisplayed());
  });

  it('TC-287 Country input field should have correct label', function () {
    expect(ShippingAddressPage.countryLabel.getText()).eq(shippingAddressSettings.country);
  });

  it('TC-288 Street address input field should be displayed', function () {
    expect(ShippingAddressPage.streetAddressField.isDisplayed());
  });

  it('TC-289 Street address input field should have correct label', function () {
    expect(ShippingAddressPage.streetAddressLabel.getText()).eq(shippingAddressSettings.streetAddress);
  });

  it('TC-290 Country input field should have correct placeholder text', function () {
    expect(ShippingAddressPage.streetAddressField.getAttribute('placeholder')).eq(
      shippingAddressSettings.streetAddressPlaceholder,
    );
  });

  it('TC-291 City input field should be displayed', function () {
    expect(ShippingAddressPage.cityField.isDisplayed());
  });

  it('TC-292 City input field should have correct label', function () {
    expect(ShippingAddressPage.cityLabel.getText()).eq(shippingAddressSettings.city);
  });

  it('TC-293 State/Province input field should be displayed', function () {
    expect(ShippingAddressPage.stateProvinceField.isDisplayed());
  });

  it('TC-294 State/Province input field should have correct label', function () {
    expect(ShippingAddressPage.stateProvinceLabel.getText()).eq(shippingAddressSettings.stateProvence);
  });

  it('TC-295 Postal Code input field should be displayed', function () {
    expect(ShippingAddressPage.postalCodeField.isDisplayed());
  });

  it('TC-296 Postal Code input field should have correct label', function () {
    expect(ShippingAddressPage.postalCodeLabel.getText()).eq(shippingAddressSettings.postalCode);
  });

  it('TC-297 Contact Phone input field should be displayed', function () {
    expect(ShippingAddressPage.contactPhoneField.isDisplayed());
  });

  it('TC-298 Contact Phone input field should have correct label', function () {
    expect(ShippingAddressPage.contactPhoneLabel.getText()).eq(shippingAddressSettings.contactPhone);
  });

  it('TC-299 Correct note under the Contact Phone input field should be displayed', function () {
    expect(ShippingAddressPage.contactPhoneFieldNote.isDisplayed());
  });

  it('TC-300 Save Address button should be displayed', function () {
    expect(ShippingAddressPage.saveAddressBtn.isDisplayed());
  });

  it('TC-301 Save Address button should have correct label', function () {
    expect(ShippingAddressPage.saveAddressBtn.getText()).eq(shippingAddressSettings.saveAddressBTN);
  });
});
