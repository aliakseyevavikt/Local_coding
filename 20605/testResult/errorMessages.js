const errorMessagesRegistration = {
    userNotCreatedError: 'User was not created',
    invalidEmailError: '\'email\' is not a valid email',
    emailExistsError: 'User with this e-mail exists',
    wrongPasswordError: 'Wrong password format',
};

const errorMessagesRegisterStep2 = {
    invalidPhoneNumErrorMessage1: "Phone number mast be min: 10 and max: 11 numbers",
    invalidPhoneNumberErrorMessage2: "This entry must only contain numbers"
};

const errorMsgPasswordSettings = {
    newMismatchPassword: 'New passwords do not match.',
    wrongOldPassword: 'User settings update password. Error'
}

export {errorMessagesRegistration, errorMessagesRegisterStep2, errorMsgPasswordSettings};
