import BasePage from './Base.page';

class TermsAndAgreementsPage extends BasePage {
  get termsAndAgreementsLink() {
    return $('.ant-btn.pl-1.ant-btn-link.ant-btn-sm');
  }

  get agreementDrawer() {
    return $('div.ant-drawer-body');
  }

  get drawerTitle() {
    return $('//div[@class="ant-drawer-title"]');
  }

  get lastModified() {
    return $('//p[contains(text(),"last modified on 05/22/2020")]');
  }

  get termsAndAgreementsLinkClose() {
    return $('[data-icon="close"]');
  }

  get agreementCheckBox() {
    return $('#user_login_agreement');
  }

  open(path) {
    return super.open('user/register');
  }
}
export default new TermsAndAgreementsPage();
