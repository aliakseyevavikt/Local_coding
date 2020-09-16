import { headers, userNew } from '../../data/registerData';
import RegisterPage from '../../../pageObjects/register.page';
import RegisterPageStep2 from '../../../pageObjects/registerStep2.page';
import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
describe('register new user', () => {
  before(() => {
    RegisterPage.open();
  });

  it('TC-001 should check header', () => {
    expect(RegisterPage.headerRegister.getText()).eq(headers.headerRegister);
  });

  it('TC-002 step 1 should fill out fields and click submit btn', () => {
    RegisterPage.registerUser(userNew);
    browser.waitUntil(() => RegisterPageStep2.headerRegisterStep2.getText() === headers.headerStep2Page);
  });

  it('TC-003 step 2 should fill out phone field and click submit btn ', () => {
    RegisterPageStep2.registerUserStep2(userNew);
    browser.waitUntil(() => ProfilePage.headerProfile.getText() === userNew.headerName);
  });

  it('TC-004 should login new user', () => {
    LoginPage.open();
    LoginPage.login(userNew.email, userNew.password);
    browser.waitUntil(() => ProfilePage.headerProfile.getText() === userNew.headerName);
  });
});
