const passwordSettingsInputs = {
  passwordNew: '123ABc',
  passwordMin: 'A1.2z',
  passwordDigits: '1234567890',
  passwordLetters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  passwordSpecialChars: '.,/!@#$%^&*()_+}{[]"|\\\'',
  passwordEmpty: '',
};

const passwordSettingsNegative = {
  oldWrongPassword: 'xwz124',
  oldCorrectPassword: '963smile',
  newPassword: 'smile963',
  confirmNewWrongPassword: 'smile96',
  newSmallPassword: '1234',

}

export { passwordSettingsInputs, passwordSettingsNegative };
