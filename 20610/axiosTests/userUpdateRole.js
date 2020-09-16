import axios from 'axios';
const host = 'https://server-stage.pasv.us';

export function userUpdateRole(token, userId, roleName) {
  return axios({
    method: 'patch',
    url: `${host}/user/${userId}`,
    headers: {
      Authorization: token,
    },
    data: [roleName],
  })
    .then(res => res)
    .catch(err => console.log(err));
}