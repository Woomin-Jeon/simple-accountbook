export default function LoginForm() {
  this.node = document.createElement('div');
  this.node.classList.add('login');

  this.render = () => {
    this.node.innerHTML = `
      <input type='text' placeholder='아이디를 입력해주세요' /><br/>
      <input type='password' placeholder='비밀번호를 입력해주세요' /><br/>
      <button>로그인</button>
    `;
  };

  this.render();
}
