import HomePage from '../../../pageObjects/home.page';
import RegisterPage from '../../../pageObjects/register.page';
import user from '../../data/users';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import expected from '../../data/expected.json';
import { userDelete } from '../../../helpers/deleteNewUserByAxios';
import ProfilePage from '../../../pageObjects/profile.page';
import { getUserByEmail } from '../../helpers/getUserByEmail';

before(() => {
  HomePage.open();
  HomePage.registerBtn.click();
  RegisterPage.registerUser(user);
});

describe('Register step-2 route-1', () => {
  it('TC-008-014 Verify that user can change country', function () {
    RegisterStep2Page.selectCountry2DigitPrefix();
    expect(RegisterStep2Page.openDropdown.getText()).not.eq(expected.registerStep2Data.changeCountry);
  });

  it('TC-008-015 Verify that if user changes country phone prefix changes automatically', function () {
    browser.refresh();
    RegisterStep2Page.selectCountry2DigitPrefix();
    expect(RegisterStep2Page.phoneNumberPrefix.getText().length).eq(expected.registerStep2Data.changePrefix);
  });

  it('TC-008-040 Verify that if user clicks "Submit" their will be redirected to their Dashboard', function () {
    browser.refresh();
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone10);
    RegisterStep2Page.SubmitBtn.click();
    expect(ProfilePage.headerProfile.getText()).eq(user.firstName + ' ' + user.lastName);
  });

  it('TC-008-041 Verify that if user clicks "Submit" they will be added to the Database', async () => {
    const res = await getUserByEmail(user.email);
    expect(res.success).eq(true);
  });
});

after('Should delete a user', async () => {
  const res = await userDelete(user.email);
  expect(res.success).eq(true);
});
