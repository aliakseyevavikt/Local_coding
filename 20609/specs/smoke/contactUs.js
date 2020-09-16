import ContactUsPage from '../../../pageObjects/contactUs.page';
import user from '../../../testData/user';
import { textMessageInput, textYourRequest } from '../../data/contactUsData';

describe('CONTACT US PAGE - SMOKE', () => {
  before('', () => {
    ContactUsPage.open();
  });

  it('TC-110 should Name field accept full name', () => {
    ContactUsPage.nameInputFld.setValue(user.new.firstName + ' ' + user.new.lastName);
    expect(ContactUsPage.nameInputFld.getValue()).eq(user.new.firstName + ' ' + user.new.lastName);
  });

  it('TC-111 should Email field accept email', () => {
    ContactUsPage.emailInputFld.setValue(user.new.email);
    expect(ContactUsPage.emailInputFld.getValue()).eq(user.new.email);
  });

  it('TC-112 should Cell Phone Number field accept valid phone number', () => {
    ContactUsPage.phoneInputFld.setValue(user.new.phone);
    expect(ContactUsPage.phoneInputFld.getValue()).eq(user.new.phone);
  });

  it('TC-113 should Message field accept text message', () => {
    ContactUsPage.messageInputFld.setValue(textMessageInput);
    expect(ContactUsPage.messageInputFld.getValue()).eq(textMessageInput);
  });

  it('TC-114 should the Reset button be clickable', () => {
    ContactUsPage.resetBtn.isClickable();
  });

  it('TC-115 should confirmation message be displayed when clicking Submit Button after filling out the form ', () => {
    ContactUsPage.submitBtn.click();
    browser.waitUntil(() => ContactUsPage.confirmationText.isDisplayed());
    expect(ContactUsPage.confirmationText.getText()).eq(textYourRequest);
  });
});
