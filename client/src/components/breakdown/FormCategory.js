import { store, actions, dispatch, observer } from '@/store.js';

export default function FormCategory() {
  this.node = document.createElement('div');
  this.node.classList.add('flex');
  this.node.classList.add('form_category');

  this.node.addEventListener('change', (event) => {
    const categoryName = event.target.value;
    dispatch('form', () => actions.setCategory(categoryName));
  });

  this.render = () => {
    const categories = store.form.type === '수입'
      ? ['월급', '용돈', '기타 수입']
      : ['식비', '생활', '쇼핑/뷰티', '교통', '의료/건강', '문화/여가', '미분류'];

    this.node.innerHTML = `
      <div>카테고리</div>
      <select>
        <option>선택하세요</option>
        ${categories.map(category => `
          <option ${store.form.category === category && 'selected="true"'}>
            ${category}
          </option>
        `)}
      </select>
    `;
  };

  this.render();
  observer.subscribe('/breakdown', this.render);
}
