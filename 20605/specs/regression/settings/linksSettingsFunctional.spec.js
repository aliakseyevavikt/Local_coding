import LoginPage from '../../../../pageObjects/login.page';
import user from '../../../../testData/user';
import ProfilePage from '../../../../pageObjects/profile.page';
import TopMenuPage from '../../../../pageObjects/topMenu.page';
import LinksPage from '../../../../pageObjects/settingsLinks.page';
import { linksSettings } from '../../../testResult/linksSettings';
import { clearValue } from '../../../helpers/clearValue';

before(() => {
  LoginPage.open();
  LoginPage.login(user.admin.email, user.admin.password);
  ProfilePage.dropDownUserMenu.click();
  TopMenuPage.dropDownMenuSettings.click();
  LinksPage.linksTab.click();
});

describe('LINKS FIELD ACCEPT INPUT DATA AND ICONS APPEAR', function () {
  beforeEach(() => {
    TopMenuPage.dropDownArrow.click();
    TopMenuPage.dropDownMenuSettings.click();
    LinksPage.linksTab.click();
  });

  describe('RESUME LINK', function () {
    it('TC-323 should verify that ResumeIcon does not display on ProfilePage before filled field', function() {
      clearValue(LinksPage.resumeField);
      LinksPage.saveLinks();
      TopMenuPage.dropDownArrow.click();
      TopMenuPage.dropDownMenuProfile.click();
      expect(ProfilePage.resumeIcon.isDisplayed()).eq(false);
    });

    it('TC-214  should verify that Resume Link field can accept reference ', function() {
      clearValue(LinksPage.resumeField);
      LinksPage.resumeField.setValue(linksSettings.resumeData);
      LinksPage.saveLinks();
      expect(LinksPage.resumeField.getValue()).eq(linksSettings.resumeData);
    });

    it('TC-324 should verify that ResumeIcon is displayed on ProfilePage after filled field', function() {
      TopMenuPage.dropDownArrow.click();
      TopMenuPage.dropDownMenuProfile.click();
      expect(ProfilePage.resumeIcon.isDisplayed());
    });
  });

  describe('LINKEDIN LINK', function () {
    it('TC-325 should verify that LinkedInIcon does not display on ProfilePage before filled field', function() {
      clearValue(LinksPage.linkedInField);
      LinksPage.saveLinks();
      TopMenuPage.dropDownArrow.click();
      TopMenuPage.dropDownMenuProfile.click();
      expect(ProfilePage.linkedInIcon.isDisplayed()).eq(false);
    });

    it('TC-215  should verify that LinkedIn Link field can accept reference ', function() {
      clearValue(LinksPage.linkedInField);
      LinksPage.linkedInField.setValue(linksSettings.linkedInData);
      LinksPage.saveLinks();
      expect(LinksPage.linkedInField.getValue()).eq(linksSettings.linkedInData);
    });

    it('TC-326 should verify that LinkedInIcon is displayed on ProfilePage after filled field', function() {
      TopMenuPage.dropDownArrow.click();
      TopMenuPage.dropDownMenuProfile.click();
      expect(ProfilePage.linkedInIcon.isDisplayed());
    });
  });

  describe('FACEBOOK LINK', function () {
    it('TC-327 should verify that FacebookIcon does not display on ProfilePage before filled field', function() {
      clearValue(LinksPage.facebookField);
      LinksPage.saveLinks();
      TopMenuPage.dropDownArrow.click();
      TopMenuPage.dropDownMenuProfile.click();
      expect(ProfilePage.facebookIcon.isDisplayed()).eq(false);
    });

    it('TC-216  should verify that Facebook Link field can accept reference ', function() {
      clearValue(LinksPage.facebookField);
      LinksPage.facebookField.setValue(linksSettings.facebookData);
      LinksPage.saveLinks();
      expect(LinksPage.facebookField.getValue()).eq(linksSettings.facebookData);
    });

    it('TC-336 should verify that FacebookIcon is displayed on ProfilePage after filled field', function() {
      TopMenuPage.dropDownArrow.click();
      TopMenuPage.dropDownMenuProfile.click();
      expect(ProfilePage.facebookIcon.isDisplayed());
    });
  });

  describe('GITHUB LINK', function () {
    it('TC-337 should verify that GitHubIcon does not display on ProfilePage before filled field', function() {
      clearValue(LinksPage.gitHubField);
      LinksPage.saveLinks();
      TopMenuPage.dropDownArrow.click();
      TopMenuPage.dropDownMenuProfile.click();
      expect(ProfilePage.gitHubIcon.isDisplayed()).eq(false);
    });

    it('TC-217  should verify that GitHub Link field can accept reference ', function() {
      clearValue(LinksPage.gitHubField);
      LinksPage.gitHubField.setValue(linksSettings.gitHubData);
      LinksPage.saveLinks();
      expect(LinksPage.gitHubField.getValue()).eq(linksSettings.gitHubData);
    });

    it('TC-338 should verify that GitHubIcon is displayed on ProfilePage after filled field', function() {
      TopMenuPage.dropDownArrow.click();
      TopMenuPage.dropDownMenuProfile.click();
      expect(ProfilePage.gitHubIcon.isDisplayed());
    });
  });

  describe('CODEWARS LINK', function () {
    it('TC-339 should verify that CodeWarsIcon does not display on ProfilePage before filled field', function() {
      clearValue(LinksPage.codewarsField);
      LinksPage.saveLinks();
      TopMenuPage.dropDownArrow.click();
      TopMenuPage.dropDownMenuProfile.click();
      expect(ProfilePage.codewarsIcon.isDisplayed()).eq(false);
    });

    it('TC-218  should verify that CodeWars Link field can accept reference ', function() {
      clearValue(LinksPage.codewarsField);
      LinksPage.codewarsField.setValue(linksSettings.codewarsData);
      LinksPage.saveLinks();
      expect(LinksPage.codewarsField.getValue()).eq(linksSettings.codewarsData);
    });

    it('TC-340 should verify that CodeWarsIcon is displayed on ProfilePage after filled field', function() {
      TopMenuPage.dropDownArrow.click();
      TopMenuPage.dropDownMenuProfile.click();
      expect(ProfilePage.codewarsIcon.isDisplayed());
    });
  });

  it('TC-219 SaveBtn should be clicable and save all new input data', function () {
    LinksPage.saveLinks();
    expect(LinksPage.saveLinksBtn.isClickable()).true;
  });
});
