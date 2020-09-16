import RegisterPage from '../../../pageObjects/register.page';
import { user } from '../testData/users';
import { registerDataStep2 } from '../../../20603/data/registerUser';
import RegisterStep2 from '../../../pageObjects/registerStep2.page';

describe('New user registration Negative ', () => {
  before(() => {
    RegisterPage.open();
  });

  it('TC-013 Check if email has incorrect format ', function () {
    RegisterPage.email.setValue();
    expect(RegisterPage.inputFieldErrorMessages).to.exist;
  });

  it('TC-016 Check if error message appears when email has incorrect format ', function () {
    RegisterPage.email.setValue(user.incorrectEmail);
    expect(RegisterPage.errorMessage).to.exist;
  });

  it('TC-023 Check IF phone number error message appears ', function () {
    RegisterStep2.open();
    RegisterStep2.phoneNumber.setValue(user.incorrectPhone);
    expect(RegisterStep2.errorMessages).to.exist;
  });
});
