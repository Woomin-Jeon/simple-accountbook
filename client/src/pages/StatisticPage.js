import Header from '@header/Header.js';
import MonthToggle from '@header/MonthToggle.js';
import Tab from '@header/Tab.js';
import ChartHeader from '@statistic/ChartHeader.js';
import ChartInformation from '@statistic/ChartInformation.js';
import BarChart from '@statistic/BarChart.js';

export default function StatisticPage() {
  this.node = document.createElement('div');

  this.node.appendChild(new Header().node);
  this.node.appendChild(new MonthToggle().node);
  this.node.appendChild(new Tab().node);
  this.node.appendChild(new ChartHeader().node);
  this.node.appendChild(new ChartInformation().node);
  this.node.appendChild(new BarChart().node);
}
