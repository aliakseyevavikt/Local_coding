import HomePage from '../../../pageObjects/home.page';
import LoginPage from '../../../pageObjects/login.page';
import RegisterPage from '../../../pageObjects/register.page';
import expected from '../../data/expected.json';

describe('CHECK the HOME PAGE LINKS', () => {

  before(() => {
    HomePage.open();
  });

  it('HP01 Verify that Register link open Register Page',  () => {
    HomePage.registerBtn.click();
    expect(RegisterPage.headerRegister.getText()).eq(expected.pagesHeaders.RegisterPageHeader);
  });

  it('HP02 Verify that Login Link open Login Page', () => {
    HomePage.loginBtn.click();
    expect(LoginPage.header.getText()).contains(expected.pagesHeaders.LoginHeader);
  });
});
