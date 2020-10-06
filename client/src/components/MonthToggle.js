export default function MonthToggle({ month }) {
  this.node = document.createElement('div');
  this.node.classList.add('flex');
  this.node.classList.add('month');

  this.render = () => {
    this.node.innerHTML = `
      <button class='month_toggle'>◁</button>
      <div>${month}월</div>
      <button class='month_toggle'>▷</button>
    `;
  };

  this.render();
}
