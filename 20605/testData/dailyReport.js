import faker from 'faker';

export const dailyReport = {
  notificationMessageText: 'Diary created\nDiary created',
  tagText: 'I need help',
  dailyReportText: faker.random.words(20),
  moraleSelectorIndex: faker.random.number({ min: 0, max: 10 }),
  hoursSelectorIndex: faker.random.number({ min: 11, max: 21 }),
};
