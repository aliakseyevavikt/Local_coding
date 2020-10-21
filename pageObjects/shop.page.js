import BasePage from './Base.page';

class ShopPage extends BasePage {
  get listOfCourses() {
    return $$('.ant-divider-inner-text');
  }
  get buyBtns() {
    return $$('button[type="button"]');
  }
  get cardEmail() {
    return $('input#email');
  }
  get cardNumber() {
    return $('input#cardNumber');
  }
  get cardExp() {
    return $('input#cardExpiry');
  }

  get cardCvc() {
    return $('input#cardCvc');
  }

  get nameOnTheCard() {
    return $('input#billingName');
  }

  get countryDropDown() {
    return $('input#billingCountry');
  }

  get zipCode() {
    return $('input#billingPostalCode');
  }

  get submitBtnNotActive() {
    return $('.SubmitButton.SubmitButton--incomplete');
  }

  get submitBtnActive() {
    return $('.SubmitButton.SubmitButton--complete');
  }

  get h1() {
    return $('h1');
  }

  checkoutUS(email, cardN, cardExp, cardCvs, name, zip) {
    this.cardEmail.setValue(email);
    this.cardNumber.setValue(cardN);
    this.cardExp.setValue(cardExp);
    this.cardCvc.setValue(cardCvs);
    this.nameOnTheCard.setValue(name);
    this.zipCode.setValue(zip);
    this.submitBtnActive.click();
  }
}

export default new ShopPage();
