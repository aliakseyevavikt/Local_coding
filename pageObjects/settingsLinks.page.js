import BasePage from './Base.page';
// import TopMenuPage from './topMenu.page';

class LinksPage extends BasePage {

  get linksTab() {
    return $$('.ant-menu-item')[3];
  }

  get resumeLabel() {
    return $('[for="resume"]');
  }

  get resumeField() {
    return $('#resume');
  }

  get linkedInLabel() {
    return $('[for="linkedIn"]');
  }

  get linkedInField() {
    return $('#linkedIn');
  }

  get facebookLabel() {
    return $('[for="facebook"]');
  }

  get facebookField() {
    return $('#facebook');
  }

  get gitHubLabel() {
    return $('[for="github"]');
  }

  get gitHubField() {
    return $('#github');
  }

  get codewarsLabel() {
    return $('[for="codewarsUsername"]');
  }

  get codewarsField() {
    return $('#codewarsUsername');
  }

  get saveLinksBtn() {
    return $('[type="submit"]');
  }

  saveLinks() {
    this.saveLinksBtn.click();
  }

  get errorMesResumeLink() {
    return $$('.ant-form-item-explain')[0];
  }

  get errorMesLinkedInLink() {
    return $$('.ant-form-item-explain')[1];
  }

  get errorMesFacebookLink() {
    return $$('.ant-form-item-explain')[2];
  }

  get errorMesGitHubLink() {
    return $$('.ant-form-item-explain')[3];
  }

  get errorMesCodeWarsLink() {
    return $$('.ant-form-item-explain')[4];
  }
}

export default new LinksPage();
