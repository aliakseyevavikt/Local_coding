import ShippingAddressPage from '../../../pageObjects/shippingAddress.page';

before(() => {
  ShippingAddressPage.goToShippingAddressPageAsAdmin()
});

describe('NEW SHIPPING ADDRESS SUBMITTING', () => {
  it('should verify "Save Address" Btn saves a new shipping address', () => {
    let fieldsValues = ShippingAddressPage.submitShippingAddress();
    browser.refresh();
    const checkValues = ShippingAddressPage.checkFieldsValues()
    expect(fieldsValues).to.deep.eq(checkValues);

  });
});