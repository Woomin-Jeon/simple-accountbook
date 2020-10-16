import { store, observer } from '@/store.js';

import { splitByCategory, getNextRGB } from '@/util.js';

import PieChart from './PieChart.js';

export default function ChartInformation() {
  this.node = document.createElement('div');
  this.node.classList.add('flex');
  this.node.classList.add('chart_information');

  this.render = () => {
    const outcomeBreakdowns = store.breakdown.items.filter(item => item.come === '지출');
    const costByCategories = splitByCategory(outcomeBreakdowns);

    this.node.innerHTML = `
      <div id='pie_chart'></div>
      <div class='chart_information_text'>
        ${costByCategories.map(({ category, percentage }, index) => `
          <div class='space-between' style='color: ${getNextRGB(index)}'>
            <div>${category}</div>
            <div>${Math.floor(percentage * 100)}%</div>
          </div>
        `).join('')}
      </div>
    `;

    const pieChart = this.node.querySelector('#pie_chart');
    pieChart.appendChild(new PieChart({ radius: 150 }).node);
  };

  this.render();
  observer.subscribe(this.render);
}
