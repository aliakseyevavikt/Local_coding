import TopMenuPage from '../../../pageObjects/topMenu.page';
import LoginPage from '../../../pageObjects/login.page';
const Expected = require('../../data/expected.json').pagesHeaders;
import user from '../../../testData/user';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';
import ProfilePage from '../../../pageObjects/profile.page';


describe('TOP MENU', () => {
  describe('Label and Logo', () => {
    before(() => {
      LoginPage.open();
      LoginPage.validLogin(user.admin.email, user.admin.password);
      ProfilePage.badgeRole.waitForDisplayed(WAIT_TIME_MEDIUM);
    });

    it('TC-09-001 Should check logo is displayed', function () {
      TopMenuPage.logo.isDisplayed().true;
    });

    it('TC-09-002 should check label is displayed', function () {
      TopMenuPage.homePageLink.isDisplayed().true;
    });

    it('TC-09-003 click on Logo/label go to main page', function () {
      browser.waitUntil(() => TopMenuPage.logo.isClickable());
      TopMenuPage.homePageLink.click();
      expect(TopMenuPage.headerUniversal.getText()).eq(Expected.MainPageHeader);
    });

    it('TC-09-004 click on Logo/label go to main page', function () {
      browser.waitUntil(() => TopMenuPage.homePageLink.isClickable());
      TopMenuPage.homePageLink.click();
      expect(TopMenuPage.headerUniversal.getText()).eq(Expected.MainPageHeader);
    });
  });
});