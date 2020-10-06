const initial = {
  month: new Date().getMonth() + 1,
};

export const store = {
  state: {
    month: initial.month,
  },
};

export const actions = {
  setMonth(direction) {
    const { state } = store;
    const month = direction === 'next' ? state.month + 1 : state.month - 1;

    store.state = { ...state, month };

    updateRendering();
  },
};

export const subscriber = new Set();

const updateRendering = () => {
  [...subscriber].forEach(render => render());
};
