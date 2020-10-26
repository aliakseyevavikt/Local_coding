import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/userRoles';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import waitTime from '../../../testData/waitTimes';
import ProfilePage from '../../../pageObjects/profile.page';
import SettingLinksPage from '../../../pageObjects/settingsLinks.page'


describe('LINKS IN SETTINGS LAYOUT', function() {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
    SettingLinksPage.linksTab.click();
  });

  describe('GENERAL LAYOUT', function() {
    it('Google Doc resume link should be displayed ', function() {
      expect(SettingLinksPage.resumeLabel.isDisplayed()).true;
    });

    it('LinkedIn profile link should be displayed ', function() {
      expect(SettingLinksPage.linkedInLabel.isDisplayed()).true;
    });

    it('Facebook profile link should be displayed ', function() {
      expect(SettingLinksPage.facebookLabel.isDisplayed()).true;
    });

    it('GitHub profile link should be displayed ', function() {
      expect(SettingLinksPage.gitHubLabel.isDisplayed()).true;
    });

    it('Codewars profile link should be displayed ', function() {
      expect(SettingLinksPage.codewarsLabel.isDisplayed()).true;
    });

    it('Save btn should be displayed ', function() {
      expect(SettingLinksPage.saveLinksBtn.isDisplayed()).true;
    });
  })
})

