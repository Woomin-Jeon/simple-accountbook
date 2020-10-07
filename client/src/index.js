import Header from './components/Header.js';
import MonthToggle from './components/MonthToggle.js';
import Tab from './components/Tab.js';
import Form from './components/Form.js';

const app = document.querySelector('#app');

app.appendChild(new Header().node);
app.appendChild(new MonthToggle().node);
app.appendChild(new Tab().node);
app.appendChild(new Form().node);
