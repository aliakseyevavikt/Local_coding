import axios from 'axios';
import user from '../../testData/userRoles';
const host = 'https://server-stage.pasv.us';

export const userGetByEmail = email =>
  axios({
    method: 'get',
    url: `${host}/user/email/${email}`,
    headers: {
      Authorization: process.env.ADMIN_TOKEN,
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data);



export const loginNewUser = async (emailNew, passwordNew) =>
  axios ({
    method: 'post',
    url: `${host}/user/login`,
    data: {
      email: `${emailNew}`,
      password: `${passwordNew}`,
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data);
  process.env.USERNEW_TOKEN = loginNewUser.token;
  process.env.USERNEW_ID = loginNewUser.id;
  //We create variable for ALL folders "environment variable"
