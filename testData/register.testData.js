import faker from 'faker';

const newUser = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email().toLowerCase(),
  password: faker.internet.password(),
  phone: faker.phone.phoneNumber('###########') //11
};

const negativeRegisterStep1 = {
  invalidName: ['123', 'aa aa', 'a!#$%', `${'a'.repeat(21)}`],
  oneLetter: 'a',
  invalidEmail1: ['newqa6.us', 'new@qa6us', 'n@ew@qa6.us', 'new@q,a6.us', 'new@qa6.us%', '@qa6.us'],
  invalidPassword: '12',
};

const inputRegisterStep1 = {
  firstLastNameMin: 'A',
  firstLastNameMax: `${'a'.repeat(20)}`,
  firstLastName3: 'a\'sssa-',
  email: 'Asdfgh@mail.us',
  password: 'Azxcvb@123'
}

const negativeRegisterStep2 = {
  invalidPhoneNumberMin: `${'5'.repeat(9)}`,
  invalidPhoneNumberMax: `${'5'.repeat(12)}`,
  symbolsInvalidPhoneNumber: `${'#'.repeat(10)}`,
  lettersUppInvalidPhoneNumber: `${'C'.repeat(12)}`,
  lettersLowerInvalidPhoneNumber: `${'a'.repeat(10)}`,
  invalidPhoneNumberBackSpace: `${' '.repeat(10)}`,
  invalidPhoneNumberEmpty: ''
};

const functionalRegisterStep2 = {
  validPhoneNumberMin:  `${'7'.repeat(10)}`,
  validPhoneNumberMax:  `${'7'.repeat(11)}`,
  countryFieldRussia: 'Russia',
  countryCodeRussia: '+7'
}
export {newUser, inputRegisterStep1, negativeRegisterStep1, negativeRegisterStep2, functionalRegisterStep2}
