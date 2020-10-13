import LoginForm from '@login/LoginForm.js';

export default function LoginPage() {
  this.node = document.createElement('div');

  this.node.appendChild(new LoginForm().node);
}
