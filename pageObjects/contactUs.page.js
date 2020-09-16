import BasePage from './../pageObjects/Base.page';

class ContactUsPage extends BasePage {
  get headerContactUs() {
    return $('h1');
  }

  get homePgLink() {
    return $('.site-name');
  }

  get loginLink() {
    return $('[href="/user/login"]');
  }

  get registerLink() {
    return $('[href="/user/register"]');
  }

  get nameInputFld() {
    return $('#normal_login_name');
  }

  get emailInputFld() {
    return $('#normal_login_email');
  }

  get phoneInputFld() {
    return $('#normal_login_phone');
  }

  get messageInputFld() {
    return $('#normal_login_message');
  }

  get submitBtn() {
    return $('.ant-btn.login-form-button.ant-btn-primary');
  }

  get resetBtn() {
    return $('.ant-btn.ml-2');
  }

  get contactUsLink() {
    return $('[href="/contact"]');
  }

  get termsLink() {
    return $('[href="/terms"]');
  }

  get privacyLink() {
    return $('[href="/privacy"]');
  }

  get nameRequiredTxt() {
    return $$('.ant-form-item-explain')[0];
  }

  get emailRequiredTxt() {
    return $$('.ant-form-item-explain')[1];
  }

  get phoneRequiredTxt() {
    return $$('.ant-form-item-explain')[2];
  }

  get h1TermPolicy() {
    return $('h1');
  }

  get paragraphText() {
    return $('p');
  }

  get confirmationText() {
    return $('.alert.alert-success.mt-4');
  }

  open() {
    return super.open('/contact');
  }
}

export default new ContactUsPage();
