import BasePage from '../pageObjects/Base.page';
import ProfilePage from '../pageObjects/profile.page';
import RegistrationPage from '../pageObjects/register.page';
import ResetPasswordPage from './resetPassword.page';

class LoginPage extends BasePage {
  get headerLogin() {
    return $('h1');
  }

  get siteName(){
    return $('.site-name');
  }

  get inputUsername() {
    return $('#normal_login_email');
  }

  get mailIcon() {
    return $('.anticon-mail');
  }

  get inputPassword() {
    return $('#normal_login_password');
  }

  get lockIcon() {
    return $('.anticon-lock');
  }

  get loginBtn() {
    return $('button[type="submit"]');
  }

  get loginGoogleBtn() {
    return $('.firebaseui-idp-google');
  }

  get loginFacebookBtn() {
    return $('.firebaseui-idp-facebook');
  }

  get registerLink() {
    return $('a[href="/user/register"]');
  }

  get resetLink() {
    return $('a[href="/user/password/reset"]');
  }

  get errorMessage() {
    return $('.ant-notification-notice');
  }

  get errorMessageCloseBtn() {
    return $('.ant-notification-notice-close');
  }

  get errorMessageRedCircle() {
    return $('.anticon-close-circle');
  }

  get txtCreateOne() {
    return $$('//div[@class="ant-form-item-control-input-content"]/p')[0];
  }

  get txtResetIt() {
    return $$('//div[@class="ant-form-item-control-input-content"]/p')[1];
  }

  get txtEmailNotValid() {
    return $('//div[@class="ant-form-item-explain"]/div');
  }


  open() {
    return super.open('user/login');
  }

  login(username, password) {
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.loginBtn.click();
  }

  validLogin(username, password) {
    this.login(username, password);
    return ProfilePage;
  }

  invalidLogin(username, password) {
    this.login(username, password);
    return LoginPage;
  }

  getLogoutConfirmation() {
    return this.headerLogin.getText();
  }

  closeMessage() {
    this.errorMessageCloseBtn.click();
  }

  goToRegisterPage() {
    this.registerLink.click();
    return RegistrationPage;
  }

  goToResetPasswordPage() {
    this.resetLink.click();
    return ResetPasswordPage;
  }
}

export default new LoginPage();
