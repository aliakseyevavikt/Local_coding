import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import LoginPage from '../../../pageObjects/login.page';
import expected from '../../data/expected.json';
import newUser from '../../data/fakerData';

describe('USER REGISTER', () => {
  before(() => {
    RegisterPage.open();
  });

  it('TC-03-001 Should verify header text', () => {
    expect(RegisterPage.headerRegister.getText()).eq(expected.pagesHeaders.RegisterPageHeader);
  });

  it('TC-03-002 Should populate fields and submit form', () => {
    RegisterPage.registerUser(newUser.fakerUser);
    expect(RegisterStep2Page.headerRegisterStep2.getText()).contains(expected.pagesHeaders.RegisterStep2PageHeader);
  });

  it('TC-03-003 Verify that Login Link redirect user from Register Page to Login Page', function () {
    RegisterPage.open();
    RegisterPage.loginLink.click();
    expect(LoginPage.header.getText()).contains(expected.pagesHeaders.LoginHeader);
  });
});
