import HomePage from '../../pageObjects/home.page';
import { homePage } from '../../testResult/homePage.testResult';

describe('HOME PAGE REGRESSION', function() {
  before(() => {
    HomePage.open();
  });
  it('Header is displayed', function() {
    expect(HomePage.header.isDisplayed());
  });

  it('Header has the correct text', function() {
    expect(HomePage.header.getText()).eq(homePage.header);
  });

  it('Logo is displayed', function() {
    expect(HomePage.homePageLink.isDisplayed());
  });

  it('Login button is displayed', function() {
    expect(HomePage.loginLink.isDisplayed());
  });

  it('Register button is displayed', function() {
    HomePage.open();
    expect(HomePage.registerLink.isDisplayed());
  });
});
