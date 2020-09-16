import faker from 'faker';

const dataRegisterPage = {
  header: 'Create an account',
};
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password();

const RegisterData = {
  firstName,
  lastName,
  email,
  password,
  phone: '1234567890',
};

export { dataRegisterPage, RegisterData };
