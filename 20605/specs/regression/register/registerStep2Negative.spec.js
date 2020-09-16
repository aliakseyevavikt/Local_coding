import RegisterStep2Page from '../../../../pageObjects/registerStep2.page';
import {negativeRegisterStep2} from '../../../testData/register';
import {errorMessagesRegisterStep2} from '../../../testResult/errorMessages';
// import waitTime from '../../../testData/waitTimes';

describe('REGISTRATION PAGE 2 (NEGATIVE)', function () {
    beforeEach(() => {
        RegisterStep2Page.open();
    });

    it('TC-127 should Phone Number field can not accept incorrect number (min number) of digits and an error message display', function () {
        RegisterStep2Page.phoneNumber.setValue(negativeRegisterStep2.invalidPhoneNumberMin);
        // RegisterStep2Page.errorMessages[0].waitForDisplayed({timeout: waitTime.WAIT_TIME_MEDIUM});
        browser.waitUntil(() => RegisterStep2Page.errorMessages[0].isDisplayed());
        expect(RegisterStep2Page.errorMessages[0].getText()).eq(errorMessagesRegisterStep2.invalidPhoneNumErrorMessage1);
    });

    it('TC-128 should Phone Number field can not accept incorrect number (max numbers) of digits and an error message display', function () {
        RegisterStep2Page.phoneNumber.setValue(negativeRegisterStep2.invalidPhoneNumberMax);
        // RegisterStep2Page.errorMessages[0].waitForDisplayed({timeout: waitTime.WAIT_TIME_MEDIUM});
        browser.waitUntil(() => RegisterStep2Page.errorMessages[0].isDisplayed());
        expect(RegisterStep2Page.errorMessages[0].getText()).eq(errorMessagesRegisterStep2.invalidPhoneNumErrorMessage1);
    });

    it('TC-129 should Phone Number field can not accept symbols and an error message display', function () {
        RegisterStep2Page.phoneNumber.setValue(negativeRegisterStep2.symbolsInvalidPhoneNumber);
        // RegisterStep2Page.errorMessages[0].waitForDisplayed({timeout: waitTime.WAIT_TIME_MEDIUM});
        browser.waitUntil(() => RegisterStep2Page.errorMessages[0].isDisplayed());
        expect(RegisterStep2Page.errorMessages[0].getText()).eq(errorMessagesRegisterStep2.invalidPhoneNumberErrorMessage2);
    });

    it('TC-130 should Phone Number field can not accept Upper letters and an error message display', function () {
        RegisterStep2Page.phoneNumber.setValue(negativeRegisterStep2.lettersUppInvalidPhoneNumber);
        // RegisterStep2Page.errorMessages[0].waitForDisplayed({timeout: waitTime.WAIT_TIME_MEDIUM});
        browser.waitUntil(() => RegisterStep2Page.errorMessages[0].isDisplayed());
        expect(RegisterStep2Page.errorMessages[0].getText()).eq(errorMessagesRegisterStep2.invalidPhoneNumberErrorMessage2 + '\n' + errorMessagesRegisterStep2.invalidPhoneNumErrorMessage1);
    });

    it('TC-131 should Phone Number field can not accept Lower letters and an error message display', function () {
        RegisterStep2Page.phoneNumber.setValue(negativeRegisterStep2.lettersLowerInvalidPhoneNumber);
        // RegisterStep2Page.errorMessages[0].waitForDisplayed({timeout: waitTime.WAIT_TIME_MEDIUM});
        browser.waitUntil(() => RegisterStep2Page.errorMessages[0].isDisplayed());
        expect(RegisterStep2Page.errorMessages[0].getText()).eq(errorMessagesRegisterStep2.invalidPhoneNumberErrorMessage2);
    });

    it('TC-132 should Phone Number field can not accept "Back space" and an error message display', function () {
        RegisterStep2Page.phoneNumber.setValue(negativeRegisterStep2.invalidPhoneNumberBackSpace);
        // RegisterStep2Page.errorMessages[0].waitForDisplayed({timeout: waitTime.WAIT_TIME_MEDIUM});
        browser.waitUntil(() => RegisterStep2Page.errorMessages[0].isDisplayed());
        expect(RegisterStep2Page.errorMessages[0].getText()).eq(errorMessagesRegisterStep2.invalidPhoneNumberErrorMessage2);
    });

    it('TC-133 should Phone Number field can not be empty', function () {
        RegisterStep2Page.phoneNumber.setValue(negativeRegisterStep2.invalidPhoneNumberEmpty);
        expect(RegisterStep2Page.SubmitBtn.isClickable()).false;
    });
});
