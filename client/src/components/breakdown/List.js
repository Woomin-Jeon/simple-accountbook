import { store, actions, dispatch, observer } from '@/store.js';

import { splitByDate, filterByCome, scrollToTop } from '@/util.js';

import ListDate from './ListDate.js';

export default function List() {
  this.node = document.createElement('div');
  this.node.classList.add('list');

  this.node.addEventListener('click', ({ target }) => {
    if (target.localName !== 'button') {
      return;
    }

    const itemId = target.dataset.id;
    const targetBreakdown = store.breakdown.items.find(item => item.id === itemId);
    const { amount, category, come: type, date, method: payment, content } = targetBreakdown;

    dispatch('form', () => actions.setAllForm({
      amount, category, type, date, payment, content, editMode: true, itemId,
    }));

    scrollToTop();
  });

  this.render = () => {
    const filteredBreakdowns = filterByCome(store.breakdown.items);
    const breakdownsByDate = splitByDate(filteredBreakdowns);

    this.node.innerHTML = `
      ${breakdownsByDate.map(({ date, items }) => `
        <div>${new ListDate(date, items).node.innerHTML}</div>
      `).join('')}
    `;
  };

  this.render();
  observer.subscribe('/breakdown', this.render);
}
