import axios from 'axios';

import { store } from './store.js';

import { checkIsObjectFull, convertFormData } from './util.js';

const URL = `http://localhost:3000`;

const api = {
  async addBreakdown() {
    const { form } = store;

    if (!checkIsObjectFull(form)) {
      return false;
    }

    const data = convertFormData(form);
    try {
      const { status } = await axios.post(`${URL}/breakdown`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      return status;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  async login(id, pw) {
    try {
      const { data } = await axios.post(`${URL}/auth`, { id, pw });
      return data;
    } catch (err) {
      return { token: null };
    }
  },

  async getBreakdowns() {
    try {
      const { data } = await axios.get(`${URL}/breakdown`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      return data;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
};

export default api;
