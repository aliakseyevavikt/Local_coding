// import DailyReportsPage from '../../pageObjects/dailyReports.page';
// import user from '../../testData/userRoles';
// import LoginPage from '../../pageObjects/login.page';
// import { dailyReportTestData } from '../../testData/dailyReport.testData';
// import { createDailyReport } from '../../helpers/createDailyReport.js';
//
//
// describe('DAILY REPORTS FUNCTIONALITY FOR LEARNER', function() {
//   before(() => {
//     LoginPage.open();
//     LoginPage.login(user.learner.email, user.learner.password);
//   });
//
//   // it('Daily report can be created by learner', function() {
//   //   let dailyReportsQty = +DailyReportsPage.reportQty.getText();
//   //   createDailyRep(dailyReportTestData.moraleSelectorIndex, dailyReportTestData.hoursSelectorIndex, dailyReportTestData.dailyReportText);
//   //   expect(+DailyReportsPage.reportQty.getText()).eq(dailyReportsQty + 1);
//   // });
//
//   // it('Created daily report contains selected by learner checkbox "I need help"', function() {
//   //   // browser.waitUntil(() => DailyReportsPage.dailyReportTag[0].isDisplayed());
//   //
//   //   expect(DailyReportsPage.dailyReportTag[0].getText()).eq(dailyReportTestData.tagText);
//   // });
//
//   it('Learner can create daily report (Created daily report contains text created by learner)', function() {
//     createDailyReport(dailyReportTestData.moraleSelectorIndexMax, dailyReportTestData.hoursSelectorIndexMax, dailyReportTestData.dailyReportText);
//     expect(DailyReportsPage.newDailyReportCreatedText.getText()).eq(dailyReportTestData.dailyReportText);
//   });
// });
//
// // describe('DAILY REPORTS FUNCTIONALITY FOR STUDENT', function() {
// //   before(() => {
// //     LoginPage.open();
// //     LoginPage.login(user.student.email, user.student.password);
// //   });
// //
// //   it('daily report can be created by student', function() {
// //     let dailyReportsQty = +DailyReportsPage.reportQty.getText();
// //     createDailyRep(dailyReportTestData.moraleSelectorIndex, dailyReportTestData.hoursSelectorIndex, dailyReportTestData.dailyReportText);
// //     expect(+DailyReportsPage.reportQty.getText()).eq(dailyReportsQty + 1);
// //   });
// //
// //   it('created daily report contains selected by student checkbox "I need help"', function() {
// //     // browser.waitUntil(() => DailyReportsPage.dailyReportTag[0].isDisplayed());
// //     expect(DailyReportsPage.dailyReportTag[0].getText()).eq(dailyReportTestData.tagText);
// //   });
// //
// //   it('created daily report contains text created by student', function() {
// //     expect(DailyReportsPage.newDailyReportCreatedText.getText()).eq(dailyReportTestData.dailyReportText);
// //   });
// // });
