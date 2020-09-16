import { expect } from 'chai';
import { dataRegisterPage, RegisterData } from '../../data/DataPage';
import RegisterPage from '../../../pageObjects/register.page';
import RegisterPageStep2 from '../../../pageObjects/registerStep2.page';

describe('USER REGISTER', () => {
  before(() => {
    RegisterPage.open();
  });

  it('check header', () => {
    expect(RegisterPage.headerRegister.getText()).eq(dataRegisterPage.header);
  });

  it('register user', function () {
    RegisterPage.registerUser(RegisterData);
    RegisterPageStep2.registerUserStep2(RegisterData);
    expect($('h1').getText()).eq(RegisterData.firstName + ' ' + RegisterData.lastName);
  });
});
