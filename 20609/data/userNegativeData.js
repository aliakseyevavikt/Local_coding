const userNegativeData = {
    emailOneLetter: 'a',
    email30Symbols: 'aaaaa@aaaaa.aaaaaaaaaaaaaaaaaa',
    incorrectEmail: 'admin@qa6.usasdfghjkl',
    password30Symbols: '123456789012345678901234567890',
    emailWrong: 'wrong@email.com',
    passwordWrong: 'wrongPassword',
    invalidPassword: '1111',
    firstNameInvalid:  '!@#$%^^/-',
    oneLetterInvalidName: 'a'
};

const invalidFirstNameData = ['Henry1111', 'aaaaaaaaaaaaaaaaaaaaa', '111111','     ', '!@#$%^^/-', 'Henry Henry'];
const invalidLastNameData = ['222222', 'White2222', 'bbbbbbbbbbbbbbbbbbb', '          ', '!@#$%^^/-', 'White White'];
const invalidEmailData = ['#@%^%#$@#$@#.com', '@example.com', 'email.@example.com', 'あいうえお@example.com', 'email@111.222.333.44444', 'Abc..123@example.com'];

const userStep2NegativeData = {
    invalidPhoneNumber: '1',
    symbolsInvalidPhoneNumber: "$$$$$$$$$$$"
}
export {userNegativeData, invalidFirstNameData, invalidLastNameData, invalidEmailData, userStep2NegativeData};

