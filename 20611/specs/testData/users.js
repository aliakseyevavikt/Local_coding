import faker from 'faker';

const email = Math.random().toFixed(10) + '@gmail.com';

const registration = {
  title: 'Local Coding',
  header: 'Create an account',
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  password: 'Password',
};

const user = {
  firstName: 'Test',
  lastName: 'Test',
  email: email,
  incorrectEmail: 'test@gmailcom',
  incorrectPhone: '123456789',
  password: 'abc123',
  phone: '9048483838',
};

const newUser = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phone: '17775551122',
  shippingStreetAddress: faker.address.streetAddress(),
  shippingCity: faker.address.city(),
  shippingPostalCode: faker.address.zipCode(),
};

const tempUser = {
  email: 'new55@qa6.us',
  password: 'newnew',
  firstName: 'NewFirst',
  lastName: 'NewLast',
  phone: '17775551121',
  about: 'QA Engineer',
  goals: 'no goals',
  englishLevel: 'Advanced',
  countryName: 'USA',
};

export { registration, user, newUser, tempUser };
