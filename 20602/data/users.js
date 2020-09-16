import faker from 'faker';

const user = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email().toLowerCase(),
  password: faker.internet.password(),
  newPassword: faker.internet.password(),
  shippingStreetAddress: faker.address.streetAddress(),
  shippingCity: faker.address.city(),
  shippingPostalCode: faker.address.zipCode(),
  phone: '2157777577',
  phone2: '123123123',
  //shippingContactPhone: faker.random().number({min:100000000, max:9999999999}),
};

const shippingAddressData = {};

export default user;
