import LoginPage from "../../../pageObjects/login.page";
import ResetPasswordPage from "../../../pageObjects/resetPassword.page";
import {student} from "../../../testData/userRoles";

describe('RESET PASSWORD', () => {
  before( () => {
    LoginPage.open();
    LoginPage.resetLink.click();
  });

  it('should type in new email', () => {
    ResetPasswordPage.email.setValue(student.email);
    ResetPasswordPage.submitBtn.click();
    expect(ResetPasswordPage.errorMessage.isDisplayed()).eq(false);
  });
});