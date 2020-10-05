const { getBreakdowns, addBreakdown, deleteBreakdown } = require('./breakdown');

const { getRandomString } = require('../utils/generator');

describe('breakdown', () => {
  let breakdownId;

  describe('getBreakdowns', () => {
    it('returns breakdowns', async () => {
      const userId = 'boost';
      const breakdowns = await getBreakdowns(userId);

      expect(breakdowns.length > 0).toBe(true);
    });
  });

  describe('addBreakdown', () => {
    it('returns true', async () => {
      const parameters = {
        id: getRandomString(),
        amount: 30_000,
        content: '친구들과 술 한잔',
        method: '카드',
        come: '지출',
        date: '2020-10-05',
        userId: 'test',
        categoryId: 5,
      };

      const result = await addBreakdown(parameters);

      expect(result).toBe(true);

      breakdownId = parameters.id;
    });
  });

  describe('deleteBreakdown', () => {
    it('returns true', async () => {
      const userId = 'test';
      const result = await deleteBreakdown(userId, breakdownId);

      expect(result).toBe(true);
    });
  });
});
