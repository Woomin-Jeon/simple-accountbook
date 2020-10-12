import LoginPage from './pages/LoginPage.js';
import BreakdownPage from './pages/BreakdownPage.js';

const app = document.querySelector('#app');

app.appendChild(new LoginPage().node);
app.appendChild(new BreakdownPage().node);
