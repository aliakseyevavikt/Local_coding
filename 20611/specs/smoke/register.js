import RegisterPage from '../../../pageObjects/register.page';
import { user } from '../testData/users';
import RegisterPageStep2 from '../../../pageObjects/registerStep2.page';
import Profile from '../../../pageObjects/profile.page';

describe('New user registration page', () => {
  before(() => {
    RegisterPage.open();
  });

  it('TC-024 Check if user is able to move to Register Step 2 page', function () {
    RegisterPage.registerUser(user);
    expect(RegisterPageStep2.headerRegisterStep2.getText()).eq(
      `Dear ${user.firstName} ${user.lastName}!\nPlease complete these fields`,
    );
  });

  it('TC-025 Check if user is able to complete the registration process', function () {
    RegisterPageStep2.registerUserStep2(user);
    expect(Profile.getLoginConfirmation()).eq(`${user.firstName} ${user.lastName}`);
  });
});
