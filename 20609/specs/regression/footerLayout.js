import FooterPage from '../../../pageObjects/footer.page';
import {textFooterPage} from '../../data/footerData';
import ContactUsPage from '../../../pageObjects/contactUs.page';
import TermsOfServicePage from '../../../pageObjects/termsOfService.page';
import PrivacyPolicyPage from '../../../pageObjects/privacyPolicy.page';

describe('FOOTER', () => {
    before(() => {
        FooterPage.open();
    });

    it('TC-103 Verify that footer text is correct', function () {
        expect(FooterPage.footer.getText()).equal(textFooterPage.headerFooter);
    });

    it('TC-104 Verify that "contact us" link is clickable', function () {
        expect(FooterPage.contactUs.isClickable()).true;
    });

    it('TC-105 Verify that "Terms of Service" link is clickable', function () {
        expect(FooterPage.termsOfService.isClickable()).true;
    });

    it('TC-106 Verify that "Privacy Policy" link is clickable', function () {
        expect(FooterPage.privacyPolicy.isClickable()).true;
    });

    it('TC-107 Verify that redirect to "contact us" page is correct', function () {
        FooterPage.navToContactUs();
        expect(ContactUsPage.headerContactUs.getText()).equal(textFooterPage.contactUsHeader);
    });

    it('TC-108 Verify that redirect to "Terms of service" page is correct', function () {
        FooterPage.navToTermsOfService();
        expect(TermsOfServicePage.headerTermsOfService.getText()).equal(textFooterPage.termsOfServiceHeader);
    });

    it('TC-109 Verify that redirect to "Privacy Policy" page is correct', function () {
        FooterPage.navToPrivacyPolicy();
        expect(PrivacyPolicyPage.headerPrivacyPolicy.getText()).equal(textFooterPage.privacyPolicyHeader)
    });
})
