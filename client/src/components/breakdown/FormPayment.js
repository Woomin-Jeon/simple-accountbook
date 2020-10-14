import { store, actions, dispatch } from '@/store.js';

export default function FormPayment() {
  this.node = document.createElement('div');
  this.node.classList.add('flex');
  this.node.classList.add('form_payment');

  this.node.addEventListener('change', (event) => {
    const paymentName = event.target.value;
    dispatch('form', () => actions.setPayment(paymentName));
  });

  this.render = () => {
    this.node.innerHTML = `
      <div>결제수단</div>
      <select>
        <option>선택하세요</option>
        <option ${store.form.payment === '카드' && 'selected'}>카드</option>
        <option ${store.form.payment === '현금' && 'selected'}>현금</option>
      </select>  
    `;
  };

  this.render();
}
