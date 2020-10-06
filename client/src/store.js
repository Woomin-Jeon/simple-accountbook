const initial = {
  month: new Date().getMonth() + 1,
  tab: '내역',
};

export const store = {
  state: {
    month: initial.month,
    tab: initial.tab,
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
};

export const subscriber = new Set();

const updateRendering = () => {
  [...subscriber].forEach(render => render());
};
