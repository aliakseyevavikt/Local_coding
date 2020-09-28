import axios from 'axios';
import users from '../../testData/userRoles';
const host = 'https://server-stage.pasv.us';

export const userDelete = async userEmail => {
  const response = await axios.post(`${host}/user/login`, {
    email: users.admin.email,
    password: users.admin.password,
  });
  const token = response.data.token;

  return axios({
    method: 'delete',
    url: `${host}/user/email/${userEmail}`,
    headers: {
      Authorization: token,
    },
  })
    .then(res => res.data) //true
    .catch(err => err.response.data); //false
};

/* to call the function in your tests After hook should be added similar to below

  after('Should delete a user', async () => {
  const res = await userDelete(userEmail); //where userEmail is the email of the user you want to delete
  expect(res.success).eq(true);
  });

 */
