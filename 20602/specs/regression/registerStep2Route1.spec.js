import HomePage from '../../../pageObjects/home.page';
import RegisterPage from '../../../pageObjects/register.page';
import user from '../../data/users';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import expected from '../../data/expected.json';
import { userDelete } from '../../../helpers/deleteNewUserByAxios';
import waitTime from '../../../testData/waitTimes';

before(() => {
  HomePage.open();
  HomePage.registerLink.click();
  RegisterPage.registerUser(user);
});

describe('Register step-2 elements', () => {
  it(`TC-008-001 Verify that homepage link is clickable`, function () {
    expect(RegisterStep2Page.homePageLink.isClickable()).true;
  });

  it(`TC-008-002 Verify that header is displayed`, function () {
    expect(RegisterStep2Page.headerRegisterStep2.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });

  it(`TC-008-003 Verify that header has right text`, function () {
    expect(RegisterStep2Page.headerRegisterStep2.getText()).eq(
      `Dear ${user.firstName} ${user.lastName}!\nPlease complete these fields`,
    );
  });

  it(`TC-008-004 Verify that country label is displayed`, function () {
    expect(RegisterStep2Page.countryLabel.isDisplayed()).true;
  });

  it(`TC-008-005 Verify that country label reads "Country"`, function () {
    expect(RegisterStep2Page.countryLabel.getText()).eq(expected.registerStep2Data.countryLabel);
  });

  it(`TC-008-006 Verify that phone label is displayed`, function () {
    expect(RegisterStep2Page.phoneLabel.isDisplayed()).true;
  });

  it('TC-008-007 Verify that phone label reads "Phone"', function () {
    expect(RegisterStep2Page.phoneLabel.getText()).eq(expected.registerStep2Data.phoneLabel);
  });

  it('TC-008-008 Verify that country dropdown is displayed', function () {
    expect(RegisterStep2Page.openDropdown.isDisplayed()).true;
  });

  it('TC-008-009 Verify that country dropdown set by default: "United States"', function () {
    expect(RegisterStep2Page.openDropdown.getText()).eq(expected.registerStep2Data.countryDropDown);
  });

  it('TC-008-010 Verify that phone placeholder is displayed', function () {
    expect(RegisterStep2Page.phoneNumber.isDisplayed()).true;
  });

  it('TC-008-011 Verify that phone placeholder reads "phone number"', function() {
    expect(RegisterStep2Page.phoneNumber.getAttribute('placeholder')).eq(expected.registerStep2Data.phonePlaceHolder);
  });

  it('TC-008-013 Verify that phone prefix by default is "+1"', function() {
    expect(RegisterStep2Page.phoneNumberPrefix.getText()).eq(expected.registerStep2Data.phoneNumberPrefix);
  });

  it('TC-008-038 Verify that Submit button is disabled by default', function() {
    expect(RegisterStep2Page.SubmitBtn.isEnabled()).false;
  });
  it('TC-008-039 Verify that Submit button is enabled when user entered valid data', function() {
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone10);
    expect(RegisterStep2Page.SubmitBtn.isEnabled());
  });

  it('TC-008-044 Verify that "Skip" link is enable by default', function() {
    browser.refresh();
    expect(RegisterStep2Page.skipBtn.isEnabled()).true;
  });

  it('TC-008-042 Verify that "Skip" link is displayed', function() {
    expect(RegisterStep2Page.skipBtn.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM })).true;
  });

  it('TC-008-043 Verify that "Skip" link has text "Skip"', function() {
    expect(RegisterStep2Page.skipBtn.getText()).eq(expected.registerStep2Data.skipText);
  });
});

describe('Phone prefix - phone number length', () => {
  it('TC-008-016 Verify that if phone prefix is 1 digit phone input field accepts 10 digits ', function() {
    browser.refresh();
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone10);
    expect(RegisterStep2Page.SubmitBtn.isEnabled()).true;
  });

  it('TC-008-017 Verify that if phone prefix is 1 digit phone input field accepts 11 digits ', function() {
    browser.refresh();
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone11);
    expect(RegisterStep2Page.SubmitBtn.isEnabled()).true;
  });

  it('TC-008-018 Verify that if phone prefix is 2 digit phone input field accepts 9 digits ', function() {
    browser.refresh();
    RegisterStep2Page.selectCountry2DigitPrefix();
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone9);
    expect(RegisterStep2Page.SubmitBtn.isEnabled()).true;
  });

  it('TC-008-019 Verify that if phone prefix is 2 digit phone input field accepts 10 digits ', function() {
    browser.refresh();
    RegisterStep2Page.selectCountry2DigitPrefix();
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone10);
    expect(RegisterStep2Page.SubmitBtn.isEnabled()).true;
  });

  it('TC-008-020 Verify that if phone prefix is 3 digit phone input field accepts 8 digits ', function() {
    browser.refresh();
    RegisterStep2Page.selectCountry3DigitPrefix();
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone8);
    expect(RegisterStep2Page.SubmitBtn.isEnabled()).true;
  });

  it('TC-008-021 Verify that if phone prefix is 3 digit phone input field accepts 9 digits ', function() {
    browser.refresh();
    RegisterStep2Page.selectCountry3DigitPrefix();
    RegisterStep2Page.phoneNumber.setValue(expected.registerStep2Data.phone9);
    expect(RegisterStep2Page.SubmitBtn.isEnabled()).true;
  });
});

after('Should delete a user', async () => {
  const res = await userDelete(user.email);
  expect(res.success).eq(true);
});
