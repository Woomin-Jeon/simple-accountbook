import { store, actions } from './store.js';

describe('setMonth', () => {
  beforeEach(() => {
    store.state = { month: 3 };
  });

  describe('with next parameter', () => {
    it('returns month + 1', () => {
      expect(actions.setMonth('next')).toEqual({ month: 4 });
    });
  });

  describe('with previous parameter', () => {
    it('returns month - 1', () => {
      expect(actions.setMonth('prev')).toEqual({ month: 2 });
    });
  });
});
