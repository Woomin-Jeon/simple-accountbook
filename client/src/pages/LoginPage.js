import LoginForm from '../components/LoginForm.js';

export default function LoginPage() {
  this.node = document.createElement('div');

  this.node.appendChild(new LoginForm().node);
}
