import HomePage from '../../pageObjects/home.page';
import { homePageTestResult } from '../../testResult/homePage.testResult';

describe('HOME PAGE REGRESSION', function() {
  before(() => {
    HomePage.open();
  });

  it('Logo is displayed', function() {
    expect(HomePage.homePageLink.isDisplayed());
  });

  it('Site name has the correct text', function() {
    expect(HomePage.homePageLink.getText()).eq(homePageTestResult.siteName);
  });

  it('Header is displayed', function() {
    expect(HomePage.header.isDisplayed());
  });

  it('Header has the correct text', function() {
    expect(HomePage.header.getText()).eq(homePageTestResult.header);
  });

  it('Image is displayed', function() {
    expect(HomePage.image.isDisplayed());
  });

  it('Login button is displayed', function() {
    expect(HomePage.loginBtn.isDisplayed());
  });

  it('Register button is displayed', function() {
    HomePage.open();
    expect(HomePage.registerBtn.isDisplayed());
  });
});
