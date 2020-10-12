import userFake from '../testData/userFake';

const dataOriginal = {
  firstName: userFake.firstName,
  lastName: userFake.lastName,
  streetAddress: userFake.shippingStreetAddress,
  city: userFake.shippingCity,
  postalCode: userFake.shippingPostalCode,
};

const dataUpdated = {
  firstName: userFake.firstNameUpdated,
  lastName: userFake.lastNameUpdated,
  streetAddress: userFake.ShippingStreetAddressUpdated,
  city: userFake.shippingCityUpdated,
  postalCode: userFake.shippingPostalCodeUpdated,
};

export { dataUpdated, dataOriginal };
