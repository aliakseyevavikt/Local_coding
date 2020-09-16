import axios from 'axios';
const host = 'https://server-stage.pasv.us';

export function userLogin(resBody) {
  return axios
    .post(`${host}/user/login`, resBody)
    .then(res => {
      return {
        token: res.data.token,
        userId: res.data.userId,
        userRole: res.data.user.roles,
      };
    })
    .catch(err => console.log(err));
}