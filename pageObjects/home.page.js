import BasePage from './Base.page';

class HomePage extends BasePage {
  get registerLink() {
    return $('[href="/user/register"]');
  }
  get loginLink() {
    return $('[href="/user/login"]');
  }

  get header() {
    return $('h1');
  }

  open() {
    super.open('/');
  }
}
export default new HomePage();
