import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import {expect} from "chai";
import {data} from "../../data/registerUser";

describe('USER REGISTER', () => {

  describe('Submitting Register Form', () => {
    before(() => {
      RegisterPage.open();
    });

    it('TCS-003 - Check if user registration is successful and user able to see registration Part2', function () {
      RegisterPage.registerUser(data);

      expect(RegisterStep2Page.headerRegisterStep2.getText()).eq(`Dear ${data.firstName} ${data.lastName}!\nPlease complete these fields`,
      );
    });

  });
})

