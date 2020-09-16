import axios from 'axios';
let host = 'https://server-stage.pasv.us';
const roles = {
  student: {
    email: 'newtest@qa4.us',
    password: '123456',
  },
  learner: {
    email: 'newtest@qa4.us',
    password: '123456',
  },
}

const apiLogin =  (role) => axios.post(`${host}/user/login`, {
  email: roles[role].email,
  password: roles[role].password,
})
  .catch(err => {
   console.log(err)
  //return err
})
export default apiLogin;
