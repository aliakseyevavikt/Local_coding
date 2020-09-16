import RegisterPage from '../../../../pageObjects/register.page'
import user from '../../../../testData/user';
import { errorRegMessage } from '../../../testResult/registration.page.expected'
import waitTime from '../../../../testData/waitTimes';

describe('Registration should be denied by the system', () => {
  before(()=> {
    RegisterPage.open();
  });

  it('TLC-344 should fill out fields and submit form', () => {
    RegisterPage.registerUser(user.new);
    RegisterPage.agreementCheckBox.click();
    RegisterPage.registerBtn.click();
    RegisterPage.errorMessage.waitForDisplayed(waitTime.WAIT_TIME_MEDIUM);
    expect(RegisterPage.errorMessage.getText()).eq(errorRegMessage.emailExist);

  });
});
