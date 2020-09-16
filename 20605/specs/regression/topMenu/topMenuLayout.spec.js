import LoginPage from '../../../../pageObjects/login.page';
import topMenuPage from '../../../../pageObjects/topMenu.page'
import user from '../../../../testData/user';
import { topMenu } from '../../../testResult/topMenu';

describe('TOPMENU LAYOUT', function () {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    topMenuPage.userAvatarName.isDisplayed();
  });

  describe('MAIN ELEMENTS ARE DISPLAYED FOR ALL ROLES', function () {
    it('TC-134 logo is displayed', function () {
      expect(topMenuPage.logo.isDisplayed());
    });

    it('TC-135 label is displayed', function () {
      expect(topMenuPage.homePageLink.isDisplayed());
    });

    it('TC-136 label has correct text', function () {
      expect(topMenuPage.homePageLink.getText()).eq(topMenu.label);
    });

    it('TC-155 CoinImg is displayed', function () {
      expect(topMenuPage.coinImg.isDisplayed());
    });

    it('TC-156 AchievmentsLink is displayed', function () {
      expect(topMenuPage.achievementsLink.isDisplayed());
    });

    it('UserAvatarImg is displayed', function () {
      expect(topMenuPage.userAvatarImg.isDisplayed());
    });

    it('UserAvatarName is displayed', function () {
      expect(topMenuPage.userAvatarName.isDisplayed());
    });

    it('TC-157 DropDownArrow is displayed', function () {
      expect(topMenuPage.dropDownArrow.isDisplayed());
    });

    it('TC-158 DropDownMenuProfile is displayed', function () {
      expect(topMenuPage.dropDownMenuProfile.isDisplayed());
    });

    it('TC-160 DropDownMenuSettings is displayed', function () {
      expect(topMenuPage.dropDownMenuSettings.isDisplayed());
    });

    it('TC-162 DropDownMenuOrders is displayed', function () {
      expect(topMenuPage.dropDownMenuOrders.isDisplayed());
    });

    it('TC-164 DropDownMenuLogOut is displayed', function () {
      expect(topMenuPage.dropDownMenuLogOut.isDisplayed());
    });
  });

  describe('MAIN ELEMENTS ARE DISPLAYED for ADMIN', function () {
    it('TC-137 Base Link is displayed', function () {
      expect(topMenuPage.baseLink.isDisplayed());
    });

    it('TC-138 Base Link has correct text', function () {
      expect(topMenuPage.baseLink.getText()).eq(topMenu.baseLink);
    });

    it('TC-139 Courses Link is displayed', function () {
      expect(topMenuPage.coursesLink.isDisplayed());
    });

    it('TC-140 Courses Link has correct text', function () {
      expect(topMenuPage.coursesLink.getText()).eq(topMenu.coursesLink);
    });

    it('TC-141 Cards Link is displayed', function () {
      expect(topMenuPage.cardsLink.isDisplayed());
    });

    it('TC-142 Cards Link has correct text', function () {
      expect(topMenuPage.cardsLink.getText()).eq(topMenu.cardsLink);
    });

    it('TC-143 Diary Link is displayed', function () {
      expect(topMenuPage.diaryLink.isDisplayed());
    });

    it('TC-144 Diary Link has correct text', function () {
      expect(topMenuPage.diaryLink.getText()).eq(topMenu.diaryLink);
    });

    it('TC-145 Groups Link is displayed', function () {
      expect(topMenuPage.groupsLink.isDisplayed());
    });

    it('TC-146 Groups Link has correct text', function () {
      expect(topMenuPage.groupsLink.getText()).eq(topMenu.groupsLink);
    });

    it('TC-147 Users Link is displayed', function () {
      expect(topMenuPage.usersLink.isDisplayed());
    });

    it('TC-148 Users Link has correct text', function () {
      expect(topMenuPage.usersLink.getText()).eq(topMenu.usersLink);
    });

    it('TC-149 Challenges Link is displayed', function () {
      expect(topMenuPage.challengesLink.isDisplayed());
    });

    it('TC-150 Challenges Link has correct text', function () {
      expect(topMenuPage.challengesLink.getText()).eq(topMenu.challengesLink);
    });

    it('TC-151 Telephony Link is displayed', function () {
      expect(topMenuPage.telephonyLink.isDisplayed());
    });

    it('TC-152 Telephony Link has correct text', function () {
      expect(topMenuPage.telephonyLink.getText()).eq(topMenu.telephonyLink);
    });

    it('TC-153 Shop Link is displayed', function () {
      expect(topMenuPage.shopLink.isDisplayed());
    });

    it('TC-154 Shop Link has correct text', function () {
      expect(topMenuPage.shopLink.getText()).eq(topMenu.shopLink);
    });

    it('TC-223 Orders Link is displayed', function () {
      expect(topMenuPage.ordersLink.isDisplayed());
    });

    it('TC-224 Orders Link has correct text', function () {
      expect(topMenuPage.ordersLink.getText()).eq(topMenu.ordersLink);
    });
  });
});
