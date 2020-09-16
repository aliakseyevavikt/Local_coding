import BasePage from '../pageObjects/Base.page';
import RegistrationPage from '../pageObjects/register.page';
import LoginPage from '../pageObjects/login.page';

class ResetPasswordPage extends BasePage {
  get resetHeader() {
    return $('h1');
  }

  get email() {
    return $('#user_password_reset_email');
  }

  get submitBtn() {
    return $('button');
  }

  get loginLink() {
    return $('a[href="/user/login"]');
  }

  get registerLink() {
    return $('a[href="/user/register"]');
  }

  get errorMessage() {
    return $('.ant-notification-notice-message');
  }

  requestLinkToResetPassword(email) {
    this.email.setValue(email);
    this.submitBtn.click();
  }

  invalidRequest(email) {
    this.requestLinkToResetPassword(email);
    return this.errorMessage.getText();
  }

  goToRegisterPage() {
    this.registerLink.click();
    return RegistrationPage;
  }

  goToLoginPage() {
    this.loginLink.click();
    return LoginPage;
  }

  get requiredText() {
    return $('.ant-form-item-explain');
  }

  open(path) {
    super.open('/user/password/reset');
  }
}
export default new ResetPasswordPage();
