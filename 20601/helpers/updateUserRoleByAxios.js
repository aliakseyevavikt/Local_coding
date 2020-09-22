import axios from 'axios';
import { userDelete } from '../../helpers/deleteNewUserByAxios';
let host = 'https://server-stage.pasv.us';
let tokenAdmin = '';
let idAdmin = '';
let tokenUser = '';
let idUser = '';
let roleUser = '';
import user from '../../testData/userRoles';
//import user from '../../20601/data/fakerData';
import apiLogin from './apiRequests';

describe('', () => {
  it('should login as Admin', async function () {
    const response = await axios.post(`${host}/user/login`, {
      email: user.admin.email,
      password: user.admin.password,
    });
    tokenAdmin = response.data.token;
    idAdmin = response.data.userId;
  });

  it('should register new user', async function () {
    const response = await axios.post(`${host}/user`, {
      email: 'newtest@qa4.us', // 'users.fakerUser.email' after refactor user>users from fakerData(in Master)
      password: '123456',
      firstName: 'NewFirst',
      lastName: 'NewLast',
      phone: '17775551121',
      about: 'QA Engineer',
      goals: 'no goals',
      englishLevel: 'Advanced',
      countryName: 'USA',
    });
  });

  ['student', 'learner'].forEach(el => {


    it('should new user login', async function() {
      const response = await apiLogin(el);

      console.log(response)

      tokenUser = response.data.token;
      idUser = response.data.userId;
      roleUser = response.data.user.roles;

      expect(tokenUser).to.be.a('string')
      expect(tokenUser).to.have.lengthOf.above(30);
    });

  })
  it('should Update User role for new User to Learner', async function () {
    const response = await axios.patch(
      `${host}/user/${idUser}`,
      {
        roles: ['learner'],
      },
      {
        headers: {
          Authorization: `${tokenAdmin}`,
        },
      },
    );

    it('learner user login new role', async function () {
      const response = await axios.post(`${host}/user/login`, {
        email: 'newtest@qa4.us',
        password: '123456',
      });
      roleUser = response.data.user.roles;
    });
  });
});

after('Should delete user', async () => {
  const res = await userDelete('newtest@qa4.us');
  expect(res.success).eq(true);
});
