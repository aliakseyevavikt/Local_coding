import BasePage from './../pageObjects/Base.page';

class FooterPage extends BasePage {
  get footer() {
    return $('[data-qa="footer"]');
  }

  get contactUs() {
    return $('[data-qa="footerContactUs"]');
  }

  get termsOfService() {
    return $('[data-qa="footerTerms"]');
  }

  get privacyPolicy() {
    return $('[data-qa="footerPrivacy"]');
  }

  open(path) {
    return super.open('https://stage.localcoding.us/');
  }
}

export default new FooterPage();
