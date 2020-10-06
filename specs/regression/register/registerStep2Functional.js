import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import {functionalRegisterStep2} from '../../../testData/register.testData';

describe('REGISTER PAGE STEP-2 FUNCTIONAL', function() {
  beforeEach(() => {
    RegisterStep2Page.open();
  });

  it('Should Country field can not be empty', function() {
    expect(RegisterStep2Page.countryCurrent.getText().length).not.eq(0);
  });

  it('Verify that Country field is clickable', function() {
    expect(RegisterStep2Page.countryCurrent.isClickable()).true;
  });

  it('Verify that Country can be selected',function() {
    RegisterStep2Page.countryCurrent.click();
    for (let i = 0; i < 6; i++)
      browser.keys('ArrowUp');
    browser.keys("Enter");
    expect(RegisterStep2Page.countryCurrent.getText()).eq(functionalRegisterStep2.countryFieldRussia);
  });

  it('Verify that Country code matches Country name', function() {
    RegisterStep2Page.countryCurrent.click();
    for (let i = 0; i < 6; i++)
      browser.keys('ArrowUp');
    browser.keys("Enter");
    expect(RegisterStep2Page.phoneNumberPrefix.getText()).eq(functionalRegisterStep2.countryCodeRussia);
  });

  it('Should Submit button be disabled by default', function () {
    expect(RegisterStep2Page.SubmitBtn.isClickable()).false;
  });

  it('Verify that Phone Number field can accept correct min number',function() {
    RegisterStep2Page.phoneNumber.setValue(functionalRegisterStep2.validPhoneNumberMin);
    expect(RegisterStep2Page.SubmitBtn.isClickable()).true;
  });

  it('Verify that Phone Number field can accept correct max number',function() {
    RegisterStep2Page.phoneNumber.setValue(functionalRegisterStep2.validPhoneNumberMax);
    expect(RegisterStep2Page.SubmitBtn.isClickable()).true;
  });

  it('Verify that Skip button is clickable', function() {
    expect(RegisterStep2Page.skipBtn.isClickable()).true;
  });
})
