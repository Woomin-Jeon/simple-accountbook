import Header from '@header/Header.js';
import MonthToggle from '@header/MonthToggle.js';
import Tab from '@header/Tab.js';
import PieChart from '@statistic/PieChart.js';

export default function StatisticPage() {
  this.node = document.createElement('div');

  this.node.appendChild(new Header().node);
  this.node.appendChild(new MonthToggle().node);
  this.node.appendChild(new Tab().node);
  this.node.appendChild(new PieChart({ radius: 150 }).node);
}
