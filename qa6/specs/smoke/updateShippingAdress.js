import ShippingAddressPage from '../../../pageObjects/shippingAddress.page';

before(() => {
  ShippingAddressPage.goToShippingAddressPageAsAdmin()
});

describe('NEW SHIPPING ADDRESS SUBMITTING', () => {
  it('SA01 Should verify "Save Address" Btn saves a new shipping address', () => {
    expect(ShippingAddressPage.submitShippingAddress()).to.deep.eq(ShippingAddressPage.checkFieldsValues());
  });
});