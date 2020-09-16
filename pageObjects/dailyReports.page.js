import BasePage from './Base.page';
import randomData from '../20601/data/daily.data';

class DailyReportsPage extends BasePage {
  get createDayReportBtn() {
    return $('.mb-1rem');
  }

  get checkbox() {
    return $$('.ant-checkbox-input');
  }

  get iUnderstoodEverythingCheckbox() {
    return $('[value="understood_everything"]');
  }

  get helpedClassMatesCheckbox() {
    return $('[value="help_classmates"]');
  }

  get watchedLecturesCheckbox() {
    return $('[value="watch_lessons"]');
  }

  get inputMoral() {
    return $('#morale');
  }

  get selectContentMoraleAndHours() {
    return $$('.ant-select-item.ant-select-item-option'); //one selector for both fields
  }

  get selectedContentMoraleAndHours() {
    return $$('.ant-select-selection-item');
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

  get newDailyReportCreatedText () {
    return $('.ant-row.mb-4')
  }

  get dailyReportTag() {
    return $$('.ant-tag');
  }

  get notificationMessage() {
    return $('.ant-notification-topRight');
  }

  createRandomDayReport() {
    this.createDayReportBtn.click();
    this.checkbox[randomData.checkbox].click(); // click on random checkboxes
    this.inputMoral.click();
    this.selectContentMoraleAndHours[randomData.moraleSelectorIndex].click(); // click on random morale
    this.inputHours.click();
    this.selectContentMoraleAndHours[randomData.hoursSelectorIndex].click(); // click on random hours
    this.howWasYourDayInput.setValue(randomData.text); // creating  random  text for daily report
    this.submitBtn.click();
  }
}
export default new DailyReportsPage();
