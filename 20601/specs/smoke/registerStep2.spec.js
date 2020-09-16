import RegisterStep2Page from '../../../pageObjects/register.page';
import ProfilePage from '../../../pageObjects/profile.page';
import RegisterPage from '../../../pageObjects/register.page';
import newUser from '../../data/fakerData';

describe('USER REGISTER STEP2', () => {
  before(() => {
    RegisterStep2Page.open();
  });

  it('should populate fields and submit form', () => {
    RegisterPage.open();
    RegisterPage.registerUser(newUser);
    RegisterStep2Page.registerUserStep2(newUser);
    expect((ProfilePage.headerProfile).getText()).eq(newUser.firstName + ' ' + newUser.lastName);
  });

  xit('should skip the Registration Step2 and open Main Page', function () {
    RegisterStep2Page.open();
    RegisterStep2Page.skipBtn.click();
    expect(ProfilePage.headerProfile.getText()).contains(newUser.firstName);
  });
});


