
import {expect} from 'chai';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import RegisterPage from '../../../pageObjects/register.page'
import {data} from "../../data/registerUser";
import ProfilePage from '../../../pageObjects/profile.page'

describe('USER REGISTER STEP 2', function () {
  before(()=>{
    RegisterPage.open();
    RegisterPage.registerUser(data);
  })

  it('TCS-009 - User can add information in phone field and click submit button', function () {
    RegisterStep2Page.registerUserStep2(data);
    browser.waitUntil(()=>
      expect(ProfilePage.headerProfile.getText()).eq(`${data.firstName} ${data.lastName}`));
  });

});

describe('USER REGISTER STEP 2', function () {
  before(()=>{
    RegisterStep2Page.open();
  })

  it('TCS-010 - User can skip RegisterPage2 ', function () {
    RegisterStep2Page.skipBtn.click()
    browser.waitUntil(()=>
      expect(ProfilePage.headerProfile.getText()).eq(`${data.firstName} ${data.lastName}`));
  });

});




