import ShippingAddressPage from '../../pageObjects/shippingAddress.page';
import clearInputValue from '../../helpers/clearValueMethod';
import userFake from '../../testData/userFake';
import ProfilePage from '../../pageObjects/profile.page';

before(function () {
  ShippingAddressPage.goToShippingAddressPageAsLearner();
  browser.maximizeWindow();
});

describe('UPDATING SHIPPING ADDRESS', function () {
  it('Should verify learner can change the address within the same city, after logout the address stays as updated', () => {
    clearInputValue(ShippingAddressPage.streetAddressField);
    ShippingAddressPage.streetAddressField.setValue(userFake.shippingStreetAddress);
    clearInputValue(ShippingAddressPage.postalCodeField);
    ShippingAddressPage.postalCodeField.setValue(userFake.shippingPostalCode);
    ShippingAddressPage.saveAddressBtn.click();
    ProfilePage.logout();
    ShippingAddressPage.goToShippingAddressPageAsLearner();
    expect(ShippingAddressPage.streetAddressField.getValue()).eq(userFake.shippingStreetAddress);
    expect(ShippingAddressPage.postalCodeField.getValue()).eq(userFake.shippingPostalCode);
  });
});


