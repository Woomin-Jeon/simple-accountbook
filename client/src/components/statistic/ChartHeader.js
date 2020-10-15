import { store, observer } from '@/store.js';

import { getTotalCome } from '@/util.js';

export default function ChartHeader() {
  this.node = document.createElement('div');
  this.node.classList.add('space-between');
  this.node.classList.add('chart_header');

  this.render = () => {
    this.node.innerHTML = `
      <div>
        <label>
          <input type='radio' name='chart_type' checked />
          <span>카테고리별 지출</span>
        </label>
        <label>
          <input type='radio' name='chart_type' />
          <span>일별 지출</span>
        </label>
      </div>
      <div>이번 달 지출 금액 ${getTotalCome('지출', store.breakdown.items)}원</div>
    `;
  };

  this.render();
  observer.subscribe(this.render);
}
