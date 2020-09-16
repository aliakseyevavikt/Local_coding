import ContactUsPage from '../../../pageObjects/contactUs.page';
import expectedContactUs from '../../../20610/data/expected.json';
import clearInputValue from '../../../helpers/clearValueMethod';
import expected from '../../data/expected.json';

describe('CONTACT US PAGE BY DEFAULT', () => {
  before('Before', () => {
    ContactUsPage.open();
  });

  describe('ELEMENTS DISPLAYED', () => {
    it('CU01 should have correct h1', () => {
      expect(ContactUsPage.header.getText()).eq(expectedContactUs.contactUsElementsDisplayed.contactUsh1);
    });

    it('CU02 should have nameInputField displayed', () => {
      expect(ContactUsPage.nameInputFld.isDisplayed()).eq(true);
    });

    it('CU03 nameInputField should have a placeholder = Name', () => {
      expect(ContactUsPage.nameInputFld.getAttribute('placeholder')).eq(
        expectedContactUs.contactUsElementsDisplayed.namePlaceholder,
      );
    });

    it('CU04 emailInputField should have a placeholder = email', () => {
      expect(ContactUsPage.emailInputFld.getAttribute('placeholder')).eq(
        expectedContactUs.contactUsElementsDisplayed.emailPlaceholder,
      );
    });

    it('CU05 phoneInputField should have a placeholder = Cell phone number 17775551122', () => {
      expect(ContactUsPage.phoneInputFld.getAttribute('placeholder')).eq(
        expectedContactUs.contactUsElementsDisplayed.phonePlaceholder,
      );
    });

    it('CU06 messageField should have a placeholder = Message', () => {
      expect(ContactUsPage.messageInputFld.getAttribute('placeholder')).eq(
        expectedContactUs.contactUsElementsDisplayed.messagePlaceholder,
      );
    });

    it('CU07 submit Btn is displayed on the page and its text = SUBMIT', () => {
      expect(ContactUsPage.submitBtn.isDisplayed()).eq(true);
      expect(ContactUsPage.submitBtn.getText()).eq(expectedContactUs.contactUsElementsDisplayed.submitBtn);
    });

    it('CU08 link to login page is present on the page', () => {
      expect(ContactUsPage.loginLink.isDisplayed()).eq(true);
    });

    it('CU09 link to register page is present on the page', () => {
      expect(ContactUsPage.registerLink.isDisplayed()).eq(true);
    });

    it('CU10 Terms of Service link is present on the page', () => {
      expect(ContactUsPage.termsLink.isDisplayed()).eq(true);
    });

    it('CU11 Privacy link is present on the page', () => {
      expect(ContactUsPage.privacyLink.isDisplayed()).eq(true);
    });

    it('CU12 link to HomePage is present on the page', () => {
      expect(ContactUsPage.homePgLink.isDisplayed()).eq(true);
    });

    describe('FIELDS BEHAVIOR WHEN FIELDS ARE CLEARED OR WHEN THEY ACCEPT WRONG DATA INPUTS', () => {
      it('CU13 if inputNameField is cleared, Required error is showing up', () => {
        ContactUsPage.nameInputFld.setValue(expectedContactUs.ContactUsValues.inputNameFieldValue);
        clearInputValue(ContactUsPage.nameInputFld);
        ContactUsPage.nameRequiredTxt.waitForDisplayed();
        expect(ContactUsPage.nameRequiredTxt.getText()).eq(expected.contactUsElementsDisplayed.emptyNameFieldWarning);
      });

      it('CU14 When email input = not a valid email, Error should pop up if email input is not valid', () => {
        ContactUsPage.emailInputFld.setValue(expectedContactUs.ContactUsValues.shortEmail);
        browser.waitUntil(() => ContactUsPage.emailRequiredTxt.isDisplayed());
        expect(ContactUsPage.emailRequiredTxt.getText()).eq(expected.contactUsElementsDisplayed.emailError);
      });

      it('CU15 When email field is cleared, Error REQUIRED should pop up', () => {
        clearInputValue(ContactUsPage.emailInputFld);
        browser.waitUntil(() => ContactUsPage.emailRequiredTxt.isDisplayed());
        expect(ContactUsPage.emailRequiredTxt.getText()).eq(expected.contactUsElementsDisplayed.emptyNameFieldWarning);
      });
    });
  });
});
