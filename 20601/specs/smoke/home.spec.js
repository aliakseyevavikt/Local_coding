import HomePage from '../../../pageObjects/home.page';
import LoginPage from '../../../pageObjects/login.page';
import RegisterPage from '../../../pageObjects/register.page';
import expected from '../../data/expected.json';

describe('', () => {
  before(() => {
    HomePage.open();
  });

  it('verify that Register link open Register Page', function () {
    HomePage.registerBtn.click();
    expect(RegisterPage.headerRegister.getText()).eq(expected.pagesHeaders.RegisterPageHeader);
  });

  it('verify that Login Link open Login Page', function () {
    HomePage.loginBtn.click();
    expect(LoginPage.header.getText()).contains(expected.pagesHeaders.LoginHeader);
  });
});
