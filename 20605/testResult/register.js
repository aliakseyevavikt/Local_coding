const registerPageTestResult = {
  header: 'Create an account',
  firstNamePlaceholder: 'First Name',
  lastNamePlaceholder: 'Last Name',
  phoneNumberPlaceholder: 'phone number',
  countryDefault: 'United States',
  submitBtn: 'Submit',
  skipBtn: 'Skip',
  countryLabel: 'Country',
  phoneLabel: 'Phone',
  email: 'Email',
  password: 'Password',
  termsAndAgreementsLink: 'Terms and agreements',
  agreementLabel: 'I have read',
  loginLink: 'Log in',
  registerBtn: 'Register',
  loginPromptLabel: 'Already have an account? Just click',
};
const expectedRegisterStep1 = {
  firstLastNameMin: 'A',
  firstLastNameMax: `${'a'.repeat(20)}`,
  firstLastName3: 'a\'sssa-',
  email: 'Asdfgh@mail.us',
  password: 'Azxcvb@123'
}

export { registerPageTestResult, expectedRegisterStep1 };
