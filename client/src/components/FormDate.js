import { store, actions, dispatch } from '../store.js';

export default function FormDate() {
  this.node = document.createElement('div');
  this.node.classList.add('flex');
  this.node.classList.add('form_date');

  this.node.addEventListener('change', (event) => {
    dispatch('form', () => actions.setDate(event.target.value));
  });

  this.render = () => {
    this.node.innerHTML = `
      <div>날짜</div>
      <input type='text' value=${store.form.date} />
    `;
  };

  this.render();
}
