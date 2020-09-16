import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/user';
import ProfilePage from '../../../pageObjects/profile.page';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import LinksPage from '../../../pageObjects/settingsLinks.page';
import expected from '../../data/expected.json';

before(() => {
  browser.maximizeWindow();
  LoginPage.open();
  LoginPage.login(user.admin.email, user.admin.password);
  ProfilePage.dropDownUserMenu.click();
  TopMenuPage.dropDownMenuSettings.click();
  LinksPage.linksTab.click();
});

describe('TC-005 LINKS TAB ELEMENTS ARE PRESENT AND DISPLAYED CORRECTLY', () => {
  it('#01 Links Resume Label Text is correct', function () {
    expect(LinksPage.resumeLabel.getText()).eq(expected.linksPageData.resumeText);
  });

  it('#02 Links Resume Field is present', function () {
    expect(LinksPage.resumeField.isDisplayed()).true;
  });

  it('#03 Links LinkedIn Label Text is correct', function () {
    expect(LinksPage.linkedInLabel.getText()).eq(expected.linksPageData.LinkedInText);
  });

  it('#04 Links LinkedIn Field is present', function () {
    expect(LinksPage.linkedInField.isDisplayed()).true;
  });

  it('#05 Links Facebook Label is correct', function () {
    expect(LinksPage.facebookLabel.getText()).eq(expected.linksPageData.FacebookText);
  });

  it('#06 Links Facebook Field is present', function () {
    expect(LinksPage.facebookField.isDisplayed()).true;
  });

  it('#07 Links GitHub Label is correct', function () {
    expect(LinksPage.gitHubLabel.getText()).eq(expected.linksPageData.GitHubText);
  });

  it('#08 Links GitHub Field is present', function () {
    expect(LinksPage.gitHubField.isDisplayed()).true;
  });

  it('#09 Links Codewars Label is correct', function () {
    expect(LinksPage.codewarsLabel.getText()).eq(expected.linksPageData.CodewarsText);
  });

  it('#10 Links Codewars Field is present', function () {
    expect(LinksPage.codewarsField.isDisplayed()).true;
  });

  it('#11 Links Save Button Text is correct', function () {
    expect(LinksPage.saveLinksBtn.getText()).eq(expected.linksPageData.saveBtnText);
  });

  it('#12 Links Save Button is enabled', function () {
    expect(LinksPage.saveLinksBtn.isEnabled()).true;
  });
});

describe('TC-005 LINKS TAB ELEMENTS ACCEPT CORRECT INPUT AND SAVE CHANGES', () => {
  it('#13 Links Resume Input accepts and saves data', function () {
    const inputRes = expected.linksPageData.resumeLink;

    // LinksPage.resumeField.click();
    // do {
    //   browser.keys('Backspace');
    //   browser.keys('Delete');
    // } while (LinksPage.resumeField.getValue() !== '');

    let resumeLength = LinksPage.resumeField.getValue().length;
    let resumeBackspaces = new Array(resumeLength).fill('Backspace');
    LinksPage.resumeField.setValue(resumeBackspaces);
    browser.pause(200);

    LinksPage.resumeField.setValue(inputRes);
    browser.pause(200);
    LinksPage.saveLinks();
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.profile.click();
    expect(ProfilePage.resumeIcon.getAttribute('href')).include(expected.linksPageData.resumeLink);
  });

  // BUG: Message should appear:  "User Links updated"

  it('#14 Links Facebook Input accepts and saves data', function () {
    const inputFacebook = expected.linksPageData.Facebook;
    ProfilePage.dropDownUserMenu.click();
    TopMenuPage.dropDownMenuSettings.click();
    LinksPage.linksTab.click();

    // LinksPage.facebookField.click();
    // do {
    //   browser.keys('Backspace');
    //   browser.keys('Delete');
    // } while (LinksPage.facebookField.getValue() !== '');

    let facebookLength = LinksPage.facebookField.getValue().length;
    let facebookBackspaces = new Array(facebookLength).fill('Backspace');
    LinksPage.facebookField.setValue(facebookBackspaces);
    browser.pause(200);

    LinksPage.facebookField.setValue(inputFacebook);
    LinksPage.saveLinks();
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.profile.click();
    expect(ProfilePage.facebookIcon.getAttribute('href')).include(inputFacebook);
  });

  it('#15 Links LinkedIn Input accepts and saves data', function () {
    const inputLin = expected.linksPageData.LinkedIn;

    ProfilePage.dropDownUserMenu.click();
    TopMenuPage.dropDownMenuSettings.click();
    LinksPage.linksTab.click();

    // LinksPage.linkedInField.click();
    // do {
    //   browser.keys('Backspace');
    //   browser.keys('Delete');
    // } while (LinksPage.linkedInField.getValue() !== '');

    let linkedInLength = LinksPage.linkedInField.getValue().length;
    let linkedInBackspaces = new Array(linkedInLength).fill('Backspace');
    LinksPage.linkedInField.setValue(linkedInBackspaces);
    browser.pause(200);

    LinksPage.linkedInField.setValue(inputLin);
    LinksPage.saveLinks();
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.profile.click();

    expect(ProfilePage.linkedInIcon.getAttribute('href')).include(inputLin);
  });

  it('#16 Links GitHub Input accepts and saves data', function () {
    const inputGitHub = expected.linksPageData.GitHub;

    ProfilePage.dropDownUserMenu.click();
    TopMenuPage.dropDownMenuSettings.click();
    LinksPage.linksTab.click();

    // LinksPage.gitHubField.click();
    // do {
    //   browser.keys('Backspace');
    //   browser.keys('Delete');
    // } while (LinksPage.gitHubField.getValue() !== '');

    let gitLength = LinksPage.gitHubField.getValue().length;
    let gitBackspaces = new Array(gitLength).fill('Backspace');
    LinksPage.gitHubField.setValue(gitBackspaces);
    browser.pause(200);

    LinksPage.gitHubField.setValue(inputGitHub);
    LinksPage.saveLinks();
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.profile.click();

    expect(ProfilePage.gitHubIcon.getAttribute('href')).include(inputGitHub);
  });

  it('#17 Links Codewars Input accepts and saves data', function () {
    const inputCodewars = expected.linksPageData.Codewars;

    ProfilePage.dropDownUserMenu.click();
    TopMenuPage.dropDownMenuSettings.click();
    LinksPage.linksTab.click();

    // LinksPage.codewarsField.click();
    // do {
    //   browser.keys('Backspace');
    //   browser.keys('Delete');
    // } while (LinksPage.codewarsField.getValue() !== '');

    let codewarsLength = LinksPage.codewarsField.getValue().length;
    let codewarsBackspaces = new Array(codewarsLength).fill('Backspace');
    LinksPage.codewarsField.setValue(codewarsBackspaces);
    browser.pause(200);

    LinksPage.codewarsField.setValue(inputCodewars);
    LinksPage.saveLinks();
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.profile.click();

    expect(ProfilePage.codewarsIcon.getAttribute('href')).include(inputCodewars);
  });
});
