import DailyReportsPage from '../../pageObjects/dailyReports.page';
import LoginPage from '../../pageObjects/login.page';
import user from '../../testData/userRoles';
import { dailyReportTestData } from '../../testData/dailyReport.testData';

describe('DAILY REPORTS FUNCTIONALITY', function() {
  beforeEach(() => {
    LoginPage.open();
  });

  it('Daily report can be created by learner(Created daily report contains text created by learner)', function() {
    LoginPage.login(user.learner.email, user.learner.password);
    DailyReportsPage.createDailyReport(dailyReportTestData.moraleSelectorIndexMax, dailyReportTestData.hoursSelectorIndexMax, dailyReportTestData.dailyReportText);
    expect(DailyReportsPage.newDailyReportCreatedText.getText()).eq(dailyReportTestData.dailyReportText);
  });

  it('Daily report can be created by student', function() {
    LoginPage.login(user.student.email, user.student.password);
    DailyReportsPage.createDailyReport(dailyReportTestData.moraleSelectorIndexMax, dailyReportTestData.hoursSelectorIndexMax, dailyReportTestData.dailyReportText);
    expect(DailyReportsPage.newDailyReportCreatedText.getText()).eq(dailyReportTestData.dailyReportText);
  });
});
