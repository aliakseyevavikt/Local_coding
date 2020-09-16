import axios from 'axios';

let host = 'https://server-stage.pasv.us';

export const userGetById = async (userId) => {
  return axios({
    method: 'get',
    url: `${host}/user/${userId}`,
    headers: {
      Authorization: process.env.ADMIN_TOKEN,
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data);

};
