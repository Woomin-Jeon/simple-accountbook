import ListItem from './ListItem.js';

export default function ListDate(date, items) {
  this.node = document.createElement('div');

  this.render = () => {
    this.node.innerHTML = `
      <div class='list_date'>${date}</div>
      <div>
        ${items.map(item => `
          <div>${new ListItem(item).node.innerHTML}</div>
        `).join('')}
      <div>
    `;
  };

  this.render();
}
