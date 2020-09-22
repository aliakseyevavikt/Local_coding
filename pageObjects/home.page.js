import BasePage from './Base.page';

class HomePage extends BasePage {
  get header() {
    return $('h1');
  }

  get registerBtn() {
    return $('[data-qa="register"]');
  }

  get loginBtn() {
    return $('[data-qa="login"]');
  }

  get image() {
    return $('img');
  }

  open() {
    super.open('/');
  }
}
export default new HomePage();
