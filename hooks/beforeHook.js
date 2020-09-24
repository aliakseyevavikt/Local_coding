const axios = require('axios');
const users = require('../testData/userRoles');
const host = 'https://server-stage.pasv.us';

async function beforeHook() {
  const user = await axios({
    method: 'post',
    url: `${host}/user/login`,
    data: {
      email: `${users.admin.email}`,
      password: `${users.admin.password}`,
    },
  })
    .then(res => res.data)
    .catch(err => err.response.data);
  process.env.ADMIN_TOKEN = user.token; //We create variable for ALL folders "environment variable"
  process.env.ADMIN_ID = user.userId;
}

module.exports = beforeHook;
