import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/userRoles';
import AdminSearchForUsers from '../../../pageObjects/adminSearchForUsers';
import {clearValue} from '../../../helpers/clearValue';

describe('ADMIN USER SEARCH', () => {
  before('Before', () => {
    LoginPage.open();
    browser.maximizeWindow();
    LoginPage.login(user.admin.email, user.admin.password);
    browser.waitUntil(() => AdminSearchForUsers.adminTopLink.isDisplayed() === true, {
      timeoutMsg: 'Admin TopLink is not displayed after login'
    })
    AdminSearchForUsers.searchForUsers();
  });

  it('Admin should be able to search a user by email', function() {
    AdminSearchForUsers.searchByEmailField.click();
    AdminSearchForUsers.searchByEmailField.setValue(user.learner.email);
    browser.waitUntil(() => AdminSearchForUsers.linkToUserProfile.isDisplayed() === true, {
      timeoutMsg: 'linkToUserProfile is not displayed when searching by email'
    });
    expect(AdminSearchForUsers.linkToUserProfile.getText()).eq(user.learner.firstName + ' ' + user.learner.lastName);
    clearValue(AdminSearchForUsers.searchByEmailField);
  });

  it('Admin should be able to search a user by name', function() {
    AdminSearchForUsers.searchByNameField.click();
    AdminSearchForUsers.searchByNameField.setValue(user.learner.firstName);
    browser.waitUntil(() => AdminSearchForUsers.linkToUserProfile.isDisplayed() === true, {
      timeoutMsg: 'linkToUserProfile is not displayed when searching by name'
    });
    expect(AdminSearchForUsers.linkToUserProfile.getText()).eq(user.learner.firstName + ' ' + user.learner.lastName);
    clearValue(AdminSearchForUsers.searchByNameField);
  });

  it('Admin should be able to search a user by phone', function() {
    AdminSearchForUsers.searchByPhoneField.click();
    AdminSearchForUsers.searchByPhoneField.setValue(user.learner.phone);
    browser.waitUntil(() => AdminSearchForUsers.linkToUserProfile.isDisplayed() === true, {
      timeoutMsg: 'linkToUserProfile is not displayed when searching by phone'
    });
    expect(AdminSearchForUsers.linkToUserProfile.getText()).eq(user.learner.firstName + ' ' + user.learner.lastName);
    clearValue(AdminSearchForUsers.searchByPhoneField);
  });

  it('Admin should be able to get only users of a certain role when searching a user by a role', function() {
    AdminSearchForUsers.allInputFields[4].click();
    AdminSearchForUsers.arraysOfRoles[1].click();
    expect(AdminSearchForUsers.roleLabelText.getText()).eq(user.learner.password);
  });
});
