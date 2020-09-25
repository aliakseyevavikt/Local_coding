import faker from 'faker';

export const dailyReportTestData = {
  notificationMessageText: 'Diary created\nDiary created',
  tagText: 'I need help',
  dailyReportText: faker.random.words(20),
  moraleSelectorIndexMax: 0,
  moraleSelectorIndexMin: 10,
  hoursSelectorIndexMin: 11,
  hoursSelectorIndexMax: 18,
};
