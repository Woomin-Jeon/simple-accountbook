import { splitByThousand, getNextRGB, sleep } from '@/util.js';

export default function Bar({ category, percentage, totalCost }, index) {
  this.node = document.createElement('div');
  this.node.classList.add('bar');
  this.node.classList.add('space-between');

  const drawBarWithAnimation = async (canvas) => {
    const MAX_WIDTH = 500;
    const PLUS_WIDTH = 3;
    const ctx = canvas.getContext('2d');

    let progressingPoint = 0;
    while (progressingPoint <= MAX_WIDTH * percentage) {
      ctx.fillStyle = getNextRGB(index);
      ctx.fillRect(0, 2, progressingPoint, 8);

      progressingPoint += PLUS_WIDTH;
      await sleep(10);
    }
  };

  this.render = () => {
    this.node.innerHTML = `
      <div>${category}</div>
      <div>${Math.floor(percentage * 100)}%</div>
      <canvas id='bar_canvas' width='500' height='10' ></canvas>
      <div class='bar_amount_text'>${splitByThousand(totalCost.toString())}원</div>
    `;

    const canvas = this.node.querySelector('#bar_canvas');
    drawBarWithAnimation(canvas);
  };

  this.render();
}
