import HomePage from '../../../pageObjects/home.page';
import RegisterPage from '../../../pageObjects/register.page';
import { header, text } from '../testData/expected.json';
import LoginPage from '../../../pageObjects/login.page';

describe('', () => {
  before(() => {
    HomePage.open();
  });

  it('TC-001 Check: Register link open Register Page', function () {
    HomePage.registerBtn.click();
    expect(RegisterPage.headerRegister.getText()).eq(header.headerRegister);
  });

  it('TC-002 Check: Login Link open Login Page', function () {
    HomePage.loginBtn.click();
    expect(LoginPage.header.getText()).contains(text.headerText);
  });
});
