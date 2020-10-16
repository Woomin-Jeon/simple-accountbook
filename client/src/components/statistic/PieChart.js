import { store, observer } from '@/store.js';

import { getRadianByDegree, splitByCategory, getNextRGB, sleep } from '@/util.js';

export default function PieChart({ radius }) {
  this.node = document.createElement('canvas');
  this.node.setAttribute('width', radius * 2 + 10);
  this.node.setAttribute('height', radius * 2 + 10);
  this.node.classList.add('pie_chart');

  const centerPoint = { x: radius + 5, y: radius + 5 };
  const ctx = this.node.getContext('2d');

  const drawPiePart = (startDegree, endDegree, rgb) => {
    ctx.fillStyle = rgb;
    ctx.strokeStyle = rgb;
    ctx.beginPath();
    ctx.arc(
      centerPoint.x, centerPoint.y, radius,
      getRadianByDegree(startDegree), getRadianByDegree(endDegree), false,
    );
    ctx.lineTo(centerPoint.x, centerPoint.y);
    ctx.stroke();
    ctx.fill();
  };

  const drawWithAnimation = async (startDegree, endDegree, index) => {
    const PLUS_DEGREE = 3;

    let progressingDegree = startDegree;
    while (progressingDegree <= endDegree) {
      drawPiePart(progressingDegree, progressingDegree + PLUS_DEGREE, getNextRGB(index));

      progressingDegree += PLUS_DEGREE;
      await sleep(5);
    }
  };

  this.render = async () => {
    const outcomeBreakdowns = store.breakdown.items.filter(item => item.come === '지출');
    const costByCategories = splitByCategory(outcomeBreakdowns);

    let start = -90;
    for (let i = 0; i < costByCategories.length; i += 1) {
      const category = costByCategories[i];
      const degree = category.percentage * 360;

      const startDegree = start;
      const endDegree = start + degree;

      await drawWithAnimation(startDegree, endDegree, i);

      start += degree;
    }
  };

  this.render();
  observer.subscribe(this.render);
}
