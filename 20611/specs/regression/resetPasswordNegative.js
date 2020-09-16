import { user } from '../testData/users';
import ResetPasswordPage from '../../../pageObjects/resetPassword.page';
const resetPassword = require('../testData/expected.json').resetPassword;
const testData = require('../testData/expected.json');

describe('Reset Password Negative ', () => {
  before(() => {
    ResetPasswordPage.open();
  });

  it('TC-032 Email input requires "@" and "." are required ', function () {
    ResetPasswordPage.email.setValue(user.incorrectEmail);
    expect(ResetPasswordPage.requiredText.getText()).eq(resetPassword.errorMessage);
  });

  it('TC-033 "Required" will appear under "Reset Password" field', function () {
    ResetPasswordPage.email.click();
    for (let i = 0; i < user.incorrectEmail.length; i++) {
      browser.keys('Back space');
    }
    expect(ResetPasswordPage.requiredText.getText()).eq(resetPassword.required);
  });

  it('TC-036 Send password reset link button is disabled until the Email field has valid data', function () {
    expect(ResetPasswordPage.submitBtn.isEnabled());
  });
});
