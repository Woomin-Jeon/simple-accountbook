export default function Header() {
  this.node = document.createElement('header');
  this.node.classList.add('flex');
  this.node.classList.add('header');

  this.render = () => {
    this.node.innerHTML = `
      <div>가계부</div>
    `;
  };

  this.render();
}
