import { store, observer } from '@/store.js';

import { getRadianByDegree, splitByCategory, getNextRGB } from '@/util.js';

export default function PieChart({ radius }) {
  this.node = document.createElement('canvas');
  this.node.setAttribute('width', radius * 2);
  this.node.setAttribute('height', radius * 2);
  this.node.classList.add('canvas');

  const centerPoint = { x: radius, y: radius };
  const ctx = this.node.getContext('2d');

  const drawPiePart = (startDegree, endDegree, rgb) => {
    ctx.fillStyle = rgb;
    ctx.beginPath();
    ctx.arc(
      centerPoint.x, centerPoint.y, radius,
      getRadianByDegree(startDegree), getRadianByDegree(endDegree), false,
    );
    ctx.lineTo(centerPoint.x, centerPoint.y);
    ctx.fill();
  };

  this.render = () => {
    const outcomeBreakdowns = store.breakdown.items.filter(item => item.come === '지출');
    const costByCategories = splitByCategory(outcomeBreakdowns);

    let start = 0;
    costByCategories.forEach((categoryCost, index) => {
      const degree = categoryCost.percentage * 360;
      drawPiePart(start, start + degree, getNextRGB(index));

      start += degree;
    });
  };

  this.render();
  observer.subscribe('/statistic', this.render);
}
