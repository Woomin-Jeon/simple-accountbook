const { addBreakdown } = require('./breakdown');

const { getRandomString } = require('../utils/generator');

describe('breakdown', () => {
  describe('addBreakdown', () => {
    describe('with success', () => {
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
      });
    });
  });
});
