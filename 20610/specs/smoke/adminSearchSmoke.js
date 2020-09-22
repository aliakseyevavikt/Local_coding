import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/userRoles';
import AdminSearchForUsers from '../../../pageObjects/adminSearchForUsers';
import clearInputValue from '../../../helpers/clearValueMethod';

describe('ADMIN USER SEARCH', () => {
  before('Before', () => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    AdminSearchForUsers.usersTopLink.click();
  });

  it('ASU01 Admin should be able to search a user by email', () => {
    AdminSearchForUsers.searchByEmailField.click();
    AdminSearchForUsers.searchByEmailField.setValue(user.learner.email);
    browser.waitUntil(() => AdminSearchForUsers.linkToUserProfile.isDisplayed() === true);
    expect(AdminSearchForUsers.linkToUserProfile.getText()).eq(user.learner.firstName + ' ' + user.learner.lastName);
    clearInputValue(AdminSearchForUsers.searchByEmailField);
  });

  it('ASU02 Admin should be able to search a user by name', () => {
    AdminSearchForUsers.searchByNameField.click();
    AdminSearchForUsers.searchByNameField.setValue(user.learner.firstName);
    browser.waitUntil(() => AdminSearchForUsers.linkToUserProfile.isDisplayed() === true);
    expect(AdminSearchForUsers.linkToUserProfile.getText()).eq(user.learner.firstName + ' ' + user.learner.lastName);
    clearInputValue(AdminSearchForUsers.searchByNameField);
  });

  it('ASU03 Admin should be able to search a user by phone', () => {
    AdminSearchForUsers.searchByPhoneField.click();
    AdminSearchForUsers.searchByPhoneField.setValue(user.learner.phone);
    browser.waitUntil(() => AdminSearchForUsers.linkToUserProfile.isDisplayed() === true);
    expect(AdminSearchForUsers.linkToUserProfile.getText()).eq(user.learner.firstName + ' ' + user.learner.lastName);
    clearInputValue(AdminSearchForUsers.searchByPhoneField);
  });

  it('ASU04 Admin should be able to get only users of a certain role when searching a user by roles', () => {
    AdminSearchForUsers.allInputFields[4].click();
    AdminSearchForUsers.arraysOfRoles[1].click();
    expect(AdminSearchForUsers.roleLabelText.getText()).eq(user.learner.password);
  });
});
