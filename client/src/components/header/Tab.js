import { store, actions, dispatch, observer } from '@/store.js';

import { redirect, handleRouting } from '@/router.js';

import { getTabURL } from '@/util.js';

export default function Tab() {
  this.node = document.createElement('div');
  this.node.classList.add('flex');
  this.node.classList.add('tab');

  this.node.addEventListener('click', (event) => {
    const tabName = event.target.textContent;

    const targetURL = getTabURL(tabName);
    redirect(targetURL);
    handleRouting();

    dispatch('state', () => actions.setTab(tabName));
  });

  this.render = () => {
    this.node.innerHTML = `
      <div>
        <button ${store.state.tab === '내역' && 'class="tab_selected"'}>내역</button>
      </div>
      <div>
        <button ${store.state.tab === '달력' && 'class="tab_selected"'}>달력</button>
      </div>
      <div>
        <button ${store.state.tab === '통계' && 'class="tab_selected"'}>통계</button>
      </div>
    `;
  };

  this.render();
  observer.subscribe(this.render);
}
