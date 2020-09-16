import LoginPage from '../../../../pageObjects/login.page';
import user from '../../../../testData/user';
import {anyNumbers, anySymbols, upperLowerLetters} from "../../../testData/login";

describe('LOGIN PAGE (FUNCTIONAL)', function () {
    before(() => {
        LoginPage.open();
    });
    it('TC-032 should verify that Email field accept any letters (Upper and lower)', function () {
        LoginPage.login(upperLowerLetters.email, user.admin.password);
        expect(LoginPage.loginBtn.isDisplayed()).true;
    });
    it('TC-033 should verify that Email field accept any numbers', function () {
        browser.refresh();
        LoginPage.login(anyNumbers.email, user.admin.password);
        expect(LoginPage.loginBtn.isDisplayed()).true;
    });
    it('TC-034 should verify that Email field accepts any symbols', function () {
        browser.refresh();
        LoginPage.login(anySymbols.email, user.admin.password);
        expect(LoginPage.loginBtn.isDisplayed()).true;
    });

    it('TC-035 should verify that Password field accept any letters (Upper and lower)', function () {
        browser.refresh();
        LoginPage.login(user.admin.email, upperLowerLetters.password);
        expect(LoginPage.loginBtn.isDisplayed()).true;
    });
    it('TC-036 should verify that Password field accepts any numbers', function () {
        browser.refresh();
        LoginPage.login(user.admin.email, anyNumbers.password);
        expect(LoginPage.loginBtn.isDisplayed()).true;
    });
    it('TC-037 should verify that Password field accepts any symbols', function () {
        browser.refresh();
        LoginPage.login(user.admin.email, anySymbols.password);
        expect(LoginPage.loginBtn.isDisplayed()).true;
    });

});
