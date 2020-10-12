import ShippingAddressPage from '../../../pageObjects/shippingAddress.page';
import userFake from '../../../testData/userFake';
import ProfilePage from '../../../pageObjects/profile.page';
import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import { userUpdateRole } from '../../../helpers/axios/updateUserRoleByAxios';
import { roles } from '../../../testResult/settings/updatePassword.testResult';
import { userDelete } from '../../../helpers/axios/deleteNewUserByAxios';
import {dataOriginal, dataUpdated} from '../../../testData/shippingAddressUpdate.testData';

before(function () {
  RegisterPage.open();
  browser.maximizeWindow();
  RegisterPage.registerUser(userFake);
  RegisterStep2Page.registerUserStep2(userFake);
  ProfilePage.logout();
  ShippingAddressPage.goToShippingAddressPageAs(userFake.email, userFake.password);
});

describe('UPDATING SHIPPING ADDRESS', function () {
  it('Should verify new user can change the address, after logout the address stays as updated', () => {
    ShippingAddressPage.submitShippingAddress(
      userFake.firstNameUpdated,
      userFake.lastNameUpdated,
      userFake.ShippingStreetAddressUpdated,
      userFake.shippingCityUpdated,
      userFake.shippingPostalCodeUpdated,
      userFake.phoneUpdated,
    );
    ProfilePage.logout();
    ShippingAddressPage.goToShippingAddressPageAs(userFake.email, userFake.password);
    expect(ShippingAddressPage.checkIfTwoObjectsHaveSameData(dataUpdated, ShippingAddressPage.checkFieldsValues())).eq(true);
  });

  describe('Learner can update shipping address, user role will be update to learner', function () {
    before(async () => {
      const res = await userUpdateRole(userFake.email, userFake.password, roles.learner);
      expect(res.success).eq(true);
    });

    it('Should verify learner can change the address, after logout the address stays as updated', () => {
      ShippingAddressPage.submitShippingAddress(
        userFake.firstName,
        userFake.lastName,
        userFake.shippingStreetAddress,
        userFake.shippingCity,
        userFake.shippingPostalCode,
        userFake.phone,
      );
      ProfilePage.logout();
      ShippingAddressPage.goToShippingAddressPageAs(userFake.email, userFake.password);
      expect(ShippingAddressPage.checkIfTwoObjectsHaveSameData(dataOriginal, ShippingAddressPage.checkFieldsValues())).eq(true);
    });
  });

  describe('Student can update shipping address, user role will be update to student', function () {
    before(async () => {
      const res = await userUpdateRole(userFake.email, userFake.password, roles.student);
      expect(res.success).eq(true);
    });

    it('Should verify student can change the address, after logout the address stays as updated', function () {
      ShippingAddressPage.submitShippingAddress(
        userFake.firstNameUpdated,
        userFake.lastNameUpdated,
        userFake.ShippingStreetAddressUpdated,
        userFake.shippingCityUpdated,
        userFake.shippingPostalCodeUpdated,
        userFake.phoneUpdated,
      );
      ProfilePage.logout();
      ShippingAddressPage.goToShippingAddressPageAs(userFake.email, userFake.password);
      expect(ShippingAddressPage.checkIfTwoObjectsHaveSameData(dataUpdated, ShippingAddressPage.checkFieldsValues())).eq(true);
    });
  });

  after('Should delete a user', async () => {
    const res = await userDelete(userFake.email);
    expect(res.success).eq(true);
  });
});
