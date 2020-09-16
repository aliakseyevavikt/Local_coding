import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/user';
import ProfilePage from '../../../pageObjects/profile.page';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import LinksPage from '../../../pageObjects/settingsLinks.page';
import expected from '../../data/expected.json';

before(() => {
  LoginPage.open();
  LoginPage.login(user.admin.email, user.admin.password);
  ProfilePage.dropDownUserMenu.click();
  TopMenuPage.dropDownMenuSettings.click();
  LinksPage.linksTab.click();
});

describe('LINKS ELEMENTS ARE PRESENT', () => {
  it('№1 Should have Resume Label Text = Google Doc resume link ', () => {
    expect(LinksPage.resumeLabel.getText()).eq(expected.linksData.resumeText);
  });

  it('№2 Should have LinkedIn Text = LinkedIn profile link', () => {
    expect(LinksPage.linkedInLabel.getText()).eq(expected.linksData.linkedInText);
  });

  it('№3 Should have Facebook Text = Facebook profile link', () => {
    expect(LinksPage.facebookLabel.getText()).eq(expected.linksData.facebookText);
  });

  it('№4 Should have GitHub Text = GitHub profile link', () => {
    expect(LinksPage.gitHubLabel.getText()).eq(expected.linksData.gitHubText);
  });

  it('№5 Should have Codewars Text = Codewars profile link', () => {
    expect(LinksPage.codewarsLabel.getText()).eq(expected.linksData.codewarsText);
  });

  it('№6 Should have Links Save Button Text = Save', () => {
    expect(LinksPage.saveLinksBtn.getText()).eq(expected.linksData.saveBtnText);
  });

  it('№7 Should have Resume Field present on the page', () => {
    expect(LinksPage.resumeField.isDisplayed()).true;
  });

  it('№8 Should have LinkedIn Field present on the page', () => {
    expect(LinksPage.linkedInField.isDisplayed()).true;
  });

  it('№9 Should have Facebook Field present on the page', () => {
    expect(LinksPage.facebookField.isDisplayed()).true;
  });

  it('№10 Should have GitHub Field present on the page', () => {
    expect(LinksPage.gitHubField.isDisplayed()).true;
  });

  it('№11 Should have Codewars Field present on the page', () => {
    expect(LinksPage.codewarsField.isDisplayed()).true;
  });

  it('№12 Should have enable Save Button Link', () => {
    expect(LinksPage.saveLinksBtn.isEnabled()).true;
  });
});
