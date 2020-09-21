import HomePage from '../../../pageObjects/home.page';
import LoginPage from '../../../pageObjects/login.page';
import RegisterPage from '../../../pageObjects/register.page';
import expected from '../../data/expecteResaltUserLogin';

describe('', () => {
  before(() => {
    HomePage.open();
  });

  it('TCS-001 - Verify that Register link open Register Page', function() {
    HomePage.registerBtn.click();
    expect(RegisterPage.headerRegister.getText()).eq(expected.registration.header);
  });

  it('TCS-002 - verify that Login Link open Login Page', function() {
    HomePage.loginBtn.click();
    expect(LoginPage.header.getText()).contains(expected.login.header);
  });

});
