import { store, actions, dispatch, observer } from '@/store.js';

import { getTotalCome } from '@/util.js';

export default function FilterCheckBox() {
  this.node = document.createElement('div');
  this.node.classList.add('filter');

  this.node.addEventListener('change', (event) => {
    const target = event.target.value;

    target === '수입'
      ? dispatch('breakdown', () => actions.toggleIncomeFilter())
      : dispatch('breakdown', () => actions.toggleOutcomeFilter());
  });

  this.render = () => {
    this.node.innerHTML = `
      <div class='flex'>
        <div>
          <input type='checkbox' value='수입' ${store.breakdown.incomeFilter && 'checked'} />
        </div>
        <div class='filter_text'>수입</div>
        <div class='filter_total'>${getTotalCome('수입', store.breakdown.items)}원</div>
      </div>
      <div class='flex'>
        <div>
          <input type='checkbox' value='지출' ${store.breakdown.outcomeFilter && 'checked'} />
        </div>
        <div class='filter_text'>지출</div>
        <div class='filter_total'>${getTotalCome('지출', store.breakdown.items)}원</div>
      </div>
    `;
  };

  this.render();
  observer.subscribe(this.render);
}
