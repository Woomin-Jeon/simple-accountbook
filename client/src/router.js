import { actions, dispatch, observer } from '@/store.js';

import LoginPage from './pages/LoginPage.js';
import BreakdownPage from './pages/BreakdownPage.js';
import StatisticPage from './pages/StatisticPage.js';

const pages = {
  '/': () => new LoginPage().node,
  '/breakdown': () => new BreakdownPage().node,
  '/statistic': () => new StatisticPage().node,
};

export const handleRouting = () => {
  const app = document.querySelector('#app');

  app.firstElementChild && app.removeChild(app.firstElementChild);

  const currentPath = location.pathname;
  app.appendChild(pages[currentPath]());

  const token = localStorage.getItem('token');

  if (currentPath !== '/' && !token) {
    redirect('/');
    handleRouting();
  }

  if (currentPath === '/' && token) {
    redirect('/breakdown');
    handleRouting();
  }

  dispatch('breakdown', () => actions.getItems());
};

export const redirect = (path) => {
  const currentPath = location.pathname;
  observer.unsubscribe(currentPath);

  history.pushState({}, '', path);
};
