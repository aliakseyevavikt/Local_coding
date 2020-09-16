import faker from 'faker';

const user = {
  fakerUser: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: '17775551122',
    shippingStreetAddress: faker.address.streetAddress(),
    shippingCity: faker.address.city(),
    shippingPostalCode: faker.address.zipCode(),
  },

  tempUser: {
    email: 'new55@qa6.us',
    password: 'newnew',
    firstName: 'NewFirst',
    lastName: 'NewLast',
    phone: '17775551121',
    about: 'QA Engineer',
    goals: 'no goals',
    englishLevel: 'Advanced',
    countryName: 'USA',
  },
};

module.exports = user;
