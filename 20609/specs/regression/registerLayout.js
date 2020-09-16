import RegisterPage from '../../../pageObjects/register.page';
import { headers } from '../../data/registerData';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import { dataRegression } from '../../data/registerData';

describe('USER REGISTER step 1', () => {
  before(() => {
    RegisterPage.open();
  });

  it('TC-009 should have header ', () => {
    expect(RegisterPage.headerRegister.getText()).eq(headers.headerRegister);
  });

  it('TC-010 should home link is clickable', () => {
    expect(RegisterPage.homePageLink.isClickable()).true;
  });

  it('TC-011 should agreement check box is present', () => {
    expect((RegisterPage.agreementLabel).isDisplayed()).true;
  });

  it('TC-012 should agreement check box is clickable', () => {
    expect((RegisterPage.agreementLabel).isClickable()).true;
  });

  it('TC-013 should agreement check box have correct text', () => {
    expect((RegisterPage.agreementLabel).getText()).eq(dataRegression.readTerms);
  });

  it('TC-014 should agreement check box is enabled', () => {
    expect(RegisterPage.agreementCheckBox.isEnabled()).true;
  });

  it('TC-015 should  register btn is not clickable', () => {
    expect(RegisterPage.registerBtn.isClickable()).false;
  });

  it('TC-016 should login link is clickable', () => {
    expect(RegisterPage.loginLink.isClickable()).true;
  });

  it('TC-017 should login link have correct text', () => {
    expect((RegisterPage.promptLabel).getText()).eq(dataRegression.textParagraf);
  });

  it('TC-018 should  input first  name is present', () => {
    expect(RegisterPage.firstNameInput.isDisplayed()).true;
  });

  it('TC-019 should input first name has correct text"', () => {
    expect(RegisterPage.firstNameInput.getAttribute('placeholder')).eq(dataRegression.firstName);
  });

  it('TC-020 should input last name is present', () => {
    expect(RegisterPage.lastNameInput.isDisplayed()).true;
  });

  it('TC-021 should input last name has correct text', () => {
    expect(RegisterPage.lastNameInput.getAttribute('placeholder')).eq(dataRegression.lastName);
  });

  it('should input email is present', () => {
    expect(RegisterPage.email.isDisplayed()).true;
  });

  it('TC-022 should input email has correct text"', () => {
    expect(RegisterPage.email.getAttribute('placeholder')).eq(dataRegression.email);
  });

  it('TC-023 should input password is present', () => {
    expect(RegisterPage.password.isDisplayed()).true;
  });

  it('TC-024 should input password has correct text"', () => {
    expect(RegisterPage.password.getAttribute('placeholder')).eq(dataRegression.password);
  });

  it('TC-025 should hide password icon is present', () => {
    expect(RegisterPage.lockIcon.isDisplayed()).true;
  });

  it('TC-026 should hide password icon is clickable"', () => {
    expect(RegisterPage.lockIcon.isClickable()).true;
  });
});

describe('USER REGISTER STEP 2', () => {
  before(() => {
    RegisterStep2Page.open();
  });

  it('TC-027 should have correct title', () => {
    expect(RegisterStep2Page.headerRegisterStep2.getText()).eq(dataRegression.headerStep2);
  });

  it('TC-028 should home link is clickable', () => {
    expect(RegisterStep2Page.homePageLink.isClickable()).true;
  });

  it('TC-029 should home link has correct text', () => {
    expect(RegisterStep2Page.homePageLink.getText()).eq(dataRegression.homeLinkText);
  });

  it('TC-030 should submit button is not clickable', () => {
    expect(RegisterStep2Page.SubmitBtn.isClickable()).false;
  });

  it('TC-031 should submit button has correct text', () => {
    expect(RegisterStep2Page.SubmitBtn.getText()).eq(dataRegression.submitText);
  });

  it('TC-032 should country label present', () => {
    expect(RegisterStep2Page.countryLabel.isDisplayed()).true;
  });

  it('TC-033 should country label has correct text', () => {
    expect(RegisterStep2Page.countryLabel.getText()).eq(dataRegression.countryText);
  });

  it('TC-034 should have drop down list countries', () => {
    expect(RegisterStep2Page.openDropdown.isDisplayed()).true;
  });

  it('TC-035 should have correct country by default', () => {
    expect((RegisterStep2Page.countryCurrent).getAttribute('title')).eq(dataRegression.countryInput);
  });

  it('TC-036 should phone label present', () => {
    expect(RegisterStep2Page.phoneLabel.isDisplayed()).true;
  });

  it('TC-037 should phone label has correct text', () => {
    expect(RegisterStep2Page.phoneLabel.getText()).eq(dataRegression.phoneText);
  });

  it('TC-038 should input field  present', () => {
    expect(RegisterStep2Page.phoneNumber.isDisplayed()).true;
  });

  it('TC-039 should input field has correct text', () => {
    expect(RegisterStep2Page.phoneNumber.getAttribute('placeholder')).eq(dataRegression.phoneInput);
  });

  it('TC-040 should have prefix number by default', () => {
    expect($('.ant-input-prefix').getText()).eq(dataRegression.phonePrefix);
  });

  it('TC-041 should skip btn is displayed', () => {
    expect(RegisterStep2Page.skipBtn.isDisplayed()).true;
  });

  it('TC-042 should skip btn is clickable', () => {
    expect(RegisterStep2Page.skipBtn.isClickable()).true;
  });

  it('TC-043 should skip btn has correct text', () => {
    expect(RegisterStep2Page.skipBtn.getText()).eq(dataRegression.skipText);
  });
});
