import { store, actions, dispatch, observer } from '../store.js';

export default function MonthToggle() {
  this.node = document.createElement('div');
  this.node.classList.add('flex');
  this.node.classList.add('month');

  this.render = () => {
    this.node.innerHTML = `
      <button id='month_toggle_prev'>◁</button>
      <div>${store.state.month}월</div>
      <button id='month_toggle_next'>▷</button>
    `;

    const prevMonthButton = this.node.querySelector('#month_toggle_prev');
    const nextMonthButton = this.node.querySelector('#month_toggle_next');
    prevMonthButton.addEventListener('click', () => {
      dispatch('state', () => actions.setMonth('prev'));
    });
    nextMonthButton.addEventListener('click', () => {
      dispatch('state', () => actions.setMonth('next'));
    });
  };

  this.render();
  observer.subscribe('/breakdown', this.render);
}
