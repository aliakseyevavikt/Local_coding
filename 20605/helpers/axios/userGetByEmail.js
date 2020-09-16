import axios from 'axios';
const host = 'https://server-stage.pasv.us';

export const getUserByEmail = async (userEmail) => {
  return axios({
    method: 'get',
    url: `${host}/user/email/${userEmail}`,
    headers: {
      Authorization: process.env.ADMIN_TOKEN,
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data)
};
