import BasePage from './Base.page';

class DeactivateAccountPage extends BasePage {

  get deactivateAccountTab() {
    return $('//html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/ul[1]/li[6]');
  }

  get accountDeactivationHeader() {
    return $('h2');
  }

  get textDescription() {
    return $('//html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/p[1]');
  }

  get deactivateBtn() {
    return $('//span[contains(text(),"Deactivate")]');
  }
}

export default new DeactivateAccountPage();
