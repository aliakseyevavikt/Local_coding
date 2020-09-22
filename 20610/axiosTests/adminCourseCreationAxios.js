import axios from 'axios';
import user from '../../testData/userRoles';
const host = 'https://server-stage.pasv.us';
let adminToken = '';
import { userLogin } from '../../20610/axiosTests/userLogin';
import { newUser } from '../../qa6/helpers/faker';
let courseId = '';

const accessType = {
  all: 'all',
  members: 'members',
};

export function adminCourseCreation(token, type) {
  return axios({
    method: 'post',
    url: `${host}/course`,
    headers: {
      Authorization: token,
    },
    data: {
      name: newUser.about,
      description: newUser.word,
      accessType: type,
    },
  })
    .then(res => res.data.payload.courseId) // res.data.payload.courseId = course ID, its' length = 24
    .catch(err => console.log(err));
}

export function findCourse(courseId, token) {
  return axios({
    method: 'get',
    url: `${host}/course/${courseId}`,
    headers: {
      Authorization: token,
    },
  });
}

describe('AXIOS', () => {
  it('Should login as admin to get admin token', async () => {
    const response = await userLogin(user.admin);
    adminToken = response.token;
  });

  for (let type in accessType) {
    it(`Admin should be able to create a course with accessType ${accessType[type]}`, async () => {
      const response = await adminCourseCreation(adminToken, accessType[type]);
      courseId = response;
      expect(response.length).eq(24);
    });
  }

  it('Admin should be able to find a course by course id', async () => {
    const response = await findCourse(courseId, adminToken);
    expect(response.status).eq(200);
    expect(response.data.payload.name).eq(newUser.about);
  });

  //deletion is not working on postman as well, not working as documentation suggested

  // it('Admin should be able to delete a course by course id', async () => {
  //   const response = await axios.delete(`${host}/course/${courseId}`, {
  //     headers: {
  //       Authorization: adminToken,
  //     },
  //   });
  //   expect(response.status).eq(200);
  // });
  //
  // it('Admin should not be able to find a course after it has been deleted', async () => {
  //   const response = await axios.get(`${host}/course/${courseId}`, {
  //     headers: {
  //       Authorization: adminToken,
  //     },
  //   });
  //   expect(response.status).eq(400);
  // });
});
