import axios from 'axios';

import { store } from './store.js';

import { checkIsObjectFull, convertFormData } from './util.js';

const URL = `http://localhost:3000`;

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
  try {
    const { data } = await axios.post(`${URL}/auth`, { id, pw });
    return data;
  } catch {
    return { token: null }
  }
};
