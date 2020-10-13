import api from '@/api.js';

import { observer } from '@/store.js';

import { handleRouting, redirect } from '@/router.js';

export default function LoginForm() {
  this.node = document.createElement('div');
  this.node.classList.add('login');

  this.node.addEventListener('click', async ({ target }) => {
    if (target.localName !== 'button') {
      return;
    }

    const loginId = document.querySelector('#login_id').value;
    const loginPw = document.querySelector('#login_pw').value;

    const { token } = await api.login(loginId, loginPw);

    if (!token) {
      alert('아이디 혹은 비밀번호가 올바르지 않습니다');
      return;
    }

    alert('로그인 성공');
    localStorage.setItem('token', token);

    observer.unsubscribe(location.pathname);
    redirect('/breakdown');
    handleRouting();
  });

  this.render = () => {
    this.node.innerHTML = `
      <input id='login_id' type='text' placeholder='아이디를 입력해주세요' /><br/>
      <input id='login_pw' type='password' placeholder='비밀번호를 입력해주세요' /><br/>
      <button>로그인</button>
    `;
  };

  this.render();
}
