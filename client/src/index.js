import Header from './components/Header.js';
import MonthToggle from './components/MonthToggle.js';
import Tab from './components/Tab.js';

const app = document.querySelector('#app');

app.appendChild(new Header().node);
app.appendChild(new MonthToggle().node);
app.appendChild(new Tab().node);
