import TopMenuPage from '../../../pageObjects/topMenu.page';
import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/user';
import HomePage from '../../../pageObjects/home.page';
import expected from '../../data/expected.json';

before(() => {
  LoginPage.open();
  LoginPage.login(user.admin.email, user.admin.password);
});

describe('DASHBOARD', () => {
  it('Logo is displayed', () => {
    TopMenuPage.logo.isDisplayed().true;
  });

  it('Home page link is displayed', () => {
    TopMenuPage.homePageLink.isDisplayed().true;
  });

  it('Home page link redirect user to the home page', () => {
    TopMenuPage.homePageLink.click();
    expect(HomePage.header.getText()).eq(expected.HomePageHeader.h1);
  });
});

describe('TOP MENU LINKS/BUTTONS ARE DISPLAYED', () => {
  it('Courses is displayed', () => {
    TopMenuPage.coursesLink.isDisplayed().true;
  });

  it('Cards is displayed', () => {
    TopMenuPage.cardsLink.isDisplayed().true;
  });

  it('Diary is displayed', () => {
    TopMenuPage.diaryLink.isDisplayed().true;
  });

  it('Groups is displayed', () => {
    TopMenuPage.groupsLink.isDisplayed().true;
  });

  it('Users is displayed', () => {
    TopMenuPage.usersLink.isDisplayed().true;
  });

  it('Challenges is displayed', () => {
    TopMenuPage.challengesLink.isDisplayed().true;
  });

  it('Telephony is displayed', () => {
    TopMenuPage.telephonyLink.isDisplayed().true;
  });

  it('Orders is displayed', () => {
    TopMenuPage.ordersLink.isDisplayed().true;
  });
});
describe('TOP MENU LINKS/BUTTONS ARE CLICKABLE', () => {
  it('Courses link redirect user to the Courses Dashboard', () => {
    TopMenuPage.coursesLink.click();
    expect(TopMenuPage.headerUniversal.getText()).eq(expected.topMenuDashboards.courses);
  });

  it('Cards link redirect user to the Cards Dashboard', () => {
    TopMenuPage.cardsLink.click();
    expect(TopMenuPage.headerUniversal.getText()).eq(expected.topMenuDashboards.cards);
  });

  it('Diary link redirect user to the Diary Dashboard', () => {
    TopMenuPage.diaryLink.click();
    expect(TopMenuPage.headerUniversal.getText()).eq(expected.topMenuDashboards.diary);
  });

  it('Groups link redirect user to the Groups Dashboard', () => {
    TopMenuPage.groupsLink.click();
    expect(TopMenuPage.headerUniversal.getText()).eq(expected.topMenuDashboards.groups);
  });

  it('Users link redirect user to the Users Dashboard', () => {
    TopMenuPage.usersLink.click();
    expect(TopMenuPage.headerUniversal.getText()).eq(expected.topMenuDashboards.users);
  });

  it('Challenges link redirect user to the Challenges Dashboard', () => {
    TopMenuPage.challengesLink.click();
    expect(TopMenuPage.headerChallenge.getText()).eq(expected.topMenuDashboards.challenge);
  });

  it('Telephony link redirect user to the Telephony Dashboard', () => {
    TopMenuPage.telephonyLink.click();
    expect(TopMenuPage.headerUniversal.getText()).eq(expected.topMenuDashboards.telephony);
  });

  it('Shop link redirect user to the Shop Dashboard', () => {
    TopMenuPage.shopLink.click();
    expect(TopMenuPage.headerUniversal.getText()).eq(expected.topMenuDashboards.shop);
  });

  it('Orders link redirect user to the Orders Dashboard', () => {
    TopMenuPage.adminOrderLink.click();
    expect(TopMenuPage.headerUniversal.getText()).eq(expected.topMenuDashboards.orders);
  });
});
describe('COINS and ACHIEVEMENTS ', () => {
  it('Coins link (coin image) redirect user to the Achievements Page', () => {
    TopMenuPage.coinImg.click();
    expect(TopMenuPage.headerUniversal.getText()).eq(expected.topMenuDashboards.achievements);
  });

  it('Coins link (coin quantity) redirect user to the Achievements Page', () => {
    TopMenuPage.achievementsLink.click();
    expect(TopMenuPage.headerUniversal.getText()).eq(expected.topMenuDashboards.achievements);
  });
});
