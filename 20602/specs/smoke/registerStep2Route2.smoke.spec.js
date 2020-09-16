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
  HomePage.registerLink.click();
  RegisterPage.registerUser(user);
});

describe('Register step-2 route-2', () => {
  it('TC-008-045 Verify that if user clicks "Skip" link they will be redirected to their Dashboard', function () {
    RegisterStep2Page.skipBtn.click();
    expect(ProfilePage.headerProfile.getText()).eq(user.firstName + ' ' + user.lastName);
  });

  it('TC-008-046 Verify that if user clicks "Skip" link their will be added to the Database', async () => {
    const res = await getUserByEmail(user.email);
    expect(res.success).eq(true);
  });


});

after('Should delete a user', async () => {
  const res = await userDelete(user.email);
  expect(res.success).eq(true);
});
