import LoginPage from '../../../pageObjects/login.page';
import { student } from '../../../testData/user';
import DailyReportsPage from '../../../pageObjects/dailyReports.page';
import { notificationText, textRandom } from '../../data/dailyReportData';
import ProfilePage from '../../../pageObjects/profile.page';

describe('CREATE DAILY REPORT', () => {
  before(() => {
    LoginPage.open();
    LoginPage.login(student.email, student.password);
  });

  it('should create daily report', () => {
    ProfilePage.createDayReportBtn.click();
    DailyReportsPage.checkbox.map(el => el.click());
    DailyReportsPage.inputMoral.click();
    DailyReportsPage.selectContentMoraleAndHours[3].click();
    DailyReportsPage.inputHours.click();
    DailyReportsPage.selectContentMoraleAndHours[16].click();
    DailyReportsPage.howWasYourDayInput.setValue(textRandom);
    DailyReportsPage.submitBtn.click();
    browser.waitUntil( () => DailyReportsPage.notificationMessage.getText() === notificationText);
    expect(DailyReportsPage.notificationMessage.getText() === notificationText);
  });
});
