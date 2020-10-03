import LoginPage from '../../pageObjects/login.page';
import ProfilePage from '../../pageObjects/profile.page';
import TopMenuPage from '../../pageObjects/topMenu.page';
import user from '../../testData/userRoles';
import waitTime from '../../testData/waitTimes';


describe('LOGIN FUNCTIONALITY', function() {
  for (let property in user) {
    before(() => {
      LoginPage.open();
      LoginPage.login(user[property].email, user[property].password);
      TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
    });

    it(`${property} can login`, function() {
      expect(ProfilePage.headerProfile.getText()).eq(user[property].firstName + ' ' + user[property].lastName);
    });
  }
});
