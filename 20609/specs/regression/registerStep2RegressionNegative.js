import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import RegisterPage from '../../../pageObjects/register.page';
import { userStep2NegativeData } from '../../data/userNegativeData';
import { errorMessagesSRegisterStep2Page } from '../../data/errorMessages';

describe(' USER REGISTER STEP 2 - NEGATIVE', () => {
  describe('', () => {
    RegisterStep2Page.open();
  });

  it('TC-054 should Submit button be disabled by default', () => {
    expect(RegisterStep2Page.SubmitBtn.isEnabled()).eq(false);
  });

  it('TC-055 should Phone Number field display an error message when entering incorrect number of digits ', () => {
    RegisterStep2Page.phoneNumber.setValue(userStep2NegativeData.invalidPhoneNumber);
    browser.waitUntil(() => RegisterPage.inputFieldErrorMessages[0].isDisplayed());
  });

  /* The test will be comment before solve issue (TLC-394)
  it('TC-056 should check that is displayed the correct error message when invalid data is entered into the Phone field', () => {
    RegisterStep2Page.phoneNumber.setValue(userStep2NegativeData.invalidPhoneNumber);
    expect(RegisterPage.inputFieldErrorMessages[0].getText()).eq(errorMessagesSRegisterStep2Page.invalidPhoneNumErrorMessage);
  });
*/

  it('TC-057 should check that the button stays disabled when invalid data is entered into the Phone field', () => {
    RegisterStep2Page.phoneNumber.setValue(userStep2NegativeData.invalidPhoneNumber);
    RegisterStep2Page.SubmitBtn.click();
    expect(RegisterStep2Page.SubmitBtn.isEnabled()).eq(false);
  });

  it('TC-058 should check that the correct error message "This entry must only contain numbers" is displayed when symbols are entered into the Phone field', () => {
    browser.refresh();
    RegisterStep2Page.phoneNumber.setValue(userStep2NegativeData.symbolsInvalidPhoneNumber);
    browser.waitUntil(
      () => RegisterPage.inputFieldErrorMessages[0].getText() === errorMessagesSRegisterStep2Page.symbolPhoneNumberErrorMessage,
    );
  });
});
