import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import {registerNew} from '../../testData/register_new';
import ProfilePage from '../../../pageObjects/profile.page';
before(() => {
  RegisterPage.open();
  browser.maximizeWindow();
});
describe('REGISTER NEW USER POSITIVE skip second page',function() {
  it('TC-02 Register New User ', function() {
    RegisterPage.registerUser(registerNew);
    expect(RegisterStep2Page.headerRegisterStep2.getText()).include('Dear ' + registerNew.firstName + ' ' + registerNew.lastName + '!');
  });
  it('Register New User Second Page Skip',function() {
    RegisterStep2Page.skipBtn.click();
    expect(ProfilePage.headerProfile.getText()).include(registerNew.firstName + ' ' + registerNew.lastName);
  });
});
