const faker = require('faker');

export const newUser = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  about: faker.name.jobArea(),
  email: faker.internet.email().toLowerCase(),
  newEmail: faker.internet.email().toLowerCase(),
  password: "QA" + Math.trunc(new Date().getTime() / 10000) + "!$",
  newPassword: "PASV" + Math.trunc(new Date().getTime() / 1000) + "&$",
  message:  faker.lorem.sentences(faker.random.number({ min: 4, max: 10 })),
  word: faker.lorem.words(1),
  index1: faker.random.number(10),
  index2: faker.random.number(11),
  phone: 2157777577,
  shippingStreetAddress: faker.address.streetAddress(),
  shippingCity: faker.address.city(),
  shippingPostalCode: faker.address.zipCode()
};

