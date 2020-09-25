const axios = require('axios');
import RegisterPage from '../../../pageObjects/register.page';
import { userGetByEmail, loginNewUser } from '../../../helpers/axios/apiFunctions';
const host = 'https://server-stage.pasv.us';
import user from '../../data/fakerData';

before(() => {
  RegisterPage.open();
  RegisterPage.registerUser(user.tempUser);
});

describe('LOGIN', () => {
  it('Login new user', async () => {
    const newUser = await loginNewUser(user.tempUser.email, user.tempUser.password);
    console.log(process.env.USERNEW_TOKEN);
    console.log(process.env.USERNEW_ID);
    expect(newUser.success).true;
  });

  it('API check the new user', async () => {
    const user = await userGetByEmail(user.tempUser);
    console.log(user);
    expect(user.payload.name).eq(`${user.tempUser.firstName} ${user.tempUser.lastName}`);
  });
});
