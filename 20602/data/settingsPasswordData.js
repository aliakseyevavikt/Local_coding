const newRole = {
  email: 'new@us.com',
  oldPassword: 'newnew',
  newPassword: 'newPassword',
  confirmNewPassword: 'newPassword',
  newPasswordEmpty: '',
  confirmNewPasswordEmpty: '',
  oldPasswordEmpty: '',
  oldPasswordIncorrect: 'notCorrect',
  confirmNewPasswordIncorrect: 'notCorrect',
  firstName: 'NewFirstName',
  lastName: 'NewLastName',
  phone: '17775551122',
  about: '123123',
  goals: '123123',
  englishLevel: 'Pre-Intermediate',
  countryName: 'USA',
  id: '',
};

const admin = {
  email: 'adminpassword@us.com',
  oldPassword: 'admin',
  newPassword: 'newPassword',
  firstName: 'AdminFirstName',
  lastName: 'AdminLastName',
  phone: '17775551122',
  about: '123123',
  goals: '123123',
  englishLevel: 'Pre-Intermediate',
  countryName: 'USA',
  id: '',
};

const roles = {
  new: 'new',
  learner: 'learner',
  student: 'student',
  admin: 'admin',
};

export { newRole, admin, roles };
