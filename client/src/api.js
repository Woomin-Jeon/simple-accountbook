// TODO: Use
// import axios from 'axios';

import { store } from './store.js';

import { checkIsObjectFull, convertFormData } from './util.js';

export const addBreakdown = async () => {
  const { form } = store;

  if (!checkIsObjectFull(form)) {
    return false;
  }

  // TODO: Implement
  const data = convertFormData(form);
  console.log('data', data);
  return true;
};

export const login = async (id, pw) => {
  // TODO: Implement
  console.log(id, pw);
};
