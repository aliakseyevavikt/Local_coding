import LoginPage from '../../../../pageObjects/login.page';
import user from '../../../../testData/userRoles';
import ProfilePage from '../../../../pageObjects/profile.page';
import TopMenuPage from '../../../../pageObjects/topMenu.page';
import LinksPage from '../../../../pageObjects/settingsLinks.page';
import { linksSettings } from '../../../testResult/linksSettings';

before(() => {
  LoginPage.open();
  LoginPage.login(user.admin.email, user.admin.password);
  ProfilePage.dropDownUserMenu.click();
  TopMenuPage.dropDownMenuSettings.click();
  LinksPage.linksTab.click();
});

describe('TC-200 LINKS ARE DISPLAYED AND HAVE CORRECT TEXT', function () {
  it('LinksTab should be displayed', function () {
    expect(LinksPage.linksTab.isDisplayed());
  });

  it('TC-201 LinksTab has correct text', function () {
    expect(LinksPage.linksTab.getText()).eq(linksSettings.linksTab);
  });

  it('TC-202 ResumeLabel should be displayed', function () {
    expect(LinksPage.resumeLabel.isDisplayed());
  });

  it('TC-203 ResumeLabel has correct text', function () {
    expect(LinksPage.resumeLabel.getText()).eq(linksSettings.resumeLabel);
  });

  it('TC-204 LinkedinLabel should be displayed', function () {
    expect(LinksPage.linkedInLabel.isDisplayed());
  });

  it('TC-205 LinkedinLabel has correct text', function () {
    expect(LinksPage.linkedInLabel.getText()).eq(linksSettings.linkedInLabel);
  });

  it('TC-206 FacebookLabel should be displayed', function () {
    expect(LinksPage.facebookLabel.isDisplayed());
  });

  it('TC-207 FacebookLabel has correct text', function () {
    expect(LinksPage.facebookLabel.getText()).eq(linksSettings.facebookLabel);
  });

  it('TC-208 GitHubLabel should be displayed', function () {
    expect(LinksPage.gitHubLabel.isDisplayed());
  });

  it('TC-209 GitHubLabel has correct text', function () {
    expect(LinksPage.gitHubLabel.getText()).eq(linksSettings.gitHubLabel);
  });

  it('TC-210 CodewarsLabel should be displayed', function () {
    expect(LinksPage.codewarsLabel.isDisplayed());
  });

  it('TC-211 CodewarsLabel has correct text', function () {
    expect(LinksPage.codewarsLabel.getText()).eq(linksSettings.codewarsLabel);
  });

  it('TC-212 SaveBtn should be displayed', function () {
    expect(LinksPage.saveLinksBtn.isDisplayed());
  });

  it('TC-213 SaveBtn has correct text', function () {
    expect(LinksPage.saveLinksBtn.getText()).eq(linksSettings.saveLinkBtn);
  });
});
