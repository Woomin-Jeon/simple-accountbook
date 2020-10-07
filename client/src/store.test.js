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
    it('makes tab state to another tab', () => {
      expect(actions.setTab('통계')).toEqual({ tab: '통계' });
    });
  });
});

describe('setType', () => {
  beforeEach(() => {
    store.form = { type: '지출' };
  });

  describe('with clicked another type', () => {
    it('makes form type state to another type', () => {
      expect(actions.setType('수입')).toEqual({ type: '수입' });
    });
  });
});

describe('setDate', () => {
  beforeEach(() => {
    store.form = { date: '2020-01-01' };
  });

  describe('with changing to another date', () => {
    it('makes form date state to another date', () => {
      expect(actions.setDate('2020-10-21')).toEqual({ date: '2020-10-21' });
    });
  });
});

describe('setCategory', () => {
  beforeEach(() => {
    store.form = { category: '선택하세요' };
  });

  describe('with changing to another category', () => {
    it('makes form category state to another category', () => {
      expect(actions.setCategory('문화/여가')).toEqual({ category: '문화/여가' });
    });
  });
});
