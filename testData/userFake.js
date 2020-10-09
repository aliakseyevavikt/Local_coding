import faker from 'faker';

const userFake = {
  firstName: faker.name.firstName(),
  firstNameUpdated: faker.name.firstName(),
  lastName: faker.name.lastName(),
  lastNameUpdated: faker.name.lastName(),
  email: faker.internet.email().toLowerCase(),
  password: faker.internet.password(),
  message: faker.lorem.words(5),
  newPassword: faker.internet.password(),
  shippingStreetAddress: faker.address.streetAddress(),
  ShippingStreetAddressUpdated: faker.address.streetAddress(),
  shippingCity: faker.address.city(),
  shippingCityUpdated: faker.address.city(),
  shippingPostalCode: faker.address.zipCode(),
  shippingPostalCodeUpdated: faker.address.zipCode(),
  phone: '12157777577',
  phoneUpdated: '12157777578',
  phone2: '123123123',
};

export default userFake;
