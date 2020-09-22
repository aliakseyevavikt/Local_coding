import DailyReportsPage from '../../../pageObjects/dailyReports.page';
import user from '../../../testData/userRoles';
import LoginPage from '../../../pageObjects/login.page';
//import { textProfile } from '../../data/profile.data';
import randomData from '../../data/daily.data';
import { textHome } from '../../data/home.data';

describe('DAILY REPORT CREATED', () => {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
  });

  it('should Create daily report', function () {
    DailyReportsPage.createRandomDayReport();
    expect(DailyReportsPage.lastDailyReportText.getText()).eq(randomData.text);
  });
});
