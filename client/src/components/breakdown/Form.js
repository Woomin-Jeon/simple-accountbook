import FormType from './FormType.js';
import FormDate from './FormDate.js';
import FormCategory from './FormCategory.js';
import FormPayment from './FormPayment.js';
import FormAmount from './FormAmount.js';
import FormContent from './FormContent.js';

import { store, actions, dispatch, observer } from '@/store.js';

import api from '@/api.js';

export default function Form() {
  this.node = document.createElement('div');
  this.node.classList.add('form');

  this.node.addEventListener('click', async ({ target }) => {
    if (target.localName !== 'button') {
      return;
    }

    const button = target.textContent;

    if (button === '확인') {
      await api.addBreakdown();

      dispatch('breakdown', () => actions.getItems());
      dispatch('form', () => actions.resetForm());
    }

    if (button === '수정') {
      await api.updateBreakdown();

      dispatch('breakdown', () => actions.getItems());
      dispatch('form', () => actions.resetForm());
    }

    if (button === '삭제') {
      await api.deleteBreakdown();

      dispatch('breakdown', () => actions.getItems());
      dispatch('form', () => actions.resetForm());
    }
  });

  this.render = () => {
    this.node.innerHTML = `
      <div id='layer1' class='flex'></div>
      <div id='layer2' class='flex'></div>
      <div id='layer3' class='flex'></div>
      ${store.form.editMode
    ?
    `<button class='form_button_edit'>수정</button>
     <button class='form_button_delete'>삭제</button>`
    :
    `<button class='form_button_add'>확인</button>`}  
    `;

    const layer1 = this.node.querySelector('#layer1');
    const layer2 = this.node.querySelector('#layer2');
    const layer3 = this.node.querySelector('#layer3');

    layer1.appendChild(new FormType().node);
    layer2.appendChild(new FormDate().node);
    layer2.appendChild(new FormCategory().node);
    layer2.appendChild(new FormPayment().node);
    layer3.appendChild(new FormAmount().node);
    layer3.appendChild(new FormContent().node);
  };

  this.render();
  observer.subscribe('/breakdown', this.render);
}
