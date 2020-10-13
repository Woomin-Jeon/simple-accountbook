import { store, actions, dispatch, observer } from '../store.js';

export default function FormAmount() {
  this.node = document.createElement('div');
  this.node.classList.add('flex');
  this.node.classList.add('form_amount');

  this.node.addEventListener('change', () => {
    const amount = event.target.value;
    dispatch('form', () => actions.setAmount(amount));
  });

  this.render = () => {
    this.node.innerHTML = `
      <div>금액</div>
      <input type='text' value='${store.form.amount}'/>
    `;
  };

  this.render();
  observer.subscribe(this.render);
}
