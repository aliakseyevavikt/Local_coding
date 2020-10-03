import LoginPage from '../../pageObjects/login.page';
import TopMenuPage from '../../pageObjects/topMenu.page';
import user from '../../testData/userRoles';
import waitTime from '../../testData/waitTimes';
import { loginPageTestResult } from '../../testResult/loginPage.testResult';

describe('LOGOUT FUNCTIONALITY SMOKE', function() {
  for (let property in user) {

    before(() => {
      LoginPage.open();
      LoginPage.login(user[property].email, user[property].password);
      TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
      TopMenuPage.dropDownArrow.click();
      TopMenuPage.dropDownMenuLogOut.click();
      LoginPage.inputUsername.waitForDisplayed({ timeout: waitTime.WAIT_TIME_LONG });
    });

    it(`${property} can logout`, function() {
      expect(LoginPage.headerLogin.getText()).eq(loginPageTestResult.header);
    });
  }
});