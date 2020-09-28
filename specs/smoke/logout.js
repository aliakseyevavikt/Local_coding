import LoginPage from '../../pageObjects/login.page';
import TopMenuPage from '../../pageObjects/topMenu.page';
import user from '../../testData/userRoles';
import waitTime from '../../testData/waitTimes';
import { loginPageTestResult } from '../../testResult/loginPage.testResult';

describe('LOGOUT FUNCTIONALITY SMOKE', function() {
  before(() => {
    LoginPage.open();
  });

  it('NEW USER can logout', function() {
    LoginPage.login(user.new.email, user.new.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    TopMenuPage.dropDownArrow.click();
    TopMenuPage.dropDownMenuLogOut.click();
    LoginPage.inputUsername.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    expect((LoginPage.headerLogin).getText()).eq(loginPageTestResult.header);
  });

  it('ADMIN can logout', function() {
    LoginPage.login(user.admin.email, user.admin.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    TopMenuPage.dropDownArrow.click();
    TopMenuPage.dropDownMenuLogOut.click();
    LoginPage.inputUsername.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    expect((LoginPage.headerLogin).getText()).eq(loginPageTestResult.header);
  });

  it('LEARNER can logout', function() {
    LoginPage.login(user.learner.email, user.learner.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    TopMenuPage.dropDownArrow.click();
    TopMenuPage.dropDownMenuLogOut.click();
    LoginPage.inputUsername.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    expect((LoginPage.headerLogin).getText()).eq(loginPageTestResult.header);
  });

  it('STUDENT can logout', function() {
    LoginPage.login(user.student.email, user.student.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    TopMenuPage.dropDownArrow.click();
    TopMenuPage.dropDownMenuLogOut.click();
    LoginPage.inputUsername.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    expect((LoginPage.headerLogin).getText()).eq(loginPageTestResult.header);
  });
});
