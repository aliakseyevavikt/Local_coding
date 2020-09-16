import axios from 'axios';
let host = 'https://server-stage.pasv.us';

export const userUpdateRole = async (userEmail, userPassword, role) => {
  const resp = await axios.post(`${host}/user/login`, {
    email: `${userEmail}`,
    password: `${userPassword}`,
  });
  process.env.RANDOMUSER_ID = resp.data.userId

  return axios({
    method: 'patch',
    url: `${host}/user/${process.env.RANDOMUSER_ID}`,
    headers: {
      Authorization: process.env.ADMIN_TOKEN,
    },
    data: {
      roles: [`${role}`],
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data);
};

// to call the function in your tests After hook should be added similar to below.
// Before you need register user using faker or using yourself user (do not change role of Julia users).
// Example of using userUpdateRole in our folder smoke => settingsPassword.specs.smoke.js

// describe('', () => {
//   it('Should update role a user', async () => { // can be before, after, it
//   const res = await userUpdateRole('new@us.com', 'newnew', 'new'); //where userEmail is the email and password of the user you want change role, role is a string exp.: 'student'
//   expect(res.success).eq(true);
//   });
// })
