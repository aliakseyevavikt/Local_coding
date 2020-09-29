import BasePage from './Base.page';
import { dailyReportTestData } from '../testData/dailyReport.testData';

class DailyReportsPage extends BasePage {
  get createDayReportBtn() {
    return $('.mb-1rem');
  }

  get checkbox() {
    return $$('.ant-checkbox-input');
  }

  get inputMoral() {
    return $('#morale');
  }

  get selectContentMoraleAndHours() {
    return $$('.ant-select-item.ant-select-item-option'); //one selector for both fields
  }

  get inputHours() {
    return $('#hours');
  }

  get howWasYourDayInput() {
    return $('#description');
  }

  get submitBtn() {
    return $('[type="submit"]');
  }

  get dailyReportsHeader() {
    return $('h3');
  }

  get lastDailyReportText() {
    return $('.ant-row.mb-4');
  }

  get reportQty() {
    return $('.small.ml-2');
  }

  get newDailyReportCreatedText() {
    return $('.ant-row.mb-4');
  }

  get dailyReportTag() {
    return $$('.ant-tag');
  }

  get notificationMessage() {
    return $('.ant-notification-topRight');
  }

  createDailyReport(moraleLevel, hoursNumber, reportText) {
    this.createDayReportBtn.click();
    browser.waitUntil(() => this.checkbox[0].isExisting());
    this.checkbox.map(el => el.click());
    this.inputMoral.click();
    this.selectContentMoraleAndHours[moraleLevel].scrollIntoView();
    this.selectContentMoraleAndHours[moraleLevel].click();
    this.inputHours.click();
    this.selectContentMoraleAndHours[hoursNumber].scrollIntoView();
    this.selectContentMoraleAndHours[hoursNumber].click();
    this.howWasYourDayInput.setValue(reportText);
    this.submitBtn.click();
    browser.waitUntil(() => this.notificationMessage.getText() === dailyReportTestData.notificationMessageText);
  }
}
export default new DailyReportsPage();
