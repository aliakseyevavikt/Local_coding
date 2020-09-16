import { expect } from 'chai';
import LoginPage from './../../../pageObjects/login.page';
const user = require('./../../../testData/user');
import { RegisterData } from './../../data/DataPage';
import { WAIT_TIME_MEDIUM } from './../../../testData/waitTimes';

describe('LOGIN AS ADMIN NEGATIVE SCENARIO', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('should login as Admin', () => {
    LoginPage.invalidLogin(user.admin.email, RegisterData.password);
    LoginPage.errorMessageCloseBtn.waitForClickable({WAIT_TIME_MEDIUM});
    expect(LoginPage.errorMessageCloseBtn.isDisplayed()).true;
  });
});