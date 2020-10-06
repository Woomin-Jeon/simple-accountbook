import Header from './components/Header.js';
import MonthToggle from './components/MonthToggle.js';

const app = document.querySelector('#app');

app.appendChild(new Header().node);
app.appendChild(new MonthToggle().node);
