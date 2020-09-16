export default class BasePage {
  open(path) {
    browser.url(path);
  }

  get homePageLink() {
    return $('.site-name');
  }

  get header() {
    return $('h1');
  }
}
