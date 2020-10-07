import axios from 'axios';

import { store } from './store.js';

import { checkIsObjectFull } from './util.js';

export const addBreakdown = async () => {
  const { form } = store;

  if (!checkIsObjectFull(form)) {
    return false;
  }

  // TODO: Implement
  console.log('data', form);
  return true;
};
