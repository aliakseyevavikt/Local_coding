import faker from 'faker';

const email = faker.internet.email();
const userNew = {
  email,
  password: '123123',
  firstName: 'test',
  lastName: 'testovich',
  phone: '1234567890',
  headerName: 'test testovich'
};

const headers = {
  headerRegister : 'Create an account',
  headerStep2Page: 'Dear test testovich!\nPlease complete these fields',
}

const dataRegression = {
  textParagraf: 'Already have an account? Just click Log in.',
  readTerms : 'I have readTerms and agreements',
  firstName: 'First Name',
  lastName : 'Last Name',
  email: 'Email',
  password: 'Password',
  headerStep2: 'Dear !\nPlease complete these fields',
  homeLinkText: 'Local Coding',
  submitText: 'Submit',
  countryText: 'Country',
  countryInput : 'United States',
  phoneText: 'Phone',
  phoneInput: 'phone number',
  phonePrefix: '+1',
  skipText: 'Skip'

}


module.exports = {headers, userNew, dataRegression};