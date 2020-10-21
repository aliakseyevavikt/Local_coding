import RegisterPage from '../../pageObjects/register.page';
import RegisterStep2Page from '../../pageObjects/registerStep2.page';
import LoginPage from '../../pageObjects/login.page';
import TopMenu from '../../pageObjects/topMenu.page';
import ShopPage from '../../pageObjects/shop.page';
import userFake from '../../testData/userFake';
import waitTime from '../../testData/waitTimes';
import { shopData, cardData } from '../../testData/shop.testData';
import { userDelete } from '../../helpers/axios/deleteNewUserByAxios';

describe('SHOP COURSES BY NEW USER', function () {
  before(() => {
    RegisterPage.open();
    browser.maximizeWindow();
    RegisterPage.registerUser(userFake);
    RegisterStep2Page.registerUserStep2(userFake);
    LoginPage.open();
    LoginPage.login(userFake.email, userFake.password);
    TopMenu.shopLink.click();
    browser.waitUntil(() => ShopPage.listOfCourses[ShopPage.listOfCourses.length - 1].isDisplayed() === true, {
      timeout: waitTime.WAIT_TIME_MEDIUM,
      timeoutMsg: 'Not all courses are displayed',
    });
  });

  it('A user should be able to start checkout by clicking on the buy btn', function () {
    ShopPage.buyBtns[1].click();
    browser.waitUntil(() => browser.getTitle().includes(shopData.h1) === true, {
      timeout: waitTime.WAIT_TIME_MEDIUM,
      timeoutMsg: 'Something went wrong when clicking buy btn',
    });
  });

  it('CHECKOUT: a user should fill out the card info', function () {
    ShopPage.checkoutUS(
      userFake.email,
      cardData.cardNumber,
      cardData.cardExpDate,
      cardData.cardCvc,
      userFake.firstName + ' ' + userFake.lastName,
      cardData.cardZipCode,
    );
    browser.waitUntil(() => TopMenu.shopLink.isDisplayed() == true, {
      timeout: waitTime.WAIT_TIME_LONG,
      timeoutMsg: 'Issues after card data is passed',
    });
    browser.waitUntil(() => ShopPage.h1.getText().includes(shopData.paymentSuccess) == true, {
      timeout: waitTime.WAIT_TIME_LONGEST,
      timeoutMsg: 'Issues obtaining successful payment confirmation',
    });
  });
});

after('Should delete a user', async () => {
  const res = await userDelete(userFake.email);
  console.log('delete ' + res.success);
  expect(res.success).eq(true);
});
