import {
  getCurrentMonth, getCurrentDate, splitByThousand,
} from './util.js';

import api from './api.js';

const initial = {
  month: getCurrentMonth(),
  tab: '내역',
  type: '지출',
  date: getCurrentDate(),
  category: '',
  payment: '',
  amount: '0원',
  content: '',
  items: [],
  incomeFilter: true,
  outcomeFilter: true,
};

export const store = {
  state: {
    month: initial.month,
    tab: initial.tab,
  },
  form: {
    type: initial.type,
    date: initial.date,
    category: initial.category,
    payment: initial.payment,
    amount: initial.amount,
    content: initial.content,
  },
  breakdown: {
    items: initial.items,
    incomeFilter: initial.incomeFilter,
    outcomeFilter: initial.outcomeFilter,
  },
};

export const dispatch = async (key, action) => {
  store[key] = await action();

  observer.update();
};

export const actions = {
  setMonth(direction) {
    const { state } = store;
    const month = direction === 'next' ? state.month + 1 : state.month - 1;

    return { ...state, month };
  },
  setTab(tab) {
    const { state } = store;

    return { ...state, tab };
  },
  setType(type) {
    const { form } = store;

    return { ...form, type };
  },
  setDate(date) {
    const { form } = store;

    return { ...form, date };
  },
  setCategory(category) {
    const { form } = store;

    return { ...form, category };
  },
  setPayment(payment) {
    const { form } = store;

    return { ...form, payment };
  },
  setAmount(value) {
    const { form } = store;

    const characters = value.split('');
    const won = characters[characters.length - 1] === '원' ? '' : '원';
    const amount = splitByThousand(value) + won;

    return { ...form, amount };
  },
  setContent(content) {
    const { form } = store;

    return { ...form, content };
  },
  async getItems() {
    const { breakdown } = store;

    const { breakdowns: items } = await api.getBreakdowns();

    return { ...breakdown, items };
  },
  toggleIncomeFilter() {
    const { breakdown } = store;

    return { ...breakdown, incomeFilter: !breakdown.incomeFilter };
  },
  toggleOutcomeFilter() {
    const { breakdown } = store;

    return { ...breakdown, outcomeFilter: !breakdown.outcomeFilter };
  },
};

export const observer = {
  renderers: [],

  subscribe(path, renderer) {
    this.renderers.push({ path, renderer });
  },

  unsubscribe(path) {
    this.renderers = this.renderers.filter(renderer => renderer.path !== path);
  },

  update() {
    this.renderers.forEach(({ renderer }) => renderer());
  },
};
