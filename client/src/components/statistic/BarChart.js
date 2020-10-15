import { store, observer } from '@/store.js';

import { splitByCategory } from '@/util.js';

import Bar from './Bar.js';

export default function BarChart() {
  this.node = document.createElement('div');
  this.node.classList.add('bar_chart');

  this.render = () => {
    const outcomeBreakdowns = store.breakdown.items.filter(item => item.come === '지출');
    const costByCategories = splitByCategory(outcomeBreakdowns);

    this.node.innerHTML = `<div id='bar_chart'></div>`;
    const barChart = this.node.querySelector('#bar_chart');

    costByCategories.forEach((category, index) => {
      barChart.appendChild(new Bar(category, index).node);
    });
  };

  this.render();
  observer.subscribe('/statistic', this.render);
}
