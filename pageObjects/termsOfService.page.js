import BasePage from './Base.page';

class TermsOfServicePage extends BasePage {
  get headerTermsOfService() {
    return $('h1');
  }
}
export default new TermsOfServicePage();
