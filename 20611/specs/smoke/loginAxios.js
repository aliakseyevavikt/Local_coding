import axios from 'axios';
import { fakerUser } from '../testData/faker';

let host = 'https://server-stage.pasv.us';
let tokenAdmin = '';
let idAdmin = '';
let tokenUser = '';
let idUser = '';
let oldRoleUser = '';

describe('', () => {
  it('login admin', async function () {
    const response = await axios.post(`${host}/user/login`, {
      email: 'admin@qa6.us',
      password: 'admin',
    });
    tokenAdmin = response.data.token;
    idAdmin = response.data.userId;
  });

  it('Register New User by Axios', async function () {
    const response = await axios.post(`${host}/user`, {
      email: fakerUser.email,
      password: fakerUser.password,
      firstName: fakerUser.firstName,
      lastName: fakerUser.lastName,
      phone: fakerUser.phone,
      about: '123123',
      goals: '123123',
      englishLevel: 'Pre-Intermediate',
      countryName: 'Belarus',
    });
    console.log(response);
    console.log(response.config.data);
    console.log(response.config.data.password);
    expect(response.data.message).eq('User created successfully. Please check your email and verify it');
  });

  it('login user by axios', async function () {
    const response = await axios.post(`${host}/user/login`, {
      email: fakerUser.email,
      password: fakerUser.password,
    });
    tokenUser = response.data.token;
    idUser = response.data.userId;
    oldRoleUser = response.data.user.roles[0];
  });
  it('User Update Role By Id', async function () {
    const response = await axios.patch(
      `${host}/user/${idUser}`,
      { roles: ['learner'] },
      { headers: { Authorization: tokenAdmin } },
    );
  });
});
