import BasePage from './Base.page';

class PrivacyPolicyPage extends BasePage {
  get headerPrivacyPolicy() {
    return $('h1');
  }
}
export default new PrivacyPolicyPage();
