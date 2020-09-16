const uppercaseLowercaseLetters = {
  email: 'ABCabc@example.com',
  password: 'ABCabc',
};

const anyNumbers = {
  email: '0123456789@example.com',
  password: '0123456789',
};

const anySymbols = {
  email: '#!$%&’*+-/=?^_`{}|~@example.com',
  password: '#!$%&’*+-/=?^_`{}|~',
};

const incorrectInput = {
  email: 'vasya@mailru',
  email2: 'vasya@mail.ru',
  email3: 'vasyamail.ru',
  password: '111222333',
};

export { uppercaseLowercaseLetters, anyNumbers, anySymbols, incorrectInput };
