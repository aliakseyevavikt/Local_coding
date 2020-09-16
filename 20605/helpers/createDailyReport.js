import DailyReportsPage from '../../pageObjects/dailyReports.page';
import { dailyReport } from '../testData/dailyReport';

export function createDailyRep(moraleLevel, hoursNumber, reportText) {
  DailyReportsPage.createDayReportBtn.click();
  browser.waitUntil(() => DailyReportsPage.checkbox[0].isExisting());
  for (let i = 0; i < DailyReportsPage.checkbox.length; i++) {
    DailyReportsPage.checkbox[i].click();
  }
  DailyReportsPage.inputMoral.click();
  DailyReportsPage.selectContentMoraleAndHours[moraleLevel].scrollIntoView();
  DailyReportsPage.selectContentMoraleAndHours[moraleLevel].click();
  DailyReportsPage.inputHours.click();
  DailyReportsPage.selectContentMoraleAndHours[hoursNumber].scrollIntoView();
  DailyReportsPage.selectContentMoraleAndHours[hoursNumber].click();
  DailyReportsPage.howWasYourDayInput.setValue(reportText);
  DailyReportsPage.submitBtn.click();
  browser.waitUntil(() => DailyReportsPage.notificationMessage.getText() === dailyReport.notificationMessageText);
}
