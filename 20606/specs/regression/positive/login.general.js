import HomePage from '../../../../pageObjects/home.page';
import LoginPage from '../../../../pageObjects/login.page';
import { loginPage } from '../../../testResult/login.page.expected';
import { registrationPage } from '../../../testResult/registration.page.expected';
import { resetPasswordPage } from '../../../testResult/reset.password.page.expected';
import { homePage } from '../../../testResult/home.page.expected';

describe('CHECK THAT PAGE ELEMENTS ARE DISPLAYED', function () {
  before('', function () {
    LoginPage.open();
  });

  it('TC-19: Should check the Welcome Back title', function () {
    expect(LoginPage.headerLogin.isDisplayed()).to.be.true;
  });

  it('TC-20: Should check the Home page link', function () {
    expect(LoginPage.homePageLink.isDisplayed()).to.be.true;
  });

  it('TC-21: Should check the Email field', function () {
    expect(LoginPage.inputUsername.isDisplayed()).to.be.true;
  });

  it('TC-22: Should check the Password field', function () {
    expect(LoginPage.inputPassword.isDisplayed()).to.be.true;
  });

  it('TC-23: Should check the Login button', function () {
    expect(LoginPage.loginBtn.isDisplayed()).to.be.true;
  });

  it('TC-25: Should check the Create one link', function () {
    expect(LoginPage.registerLink.isDisplayed()).to.be.true;
  });

  it('TC-27: Should check the Reset link', function () {
    expect(LoginPage.resetLink.isDisplayed()).to.be.true;
  });

  it('TC-28: Should check the Google sign-in button', function () {
    expect(LoginPage.loginGoogleBtn.isDisplayed()).to.be.true;
  });

  it('TC-29: Should check the Facebook sign-in button', function () {
    expect(LoginPage.loginFacebookBtn.isDisplayed()).to.be.true;
  });

  it('TC-37: Should check the Email prefix icon ', function () {
    expect(LoginPage.mailIcon.isDisplayed()).to.be.true;
  });

  it('TC-38: Should check the Password prefix icon ', function () {
    expect(LoginPage.lockIcon.isDisplayed()).to.be.true;
  });
});

describe('CHECK THE TEXT OF THE PAGE ELEMENTS', function () {
  it('TC-53: Should verify the Welcome back text', function () {
    expect(LoginPage.headerLogin.getText()).to.be.equal(loginPage.header);
  });

  it('TC-54: Should verify the Home page link text', function () {
    expect(LoginPage.homePageLink.getText()).to.be.equal(loginPage.lnkHomePage);
  });

  it('TC-35: Should verify the Email field text ', function () {
    expect(LoginPage.inputUsername.getAttribute('placeholder')).to.be.equal(loginPage.emailPlaceholder);
  });

  it('TC-36: Should verify the Password field text ', function () {
    expect(LoginPage.inputPassword.getAttribute('placeholder')).to.be.equal(loginPage.passwordPlaceholder);
  });

  it('TC-57: Should verify the Login button text', function () {
    expect(LoginPage.loginBtn.getText()).to.be.equal(loginPage.btnText);
  });

  it('TC-58: Should verify the Google button text', function () {
    expect(LoginPage.loginGoogleBtn.getText()).to.be.equal(loginPage.btnGoogle);
  });

  it('TC-59: Should verify the Facebook button text', function () {
    expect(LoginPage.loginFacebookBtn.getText()).to.be.equal(loginPage.btnFacebook);
  });

  it('TC-24: Should check the Register text', function () {
    expect(LoginPage.txtCreateOne.getText()).to.be.equal(loginPage.txtRegister);
  });

  it('TC-26: Should check the Reset password text ', function () {
    expect(LoginPage.txtResetIt.getText()).to.be.equal(loginPage.txtReset);
  });
});

describe('CHECK THE REDIRECTION', function () {
  it('TC-30: Should check the Register link ', function () {
    expect(LoginPage.goToRegisterPage().headerRegister.getText()).to.be.equal(registrationPage.txtHeader);
    browser.back();
  });

  it('TC-31: Should check the Reset password page', function () {
    expect(LoginPage.goToResetPasswordPage().header.getText()).to.be.equal(resetPasswordPage.txtHeader);
    browser.back();
  });

  it('TC-34: Should  check the Home page link', function () {
    LoginPage.homePageLink.click();
    expect(HomePage.header.getText()).to.be.equal(homePage.header);
  });
});
