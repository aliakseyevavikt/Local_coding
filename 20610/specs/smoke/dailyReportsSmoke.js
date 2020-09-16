import DailyReportsPage from '../../../pageObjects/dailyReports.page';
import { newUser } from '../../../20610/data/fakeData';
import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import user from '../../../testData/user';
let res = null;
import axios from 'axios';
const host = 'https://server-stage.pasv.us';
let adminToken = '';
let adminId = '';
let userToken = '';
let userMyId = '';

before(() => {
  LoginPage.open();
  LoginPage.login(user.learner.email, user.learner.password);
});

describe('DAILY REPORT SMOKE', () => {
  it('DR01 A DAILY REPORT CAN BE SUCCESSFULLY CREATED', () => {
    res = DailyReportsPage.reportQty.getText();
    DailyReportsPage.createDayReportBtn.click();
    for (let i = 0; i < DailyReportsPage.checkbox.length; i++) {
      DailyReportsPage.checkbox[i].click();
    }
    DailyReportsPage.inputMoral.click();
    DailyReportsPage.selectContentMoraleAndHours[newUser.index1].click();
    DailyReportsPage.inputHours.click();
    browser.pause(3000);
    DailyReportsPage.selectContentMoraleAndHours[20].scrollIntoView();
    DailyReportsPage.selectContentMoraleAndHours[20].click();
    DailyReportsPage.howWasYourDayInput.click();
    DailyReportsPage.howWasYourDayInput.setValue(newUser.message);
    DailyReportsPage.submitBtn.click();
    browser.waitUntil(() => DailyReportsPage.newDailyReportCreatedText.getText() === newUser.message);
    expect(+DailyReportsPage.reportQty.getText()).eq(+res + 1);
    ProfilePage.logout();
  });
});
describe('AXIOS', () => {
  it('Should login as admin to get admin token', async function () {
    const response = await axios.post(`${host}/user/login`, {
      email: user.admin.email,
      password: user.admin.password,
    });
    adminToken = response.data.token;
    adminId = response.data.userId;
  });

  it('Should login as learner to get learner ID', async () => {
    const response = await axios.post(`${host}/user/login`, {
      email: user.learner.email,
      password: user.learner.password,
    });
    userToken = response.data.token;
    userMyId = response.data.userId;
    expect(response.status).eq(200);
  });

  it('Should check this user daily reports', async () => {
    const response = await axios.get(`${host}/diary/user/${userMyId}`, {
      headers: {
        Authorization: adminToken,
      },
    });
    expect(response.status).eq(200);
    expect(response.data[0].description).eq(newUser.message);
  });
});
