import { actions, dispatch } from '../store.js';

export default function FormContent() {
  this.node = document.createElement('div');
  this.node.classList.add('flex');
  this.node.classList.add('form_content');

  this.node.addEventListener('change', () => {
    const content = event.target.value;
    dispatch('form', () => actions.setContent(content));
  });

  this.render = () => {
    this.node.innerHTML = `
      <div>내용</div>
      <input type='text' />
    `;
  };

  this.render();
}
