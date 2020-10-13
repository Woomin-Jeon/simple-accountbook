export default function ListItem({ amount, category, content, id, method, come }) {
  this.node = document.createElement('div');

  this.render = () => {
    this.node.innerHTML = `
      <div class='list_item flex' data-id=${id}>
        <div ${come === '수입'
    ? 'class="list_item_category_income"'
    : 'class="list_item_category_outcome"'}>${category}</div>
        <div class='list_item_content'>${content}</div>
        <button class='list_item_button'>수정</button>
        <div class='list_item_method'>${method}</div>
        <div class='list_item_amount'>${amount}</div>
      </div>
    `;
  };

  this.render();
}
