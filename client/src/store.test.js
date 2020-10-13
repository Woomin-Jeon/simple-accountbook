import { store, actions } from './store.js';

import api from './api.js';

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

  describe('with changing to new date', () => {
    it('makes form date state to new date', () => {
      expect(actions.setDate('2020-10-21')).toEqual({ date: '2020-10-21' });
    });
  });
});

describe('setCategory', () => {
  beforeEach(() => {
    store.form = { category: '' };
  });

  describe('with changing to another category', () => {
    it('makes form category state to another category', () => {
      expect(actions.setCategory('문화/여가')).toEqual({ category: '문화/여가' });
    });
  });
});

describe('setPayment', () => {
  beforeEach(() => {
    store.form = { payment: '선택하세요' };
  });

  describe('with changing to another payment', () => {
    it('makes form payment state to another payment', () => {
      expect(actions.setPayment('카드')).toEqual({ payment: '카드' });
    });
  });
});

describe('setAmount', () => {
  beforeEach(() => {
    store.form = { amount: '선택하세요' };
  });

  describe('with \'won\' character', () => {
    it('makes form amount state to new amount', () => {
      expect(actions.setAmount('20000원')).toEqual({ amount: '20,000원' });
    });
  });

  describe('without \'won\' character', () => {
    it('makes form amount state to new amount', () => {
      expect(actions.setAmount('20000')).toEqual({ amount: '20,000원' });
    });
  });
});

describe('setContent', () => {
  beforeEach(() => {
    store.form = { content: '' };
  });

  describe('with changing to new content', () => {
    it('makes form content state to new content', () => {
      expect(actions.setContent('군것질')).toEqual({ content: '군것질' });
    });
  });
});

describe('getItems', () => {
  beforeEach(() => {
    store.breakdown = { items: [] };
    api.getBreakdowns = jest.fn().mockResolvedValue(['item1', 'item2']);
  });

  it('gets all items by user from server', async () => {
    const { items } = await actions.getItems();
    expect(items).toHaveLength(2);
  });
});
