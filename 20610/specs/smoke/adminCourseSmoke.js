import TopMenuPage from '../../../pageObjects/topMenu.page';
import LoginPage from '../../../pageObjects/login.page';
import user from '../../../testData/user';
import {newUser} from '../../../20610/data/fakeData';
import AdminCourseCreation from '../../../pageObjects/adminCourseCreation'

describe('ADMIN TOP MENU SMOKE', () => {
  before('Before', () => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
  });

  describe('Successful course creation by Admin', () => {
    it('Admin should be able to create a Course', () => {
      TopMenuPage.coursesLink.click();
      browser.waitUntil(()=> (AdminCourseCreation.coursesList[AdminCourseCreation.coursesList.length-1]).isDisplayed() === true);
      let testsQTY = AdminCourseCreation.testsQTY.length
      AdminCourseCreation.createCourseBtn.click();
      expect(AdminCourseCreation.createNewCourseText.isDisplayed()).true;
      AdminCourseCreation.courseNameField.setValue(newUser.word);
      AdminCourseCreation.courseDescriptionField.setValue(newUser.about);
      AdminCourseCreation.accessTypeField.click();
      AdminCourseCreation.accessTypeDropdown[1].click();
      AdminCourseCreation.createBtn.click();
      //sometimes work without a pause, but with the pause it's more stable, waitUntil only work from time to time
      browser.pause(3000)
      browser.waitUntil(()=> (AdminCourseCreation.coursesList[AdminCourseCreation.coursesList.length-1]).isDisplayed() === true);
      let newTestsQty = AdminCourseCreation.testsQTY.length;
      expect((((AdminCourseCreation.coursesList[AdminCourseCreation.coursesList.length-2]).getText()).split('\n'))[0]).eq(newUser.word);
      expect(newTestsQty - testsQTY === 1).true;
     });
  });
});
