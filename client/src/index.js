import { handleRouting } from './router.js';

window.addEventListener('popstate', () => {
  handleRouting();
});

handleRouting();
