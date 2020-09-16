import BasePage from './../pageObjects/Base.page';

class RegisterStep2Page extends BasePage {
  get headerRegisterStep2() {
    return $('h5');
  }

  get openDropdown() {
    return $('.ant-select.ant-select-lg.ant-select-single.ant-select-show-arrow');
  }

  get countryDropdown() {
    return $$('.ant-select-item-option-content')[2];
  }

  get countryOptions() {
    return $$('.ant-select-item-option-content');
  }

  get countryCurrent() {
    return $('.ant-select-selection-item');
  }

  get phoneNumber() {
    return $('#user_login_phone');
  }

  get phoneNumberPrefix() {
    return $('.ant-input-prefix');
  }

  get SubmitBtn() {
    return $('.ant-btn.ant-btn-primary.ant-btn-lg');
  }

  get title() {
    return $('.ant-drawer-title');
  }

  get skipBtn() {
    return $('//span[text()="Skip"]');
  }

  get closeBtn() {
    return $('.ant-drawer-close');
  }

  get countryLabel() {
    return $('label[for="user_login_countryName"]');
  }

  get phoneLabel() {
    return $('label[for="user_login_phone"]');
  }

  get errorMessages() {
    return $$('.ant-form-item-explain');
  }

  get popupDrawer() {
    return $('.ant-drawer-open');
  }

  registerUserStep2(data) {
    // this.openDropdown.click();
    // this.countryDropdown.click();
    this.phoneNumber.setValue(data.phone);
    this.SubmitBtn.click();
  }

  selectCountry2DigitPrefix() {
    while (this.phoneNumberPrefix.getText().length !== 3) {
      const l = 11;
      const n = Math.floor(Math.random() * l);
      this.openDropdown.click();
      this.countryOptions[n].click();
    }
  }

  selectCountry3DigitPrefix() {
    while (this.phoneNumberPrefix.getText().length !== 4) {
      const l = 11;
      const n = Math.floor(Math.random() * l);
      this.openDropdown.click();
      this.countryOptions[n].click();
    }
  }

  open(path) {
    return super.open('user/register-step2');
  }
}
export default new RegisterStep2Page();
