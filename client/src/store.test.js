import { store, actions } from './store.js';

describe('setMonth', () => {
  beforeEach(() => {
    store.state = { month: 3 };
  });

  describe('with next parameter', () => {
    it('makes month + 1', () => {
      expect(actions.setMonth('next')).toEqual({ month: 4 });
    });
  });

  describe('with previous parameter', () => {
    it('makes month - 1', () => {
      expect(actions.setMonth('prev')).toEqual({ month: 2 });
    });
  });
});

describe('setTab', () => {
  beforeEach(() => {
    store.state = { tab: '내역' };
  });

  describe('with clicked another tab', () => {
    it('makes tab state that another tab', () => {
      expect(actions.setTab('통계')).toEqual({ tab: '통계' });
    });
  });
});