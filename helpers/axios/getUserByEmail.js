import axios from 'axios';
import users from '../../testData/userRoles';
let host = 'https://server-stage.pasv.us';

export const getUserByEmail = async (userEmail) => {
  const response = await axios.post(`${host}/user/login`, {
    email: users.admin.email,
    password: users.admin.password,
  });
  const token = response.data.token;

  return axios({
    method: 'get',
    url: `${host}/user/email/${userEmail}`,
    headers: {
      Authorization: token,
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data)
};

/*
  it('TC-008-041 Verify that if user clicks "Submit" they will be added to the Database', async () => {
    const res = await getUserByEmail(user.email);
    console.log(res);
    expect(res.success).eq(true);
  });
 */
