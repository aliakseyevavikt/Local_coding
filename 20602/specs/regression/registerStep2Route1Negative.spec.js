import HomePage from '../../../pageObjects/home.page';
import RegisterPage from '../../../pageObjects/register.page';
import user from '../../../testData/userFake';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import expected from '../../data/expected.json';
import { userDelete } from '../../../helpers/axios/deleteNewUserByAxios';
import waitTime from '../../../testData/waitTimes';

before(() => {
  HomePage.open();
  HomePage.registerBtn.click();
  RegisterPage.registerUser(user);
});

describe('Values behavior negative', () => {
  it('TC-008-022 Verify that if phone prefix is 1 digit and user enters less than 10 digits error appears', function () {
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone9);
    expect(RegisterStep2Page.errorMessages[0].waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });

  it('TC-008-023 Verify that if phone prefix is 1 digit and user enters less than 10 digits error  “Number should be min 10 and max 11 digits with a code” appears', function () {
    expect(RegisterStep2Page.errorMessages[0].getText()).eq(expected.registerStep2Data.errorPhone1011);
  });

  it('TC-008-024 Verify that if phone prefix is 1 digit and user enters more than 11 digits error appears', function () {
    browser.refresh();
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone12);
    expect(RegisterStep2Page.errorMessages[0].waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });

  it('TC-008-025 Verify that if phone prefix is 1 digit and user enters more than 11 digits error  “Number should be min 10 and max 11 digits with a code” appears', function () {
    expect(RegisterStep2Page.errorMessages[0].getText()).eq(expected.registerStep2Data.errorPhone1011);
  });

  it('TC-008-026 Verify that if phone prefix is 2 digit and user enters less than 9 digits error appears', function () {
    browser.refresh();
    RegisterStep2Page.selectCountry2DigitPrefix();
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone8);
    expect(RegisterStep2Page.errorMessages[0].waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });

  it('TC-008-027 Verify that if phone prefix is 2 digit and user enters less than 9 digits error  “Number should be min 10 and max 11 digits with a code” appears', function () {
    expect(RegisterStep2Page.errorMessages[0].getText()).eq(expected.registerStep2Data.errorPhone910);
  });

  it('TC-008-028 Verify that if phone prefix is 2 digit and user enters more than 10 digits error appears', function () {
    browser.refresh();
    RegisterStep2Page.selectCountry2DigitPrefix();
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone11);
    expect(RegisterStep2Page.errorMessages[0].waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });

  it('TC-008-029 Verify that if phone prefix is 2 digit and user enters more than 10 digits error  “Number should be min 10 and max 11 digits with a code” appears', function () {
    expect(RegisterStep2Page.errorMessages[0].getText()).eq(expected.registerStep2Data.errorPhone910);
  });

  it('TC-008-030 Verify that if phone prefix is 3 digit and user enters less than 8 digits error appears', function () {
    browser.refresh();
    RegisterStep2Page.selectCountry3DigitPrefix();
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone7);
    expect(RegisterStep2Page.errorMessages[0].waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });

  it('TC-008-031 Verify that if phone prefix is 3 digit and user enters less than 8 digits error  “Number should be min 10 and max 11 digits with a code” appears', function () {
    expect(RegisterStep2Page.errorMessages[0].getText()).eq(expected.registerStep2Data.errorPhone89);
  });

  it('TC-008-032 Verify that if phone prefix is 3 digit and user enters more than 9 digits error appears', function () {
    browser.refresh();
    RegisterStep2Page.selectCountry3DigitPrefix();
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone10);
    expect(RegisterStep2Page.errorMessages[0].waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });

  it('TC-008-033 Verify that if phone prefix is 3 digit and user enters more than 9 digits error  “Number should be min 10 and max 11 digits with a code” appears', function () {
    expect(RegisterStep2Page.errorMessages[0].getText()).eq(expected.registerStep2Data.errorPhone89);
  });

  it('TC-008-034 Verify that if user enters letters in phone input field error appears', function () {
    browser.refresh();
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phoneABC);
    expect(RegisterStep2Page.errorMessages[0].waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });

  it('TC-008-035 Verify that if user enters letters in phone input field error "This entry must only contain numbers" appears', function () {
    expect(RegisterStep2Page.errorMessages[0].getText()).contains(expected.registerStep2Data.errorABC);
  });

  it('TC-008-036 Verify that if user enters special characters in phone input field error appears', function () {
    browser.refresh();
    RegisterStep2Page.phoneNumber.click();
    browser.keys(expected.registerStep2Data.phoneSC);
    expect(RegisterStep2Page.errorMessages[0].waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });

  it('TC-008-037 Verify that if user enters special characters in phone input field error "This entry must only contain numbers" appears', function () {
    expect(RegisterStep2Page.errorMessages[0].getText()).contains(expected.registerStep2Data.errorABC);
  });
});

after('Should delete a user', async () => {
  const res = await userDelete(user.email);
  expect(res.success).eq(true);
});
