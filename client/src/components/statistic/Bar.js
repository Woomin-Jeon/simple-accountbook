import { splitByThousand, getNextRGB } from '@/util.js';

export default function Bar({ category, percentage, totalCost }, index) {
  this.node = document.createElement('div');
  this.node.classList.add('bar');
  this.node.classList.add('space-between');

  const drawBar = (canvas) => {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = getNextRGB(index);
    ctx.fillRect(0, 2, 500 * percentage, 8);
  };

  this.render = () => {
    this.node.innerHTML = `
      <div>${category}</div>
      <div>${Math.floor(percentage * 100)}%</div>
      <canvas id='bar_canvas' width='500' height='10' ></canvas>
      <div class='bar_amount_text'>${splitByThousand(totalCost.toString())}원</div>
    `;

    const canvas = this.node.querySelector('#bar_canvas');
    drawBar(canvas);
  };

  this.render();
}
