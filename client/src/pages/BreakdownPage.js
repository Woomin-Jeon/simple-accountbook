import Header from '@header/Header.js';
import MonthToggle from '@header/MonthToggle.js';
import Tab from '@header/Tab.js';
import Form from '@breakdown/Form.js';
import FilterCheckBox from '@breakdown/FilterCheckBox.js';
import List from '@breakdown/List.js';

export default function BreakdownPage() {
  this.node = document.createElement('div');

  this.node.appendChild(new Header().node);
  this.node.appendChild(new MonthToggle().node);
  this.node.appendChild(new Tab().node);
  this.node.appendChild(new Form().node);
  this.node.appendChild(new FilterCheckBox().node);
  this.node.appendChild(new List().node);
}
