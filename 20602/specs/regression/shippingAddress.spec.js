import ShippingAddressPage from '../../../pageObjects/shippingAddress.page';
import expected from '../../data/expected.json';
import { WAIT_TIME_MEDIUM } from '../../../testData/waitTimes';
import { WAIT_TIME_LONGEST } from '../../../testData/waitTimes';

before(() => {
  ShippingAddressPage.goToShippingAddressPageAsAdmin();
});

describe('TEST SHIPPING ADDRESS TAB ELEMENTS', () => {
  it('TC-006-01 should verify "Full name" field is displayed', function () {
    expect(ShippingAddressPage.fullNameField.waitForDisplayed(WAIT_TIME_MEDIUM));
  });

  it('TC-006-02 should verify "Full name" field has correct label', function () {
    expect(ShippingAddressPage.fullNameLabel.getText()).eq(expected.shippingAddressTab.fullNameLabel);
  });

  it('TC-006-03 should verify "Country" dropdown exists', function () {
    expect(ShippingAddressPage.countryField.isExisting()).true;
  });
  it('TC-006-04 should verify "Country" dropdown has correct label', function () {
    expect(ShippingAddressPage.countryLabel.getText()).eq(expected.shippingAddressTab.countryLabel);
  });

  it('TC-006-06 should verify "Street address" field is displayed', function () {
    expect(ShippingAddressPage.streetAddressField.isDisplayed()).true;
  });

  it('TC-006-07 should verify "Street address" field has correct label', function () {
    expect(ShippingAddressPage.streetAddressLabel.getText()).eq(expected.shippingAddressTab.streetAddressLabel);
  });

  it('TC-006-08 should verify "Street address" field has correct placeholder', function () {
    expect(ShippingAddressPage.streetAddressField.getAttribute('placeholder')).eq(expected.shippingAddressTab.streetAddressPlaceholder);
  });

  it('TC-006-10 should verify "City" field is displayed', function () {
    expect(ShippingAddressPage.cityField.isDisplayed()).true;
  });

  it('TC-006-11 should verify "City" field has correct label', function () {
    expect(ShippingAddressPage.cityLabel.getText()).eq(expected.shippingAddressTab.cityLabel);
  });

  it('TC-006-12 should verify "State/Province" field exists', function () {
    expect(ShippingAddressPage.stateProvinceField.isExisting()).true;
  });

  it('TC-006-13 should verify "State/Province" field has correct label', function () {
    expect(ShippingAddressPage.stateProvinceLabel.getText()).eq(expected.shippingAddressTab.stateProviceLabel);
  });

  it('TC-006-15 should verify "Postal Code" field is displayed', function () {
    expect(ShippingAddressPage.postalCodeField.isDisplayed()).true;
  });

  it('TC-006-16 should verify "Postal Code" field has correct label', function () {
    expect(ShippingAddressPage.postalCodeLabel.getText()).eq(expected.shippingAddressTab.postalCodeLabel);
  });

  it('TC-006-17 should verify "Contact Phone" field is displayed', function () {
    expect(ShippingAddressPage.contactPhoneField.isDisplayed()).true;
  });

  it('TC-006-18 should verify "Contact Phone" field has correct label', function () {
    expect(ShippingAddressPage.contactPhoneLabel.getText()).eq(expected.shippingAddressTab.contactPhoneLabel);
  });

  it('TC-006-23 should verify "Save Address" Btn is displayed', function () {
    expect(ShippingAddressPage.saveAddressBtn.isDisplayed()).true;
  });

  it('TC-006-24 should verify "Save Address" Btn has correct label', function () {
    expect(ShippingAddressPage.saveAddressBtn.getText()).eq(expected.shippingAddressTab.submitButtonText);
  });

  it('TC-006-25 should verify "Save Address" Btn is enabled by default', function () {
    expect(ShippingAddressPage.saveAddressBtn.isEnabled()).true;
  });

  it('TC-006-26 should verify  "May be used to assist delivery" text is displayed under "Contact phone" field by deault', function () {
    expect(ShippingAddressPage.contactPhoneFieldNote.getText()).eq(expected.shippingAddressTab.contactPhoneFieldNote);
  });
});
