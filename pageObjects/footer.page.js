import BasePage from './../pageObjects/Base.page';

class FooterPage extends BasePage {
  get footer() {
    return $('[class="mt-auto mb-15rem"]');
  }

  get contactUs() {
    return $('//footer/a[@href="/contact"]');
  }

  get termsOfService() {
    return $('//footer/a[@href="/terms"]');
  }

  get privacyPolicy() {
    return $('//footer/a[@href="/privacy"]');
  }

  navToContactUs() {
    this.contactUs.click();
  }

  navToTermsOfService() {
    this.termsOfService.click();
  }

  navToPrivacyPolicy() {
    this.privacyPolicy.click();
  }

  open(path) {
    return super.open('https://stage.localcoding.us/');
  }
}

export default new FooterPage();
