import {
  getCurrentMonth, getCurrentDate, splitByThousand,
} from './util.js';

const initial = {
  month: getCurrentMonth(),
  tab: '내역',
  type: '지출',
  date: getCurrentDate(),
  category: '',
  payment: '',
  amount: '0원',
  content: '',
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
};

export const dispatch = (key, action) => {
  store[key] = action();

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
};

export const observer = {
  renderers: [],

  subscribe(renderer) {
    this.renderers.push({ path: location.pathname, renderer });
  },

  unsubscribe(path) {
    this.renderers = this.renderers.filter(renderer => renderer.path !== path);
  },

  update() {
    console.log(this.renderers);
    this.renderers.forEach(({ renderer }) => renderer());
  },
};
