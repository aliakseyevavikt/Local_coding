import BasePage from './Base.page';

class TopMenuPage extends BasePage {
  get logo() {
    return $$('img')[0];
  }

  get homePageLink() {
    return $('.site-name');
  }

  get baseLink() {
    return $('[href="/base"]');
  }

  get coursesLink() {
    return $('[href="/course"]');
  }

  get cardsLink() {
    return $('[href="/flash"]');
  }

  get diaryLink() {
    return $('[href="/diary"]');
  }

  get groupsLink() {
    return $('[href="/group"]');
  }

  get usersLink() {
    return $('[href="/users"]');
  }

  get challengesLink() {
    return $('[href="/challenge"]');
  }

  get telephonyLink() {
    return $('[href="/telephony"]');
  }

  get shopLink() {
    return $('[href="/shop"]');
  }

  get adminOrderLink() {
    return $('[href="/admin-order"]');
  }

  get shopLink() {
    return $('[href="/shop"]');
  }

  get ordersLink() {
    return $('[href="/admin-order"]');
  }

  get coinImg() {
    return $('.ml-auto img');
  }

 get achievementsLink() {
    return $('.ml-auto span');
  }

  get userAvatarImg() {
    return $('.ant-avatar');
  }

  get userAvatarName() {
    return $('.ant-dropdown-link');
  }

  get dropDownArrow() {
    return $('span.anticon.anticon-down');
  }

  get dropDownMenuProfile() {
    return $('[data-qa="profile"]');
  }

  get dropDownMenuSettings() {
    return $('[data-qa="settings"]');
  }

  get dropDownMenuOrders() {
    return $('[data-qa="orders"]');
  }

  get dropDownMenuLogOut() {
    return $('[data-qa="logout"]');
  }

  get loginLink() {
    return $('[href="/user/login"]');
  }

  get registerLink() {
    return $('[href="/user/register"]');
  }

  get headerChallenge() {
    return $('.h4.mr-4');
  }

  get headerUniversal() {
    return $('h1');
  }
}

export default new TopMenuPage();
