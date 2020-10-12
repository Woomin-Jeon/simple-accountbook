import Header from '../components/Header.js';
import MonthToggle from '../components/MonthToggle.js';
import Tab from '../components/Tab.js';
import Form from '../components/Form.js';

export default function BreakdownPage() {
  this.node = document.createElement('div');

  this.node.appendChild(new Header().node);
  this.node.appendChild(new MonthToggle().node);
  this.node.appendChild(new Tab().node);
  this.node.appendChild(new Form().node);
}
