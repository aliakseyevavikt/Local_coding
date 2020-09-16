import loginPage from '../../../pageObjects/login.page';
import settingsProfile from '../../../pageObjects/settingsProfile.page';
import userDate from '../../../testData/user';
import expectedDate from '../../data/expected.json';
import fakerData from '../../data/fakerData'

describe('"Profile" contains Input Fields and IF named appropriate', () => {
  before(() => {
    loginPage.open();
    loginPage.login(userDate.admin.email,userDate.admin.password);
    settingsProfile.open(fakerData.firstName,fakerData.lastName);
  });
  it('check "Profile" is chosen from the menu ', function () {});
  it('TC-10-02 Verify that First Name input field named "First Name"', function () {
    expect(settingsProfile.firstNameTitle)eq(expectedDate.profile.firstNameIF)
  });
  //ant-menu-item ant-menu-item-selected
});


