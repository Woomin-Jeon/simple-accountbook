import { getCurrentMonth, getCurrentDate } from './util.js';

const initial = {
  month: getCurrentMonth(),
  tab: '내역',
  type: '지출',
  date: getCurrentDate(),
  category: '선택하세요',
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
  },
};

export const dispatch = (key, action) => {
  store[key] = action();

  updateRendering();
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
};

export const subscriber = new Set();

const updateRendering = () => {
  [...subscriber].forEach(render => render());
};
