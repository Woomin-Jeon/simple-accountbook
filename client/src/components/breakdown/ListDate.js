import { getTotalCome } from '@/util.js';

import ListItem from './ListItem.js';

export default function ListDate(date, items) {
  this.node = document.createElement('div');

  this.render = () => {
    this.node.innerHTML = `
      <div class='space-between'>
        <div class='list_date'>${date}</div>
        <div class='list_date_result flex'>
          <div class='list_date_result_income'>+${getTotalCome('수입', items)}원</div>
          <div class='list_date_result_outcome'>-${getTotalCome('지출', items)}원</div>
        </div>
      </div>
      <div>
        ${items.map(item => `
          <div>${new ListItem(item).node.innerHTML}</div>
        `).join('')}
      <div>
    `;
  };

  this.render();
}
