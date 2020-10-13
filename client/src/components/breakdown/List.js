import { store, observer } from '@/store.js';

import { splitByDate } from '@/util.js';

import ListDate from './ListDate.js';

export default function List() {
  this.node = document.createElement('div');
  this.node.classList.add('list');

  this.render = () => {
    const breakdownsByDate = splitByDate(store.breakdown.items);

    this.node.innerHTML = `
      ${breakdownsByDate.map(({ date, items }) => `
        <div>${new ListDate(date, items).node.innerHTML}</div>
      `).join('')}
    `;
  };

  this.render();
  observer.subscribe('/breakdown', this.render);
}
