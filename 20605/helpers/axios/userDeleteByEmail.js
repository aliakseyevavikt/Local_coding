import axios from 'axios';
let host = 'https://server-stage.pasv.us';

export const userDeleteByEmail = async (userEmail) => {
  return axios({
    method: 'delete',
    url: `${host}/user/email/${userEmail}`,
    headers: {
      Authorization: process.env.ADMIN_TOKEN,
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data);
};