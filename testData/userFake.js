import faker from 'faker';

const userFake = {
  firstName: faker.name.firstName(),
  firstNameUpdated: faker.name.firstName(),
  lastName: faker.name.lastName(),
  lastNameUpdated: faker.name.lastName(),
  email: faker.internet.email().toLowerCase(),
  password: faker.internet.password(),
  newPassword: faker.internet.password(),
  message: faker.lorem.words(5),
  shippingStreetAddress: faker.address.streetAddress(),
  ShippingStreetAddressUpdated: faker.address.streetAddress(),
  shippingCity: faker.address.city(),
  shippingCityUpdated: faker.address.city(),
  shippingPostalCode: faker.address.zipCode(),
  shippingPostalCodeUpdated: faker.address.zipCode(),
  phone: faker.phone.phoneNumber('###########'), //11,
  phoneUpdated: faker.phone.phoneNumber('###########'), //11,
  phone2: '123123123', //????
  about: faker.random.words(10),
  aboutUpdated: faker.random.words(5),
  goals: faker.random.words(5),
  goalsUpdated: faker.random.words(10),
};

export default userFake;
