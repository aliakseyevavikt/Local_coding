const email = Math.random().toFixed(6) + '@gmail.com';
const emailRegStep2 = Math.random().toFixed(6) + '@gmail.com';

const data = {
  firstName: 'Test',
  lastName: 'Test',
  email,
  emailRegStep2,
  password: 'abc123',
  phone: '9165957372'
};
const registerDataStep2 = {
  header: 'Dear !\n' +
    'Please complete these fields',
  country :'United States',
  countryLabel: 'Country',
  phoneLabel: 'Phone',
  phoneCodeByDefault:'+1',
  placeholderText:'phone number',
  submitBtnText:'Submit',
  skipBtnText:'Skip'
};
export {data, registerDataStep2};
