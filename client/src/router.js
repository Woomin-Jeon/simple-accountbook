import LoginPage from './pages/LoginPage.js';
import BreakdownPage from './pages/BreakdownPage.js';

const pages = {
  '/': new LoginPage().node,
  '/breakdown': new BreakdownPage().node,
};

export const handleRouting = () => {
  const app = document.querySelector('#app');

  app.firstElementChild && app.removeChild(app.firstElementChild);

  const currentPath = location.pathname;
  app.appendChild(pages[currentPath]);
};

export const redirect = (path) => {
  history.pushState({}, '', path);
};
