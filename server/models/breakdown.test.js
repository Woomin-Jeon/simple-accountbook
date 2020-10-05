const {
  getBreakdowns, getBreakdownsByMonth, addBreakdown, deleteBreakdown, updateBreakdown,
} = require('./breakdown');

describe('breakdown', () => {
  const userId = 'test';
  const breakdownId = 'Random_breakdown_id';
  const data = {
    id: breakdownId,
    amount: 30_000,
    content: '친구들과 술 한잔',
    method: '카드',
    come: '지출',
    date: '2020-10-05',
    userId,
    categoryId: 5,
  };
  const updatedData = {
    ...data,
    amount: 20_000,
    content: '친구들과 밥 한끼',
    date: '2020-10-04',
  };

  describe('addBreakdown', () => {
    it('returns true', async () => {
      const result = await addBreakdown(data);

      expect(result).toBe(true);
    });
  });

  describe('getBreakdowns', () => {
    it('returns breakdowns', async () => {
      const breakdowns = await getBreakdowns(userId);

      expect(breakdowns.length > 0).toBe(true);
    });
  });

  describe('getBreakdownsByMonth', () => {
    it('returns breakdowns by month', async () => {
      const month = 10;
      const breakdowns = await getBreakdownsByMonth(userId, month);

      expect(breakdowns.length > 0).toBe(true);
    });
  });

  describe('updateBreakdown', () => {
    it('returns true', async () => {
      const result = await updateBreakdown(updatedData);

      expect(result).toBe(true);
    });
  });

  describe('deleteBreakdown', () => {
    it('returns true', async () => {
      const result = await deleteBreakdown(userId, breakdownId);

      expect(result).toBe(true);
    });
  });
});
