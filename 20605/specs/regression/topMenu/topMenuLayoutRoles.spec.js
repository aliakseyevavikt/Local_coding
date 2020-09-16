import LoginPage from '../../../../pageObjects/login.page';
import topMenuPage from '../../../../pageObjects/topMenu.page'
import user from '../../../../testData/user';

describe('MAIN ELEMENTS ARE DISPLAYED for LEARNER', function () {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.learner.email, user.learner.password);
    topMenuPage.userAvatarName.isDisplayed();
  });

    it('TC-235 Base Link is displayed', function () {
      expect(topMenuPage.baseLink.isDisplayed()).false;
    });

    it('TC-236 Courses Link is displayed', function () {
      expect(topMenuPage.coursesLink.isDisplayed());
    });

    it('TC-237 Cards Link is displayed', function () {
      expect(topMenuPage.cardsLink.isDisplayed()).false;
    });

    it('TC-238 Diary Link is displayed', function () {
      expect(topMenuPage.diaryLink.isDisplayed());
    });

    it('TC-239 Groups Link is displayed', function () {
      expect(topMenuPage.groupsLink.isDisplayed()).false;
    });

    it('TC-240 Users Link is displayed', function () {
      expect(topMenuPage.usersLink.isDisplayed()).false;
    });

    it('TC-241 Challenges Link is displayed', function () {
      expect(topMenuPage.challengesLink.isDisplayed()).false;
    });

    it('TC-242 Telephony Link is displayed', function () {
      expect(topMenuPage.telephonyLink.isDisplayed()).false;
    });

    it('TC-243 Shop Link is displayed', function () {
      expect(topMenuPage.shopLink.isDisplayed()).false;
    });

    it('TC-244 Orders Link is displayed', function () {
      expect(topMenuPage.ordersLink.isDisplayed()).false;
    });
});

describe('MAIN ELEMENTS ARE DISPLAYED for STUDENT', function () {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.student.email, user.student.password);
    topMenuPage.userAvatarName.isDisplayed();
  });

  it('TC-245 Base Link is displayed', function () {
    expect(topMenuPage.baseLink.isDisplayed()).false;
  });

  it('TC-246 Courses Link is displayed', function () {
    expect(topMenuPage.coursesLink.isDisplayed());
  });

  it('TC-247 Cards Link is displayed', function () {
    expect(topMenuPage.cardsLink.isDisplayed());
  });

  it('TC-248 Diary Link is displayed', function () {
    expect(topMenuPage.diaryLink.isDisplayed());
  });

  it('TC-249 Groups Link is displayed', function () {
    expect(topMenuPage.groupsLink.isDisplayed());
  });

  it('TC-250 Users Link is displayed', function () {
    expect(topMenuPage.usersLink.isDisplayed()).false;
  });

  it('TC-251 Challenges Link is displayed', function () {
    expect(topMenuPage.challengesLink.isDisplayed()).false;
  });

  it('TC-252 Telephony Link is displayed', function () {
    expect(topMenuPage.telephonyLink.isDisplayed()).false;
  });

  it('TC-253 Shop Link is displayed', function () {
    expect(topMenuPage.shopLink.isDisplayed());
  });

  it('TC-254 Orders Link is displayed', function () {
    expect(topMenuPage.ordersLink.isDisplayed()).false;
  });
});

describe('MAIN ELEMENTS ARE DISPLAYED for NEW USER', function () {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.new.email, user.new.password);
    topMenuPage.userAvatarName.isDisplayed();
  });

  it('TC-225 Base Link is displayed', function () {
    expect(topMenuPage.baseLink.isDisplayed()).false;
  });

  it('TC-226 Courses Link is displayed', function () {
    expect(topMenuPage.coursesLink.isDisplayed()).false;
  });

  it('TC-227 Cards Link is displayed', function () {
    expect(topMenuPage.cardsLink.isDisplayed()).false;
  });

  it('TC-228 Diary Link is displayed', function () {
    expect(topMenuPage.diaryLink.isDisplayed()).false;
  });

  it('TC-229 Groups Link is displayed', function () {
    expect(topMenuPage.groupsLink.isDisplayed()).false;
  });

  it('TC-230 Users Link is displayed', function () {
    expect(topMenuPage.usersLink.isDisplayed()).false;
  });

  it('TC-231 Challenges Link is displayed', function () {
    expect(topMenuPage.challengesLink.isDisplayed()).false;
  });

  it('TC-232 Telephony Link is displayed', function () {
    expect(topMenuPage.telephonyLink.isDisplayed()).false;
  });

  it('TC-233 Shop Link is displayed', function () {
    expect(topMenuPage.shopLink.isDisplayed()).false;
  });

  it('TC-234 Orders Link is displayed', function () {
    expect(topMenuPage.ordersLink.isDisplayed()).false;
  });
});
