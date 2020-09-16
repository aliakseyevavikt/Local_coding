import LoginPage from '../../../../pageObjects/login.page';
import user from '../../../../testData/user';
import ProfilePage from '../../../../pageObjects/profile.page';
import TopMenuPage from '../../../../pageObjects/topMenu.page';
import LinksPage from '../../../../pageObjects/settingsLinks.page';
import { linksSettings } from '../../../testResult/linksSettings';
import { errorMessageLinks } from '../../../testResult/errorMesLinks';
import { clearValue } from '../../../helpers/clearValue';

before(() => {
  LoginPage.open();
  LoginPage.login(user.admin.email, user.admin.password);
  ProfilePage.dropDownUserMenu.click();
  TopMenuPage.dropDownMenuSettings.click();
  LinksPage.linksTab.click();
});

describe('ERROR MESSAGE APPEARS WHEN ENTERED INCORRECT LINKS', function () {

  it('TC-318 verify that error message appears in Google Doc Resume Link field', function () {
    clearValue(LinksPage.resumeField);
    LinksPage.resumeField.setValue(linksSettings.gitHubData);
    LinksPage.errorMesResumeLink.isDisplayed();
    expect(LinksPage.errorMesResumeLink.getText()).eq(errorMessageLinks.invalidResumeData);
  });

  it('TC-319 verify that error message appears in LinkedIn Link field', function () {
    clearValue(LinksPage.linkedInField);
    LinksPage.linkedInField.setValue(linksSettings.gitHubData);
    LinksPage.errorMesLinkedInLink.isDisplayed();
    expect(LinksPage.errorMesLinkedInLink.getText()).eq(errorMessageLinks.invalidLinkedInData);
  });

  it('TC-320 verify that error message appears in Facebook Link field', function () {
    clearValue(LinksPage.facebookField);
    LinksPage.facebookField.setValue(linksSettings.gitHubData);
    LinksPage.errorMesFacebookLink.isDisplayed();
    expect(LinksPage.errorMesFacebookLink.getText()).eq(errorMessageLinks.invalidFacebookData);
  });

  it('TC-321 verify that error message appears in GitHub Link field', function () {
    clearValue(LinksPage.gitHubField);
    LinksPage.gitHubField.setValue(linksSettings.linkedInData);
    LinksPage.errorMesGitHubLink.isDisplayed();
    expect(LinksPage.errorMesGitHubLink.getText()).eq(errorMessageLinks.invalidGitHubData);
  });

  it('TC-322 verify that error message appears in Codewars Link field', function () {
    clearValue(LinksPage.codewarsField);
    LinksPage.codewarsField.setValue(linksSettings.gitHubData);
    LinksPage.errorMesCodeWarsLink.isDisplayed();
    expect(LinksPage.errorMesCodeWarsLink.getText()).eq(errorMessageLinks.invalidCodewarsData);
  });
});
