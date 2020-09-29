import TopMenuPage from '../../../pageObjects/topMenu.page';
import LoginPage from '../../../pageObjects/login.page';
const Expected = require('../../data/expected.json').pagesHeaders;
import user from '../../../testData/userRoles';
import WAIT_TIME_MEDIUM from '../../../testData/waitTimes';
import ProfilePage from '../../../pageObjects/profile.page';


describe('TOP MENU', () => {
  describe('Top Menu Tabs', () => {
    before(() => {
      LoginPage.open();
      LoginPage.validLogin(user.admin.email, user.admin.password);
    });

    xit('TC-10-001 click on Base go to Base Page', function () {
      TopMenuPage.baseLink.click();
      expect(TopMenuPage.header.getText()).eq(Expected.Base);
    });

    it('TC-10-002 click on Courses go to Courses Page', function () {
      TopMenuPage.coursesLink.click();
      expect(TopMenuPage.header.getText()).eq(Expected.Courses);
    });

    it('TC-10-003 click on Cards go to Cards Page', function () {
      TopMenuPage.cardsLink.click();
      expect(TopMenuPage.header.getText()).eq(Expected.Cards);
    });

    it('TC-10-004 click on Diary go to Diary Page', function () {
      TopMenuPage.diaryLink.click();
      expect(TopMenuPage.header.getText()).eq(Expected.Diary);
    });

    it('TC-10-005 click on Groups go to Groups Page', function () {
      TopMenuPage.groupsLink.click();
      expect(TopMenuPage.header.getText()).eq(Expected.Groups);
    });

    it('TC-10-006 click on Users go to Users Page', function () {
      TopMenuPage.usersLink.click();
      expect(TopMenuPage.header.getText()).eq(Expected.Users);
    });

    it('TC-10-007 click on Challenges go to Challenge Page', function () {
      TopMenuPage.challengesLink.click();
      expect(TopMenuPage.headerChallenge.getText()).eq(Expected.Challenges);
    });

    it('TC-10-008 click on Telephony go to Telephony Page', function () {
      TopMenuPage.telephonyLink.click();
      expect(TopMenuPage.header.getText()).eq(Expected.Telephony);
    });

    it('TC-10-009 click on Shop go to Product Page', function () {
      TopMenuPage.shopLink.click();
      expect(TopMenuPage.header.getText()).eq(Expected.Shop);
    });

    it('TC-10-010 click on Orders go to Order Page', function () {
      TopMenuPage.ordersLink.click();
      expect(TopMenuPage.header.getText()).eq(Expected.Orders);
    });
  });

  describe('Coins and Achievments', () => {
    before(() => {
      LoginPage.open();
      LoginPage.validLogin(user.admin.email, user.admin.password);
    });

    it('TC-10-011 Should check Coin is displayed', function () {
      TopMenuPage.coinImg.isDisplayed().true;
    });

    it('TC-10-012 should check Coin Q-ty is displayed', function () {
      TopMenuPage.achievementsLink.isDisplayed().true;
    });

    it('TC-10-013 click on Coin go to Achievments Page', function () {
      TopMenuPage.coinImg.click();
      expect(TopMenuPage.header.getText()).eq(Expected.Achievements);
    });

    it('TC-10-014 click on Coin Quantity go to Achievments Page', function () {
      TopMenuPage.achievementsLink.click();
      expect(TopMenuPage.header.getText()).eq(Expected.Achievements);
    });
  });
    // describe('User Drop Down Menu', () => {});
});
