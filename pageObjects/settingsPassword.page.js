import BasePage from './Base.page';

class SettingsPasswordPage extends BasePage {
  get passwordTab() {
    return $('//li[text()="Password"]');
  }

  get oldPasswordInput() {
    return $('#oldPassword');
  }

  get newPasswordInput() {
    return $('#newPassword');
  }

  get confirmNewPasswordInput() {
    return $('#confirmPassword');
  }

  get updatePasswordButton() {
    return $('.ant-btn');
  }

  get oldPasswordEyeIcon() {
    return $$('.ant-input-suffix')[0];
  }

  get newPasswordEyeIcon() {
    return $$('.ant-input-suffix')[1];
  }

  get confirmNewPasswordEyeIcon() {
    return $$('.ant-input-suffix')[2];
  }

  get oldPasswordLabel() {
    return $('[for="oldPassword"]');
  }

  get newPasswordLabel() {
    return $('[for="newPassword"]');
  }

  get confirmNewPasswordLabel() {
    return $('[for="confirmPassword"]');
  }

  get errorMsgPasswordNotMatch() {
    return $('.ant-alert-message');
  }

  get popUpWrongOldPwrd() {
    return $('.ant-notification-notice-message');
  }

  get popUpWrongOldPwrdClose() {
    return $('.anticon-close');
  }

  open(userId) {
    super.open(`settings/${userId}/password`);
  }

  updatePassword(password, newPassword) {
    this.oldPasswordInput.setValue(password);
    this.newPasswordInput.setValue(newPassword);
    this.confirmNewPasswordInput.setValue(newPassword);
    this.updatePasswordButton.click();
  }

  updatePasswordNegative(password, newPassword, confirmNewPassword) {
    this.oldPasswordInput.setValue(password);
    this.newPasswordInput.setValue(newPassword);
    this.confirmNewPasswordInput.setValue(confirmNewPassword);
  }
}

export default new SettingsPasswordPage();
