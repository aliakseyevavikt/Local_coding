import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/userRoles';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import waitTime from '../../../testData/waitTimes';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingLinksPage from '../../../pageObjects/settingsLinks.page';
import userRoles from '../../../testData/userRoles';
import clearInputValue from '../../../helpers/clearValueMethod';
import { clearValue } from '../../../helpers/clearValue';

describe('LINKS IN SETTINGS LAYOUT', function() {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
    SettingLinksPage.linksTab.click();
  });

  describe('LINKS IN SETTINGS ACCEPT DATA', function() {
    it('input resume field should accept data correct', function(){
      clearValue(SettingLinksPage.resumeField);
      SettingLinksPage.resumeField.setValue(userRoles.admin.resume);
      expect(SettingLinksPage.resumeField.getValue()).eq(userRoles.admin.resume);
    });

    it('input LinkedIn profile field should accept data correct', function() {
      clearValue(SettingLinksPage.linkedInField);
      SettingLinksPage.linkedInField.setValue(userRoles.admin.linkedIn);
      expect(SettingLinksPage.linkedInField.getValue()).eq(userRoles.admin.linkedIn);
    });

    it('Facebook profile field should accept data correct ', function() {
       SettingLinksPage.facebookField.setValue(userRoles.admin.facebook);
       expect(SettingLinksPage.facebookField.getValue()).eq(userRoles.admin.facebook);
    });

    it('GitHub profile field should accept data correct ', function() {
      SettingLinksPage.gitHubField.setValue(userRoles.admin.gitHub);
      expect(SettingLinksPage.gitHubField.getValue()).eq(userRoles.admin.gitHub);
    });

    it('Codewars profile field should accept data correct ', function() {
      SettingLinksPage.codewarsField.setValue(userRoles.admin.codeWars);
      expect(SettingLinksPage.codewarsField.getValue()).eq(userRoles.admin.codeWars);
    });

    it('should check if save btn is clickable ', function() {
      expect(SettingLinksPage.saveLinksBtn.isClickable()).true;
    });

  });


});
