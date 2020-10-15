import TopMenuPage from '../../../pageObjects/topMenu.page';
import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/userRoles';
import userFake from '../../../testData/userFake';
import AdminCourseCreation from '../../../pageObjects/adminCourseCreation';
import waitTime from '../../../testData/waitTimes';

describe('ADMIN TOP MENU SMOKE', function () {
  before('Before', function () {
    LoginPage.open();
    browser.maximizeWindow();
    LoginPage.login(user.admin.email, user.admin.password);
  });

  describe('Successful course creation by Admin', function () {
    it('Admin should be able to create a Course', function () {
      TopMenuPage.coursesLink.click();
      browser.waitUntil(() => AdminCourseCreation.coursesList[AdminCourseCreation.coursesList.length - 1].isDisplayed() === true);
      let testsQTY = AdminCourseCreation.testsQTY.length;
      AdminCourseCreation.createCourse(userFake.word, userFake.message, 1);
      browser.waitUntil(() => testsQTY + 1 == AdminCourseCreation.testsQTY.length, {
        timeout: waitTime.WAIT_TIME_SHORT,
        timeoutMsg: 'Something went wrong',
      });
    });
  });
});
