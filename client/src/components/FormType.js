import { store, actions, dispatch, observer } from '../store.js';

export default function FormType() {
  this.node = document.createElement('div');
  this.node.classList.add('flex');
  this.node.classList.add('form_type');

  this.node.addEventListener('click', (event) => {
    if (event.target.localName !== 'button') {
      return;
    }

    const typeName = event.target.textContent;
    dispatch('form', () => actions.setType(typeName));
  });

  this.render = () => {
    this.node.innerHTML = `
      <div>분류</div>
      <button ${store.form.type === '수입' && 'class="form_type_selected"'}>수입</button>
      <button ${store.form.type === '지출' && 'class="form_type_selected"'}>지출</button>
    `;
  };

  this.render();
  observer.subscribe('/breakdown', this.render);
}
