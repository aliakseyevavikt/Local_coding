import loginPage from '../../../pageObjects/login.page';
import userDate from '../../data/fakerData';
import settingsProfilePage from '../../../pageObjects/settingsProfile.page';

describe('change First Names and Last Name', () => {
  beforeEach(() => {
    settingsProfilePage.open();
  });

  it('TC-10-20 changing First name and Last name successfully done', function () {
    settingsProfilePage.changeFirstNameAndLastName(userDate.firstName, userDate.lastName);
  });
});
