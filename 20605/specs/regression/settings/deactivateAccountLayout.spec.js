import LoginPage from '../../../../pageObjects/login.page';
import user from '../../../../testData/user';
import ProfilePage from '../../../../pageObjects/profile.page';
import TopMenuPage from '../../../../pageObjects/topMenu.page';
import DeactivateAccountPage from '../../../../pageObjects/settingsDeactivateAccount.page';
import { deactivateSettings } from '../../../testResult/deactivateAccountSettings';

before(() => {
  LoginPage.open();
  LoginPage.login(user.admin.email, user.admin.password);
  ProfilePage.dropDownUserMenu.click();
  TopMenuPage.dropDownMenuSettings.click();
  DeactivateAccountPage.deactivateAccountTab.click();
});

describe('ELEMENTS ARE PRESENT AND HAVE CORRECT TEXT', function () {
  it('TC-328 deactivateAccountLink should be displayed', function () {
    expect(DeactivateAccountPage.deactivateAccountTab.isDisplayed());
  });

  it('TC-329 deactivateAccountLink has correct text', function () {
    expect(DeactivateAccountPage.deactivateAccountTab.getText()).eq(deactivateSettings.deactivateAccountTab);
  });

  it('TC-330 header should be displayed', function () {
    expect(DeactivateAccountPage.accountDeactivationHeader.isDisplayed());
  });

  it('TC-331 header has correct text', function () {
    expect(DeactivateAccountPage.accountDeactivationHeader.getText()).eq(deactivateSettings.headerH2);
  });

  it('TC-334 deactivateBtn should be displayed', function () {
    expect(DeactivateAccountPage.deactivateBtn.isDisplayed());
  });

  it('TC-335 deactivateBtn has correct text', function () {
    expect(DeactivateAccountPage.deactivateBtn.getText()).eq(deactivateSettings.deactivateBtn);
  });

  it('TC-332 textDescription should be displayed', function () {
    expect(DeactivateAccountPage.textDescription.isDisplayed());
  });

  it('TC-333 textDescription has correct text', function () {
    expect(DeactivateAccountPage.textDescription.getText()).eq(deactivateSettings.textDescription);
  });
});
