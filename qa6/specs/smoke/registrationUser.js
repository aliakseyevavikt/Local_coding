import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import expected from '../../../20610/data/expected.json';
import { newUser } from '../../helpers/faker';
import ProfilePage from '../../../pageObjects/profile.page';
import { userDelete } from '../../../helpers/axios/deleteNewUserByAxios';

before(() => {
  RegisterPage.open();
});

describe('NEW USER REGISTER', () => {
  it('UR02 should register new user', () => {
    RegisterPage.registerUser(newUser);
    RegisterStep2Page.registerUserStep2(newUser);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.new);
    expect(ProfilePage.getLoginConfirmation()).eq(`${newUser.firstName} ${newUser.lastName}`);
  });
});

after('Should delete a user', async () => {
  const res = await userDelete(newUser.email);
   expect(res.success).eq(true);
});
