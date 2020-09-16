import axios from 'axios';
const host = 'https://server-stage.pasv.us';

export function userRegister(resBody) {
  return axios
    .post(`${host}/user`, resBody)
    .then(res => res.status)
    .catch(err => console.log(err));
}