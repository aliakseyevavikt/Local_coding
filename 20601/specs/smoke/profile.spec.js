import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../pageObjects/profile.page';
import { textLogin, Admin } from '../../data/fakerData';
import { textProfile } from '../../data/profile.data';


xdescribe('VERIFY SUCCESSFUL LOGIN', () => {
  it('should register new user and verify login is successful', function () {
    LoginPage.open();
    LoginPage.login(username, password);
    browser.pause(3000);
    // browser.waitUntil(() => MainPage.mainPageHeader.isDisplayed());
    expect(ProfilePage.profilePageHeader.getText()).contains(textProfile.header);
  });

  it('should verify that link Users is Displayed', function () {
    expect(ProfilePage.usersBtn.isDisplayed()).true;
  });

  it('should verify that link User is clickable', function () {
    ProfilePage.usersBtn.click();
    expect(ProfilePage.usersPageHeader.getText()).contains(textProfile.headerUsers);
  });

  it('should Create day report', function () {
    ProfilePage.returnToProfilePage()
    ProfilePage.createDayReport();
    expect(ProfilePage.daylyReportsHeader.getText()).contains(textProfile.dailyReportsHeaderText);
  });

  xit('should logout from Profile Page and return to the Log In Page', function () {
    ProfilePage.dropDownLink.click();
    ProfilePage.dropDownList[2].click();
    browser.pause(3000);
    expect(LoginPage.header.getText()).contains(textLogin.header);
  });



});