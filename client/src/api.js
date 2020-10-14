import axios from 'axios';

import { store } from './store.js';

import { convertFormData } from './util.js';

const URL = `http://localhost:3000`;

const api = {
  async login(id, pw) {
    try {
      const { data } = await axios.post(`${URL}/auth`, { id, pw });
      return data;
    } catch (err) {
      return { token: null };
    }
  },

  async addBreakdown() {
    const { form } = store;

    const data = convertFormData(form);
    try {
      await axios.post(`${URL}/breakdown`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch (err) {
      console.log(err);
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

  async updateBreakdown() {
    const { form } = store;

    const data = { ...convertFormData(form), breakdownId: form.itemId };

    try {
      await axios.patch(`${URL}/breakdown`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },

  async deleteBreakdown() {
    const breakdownId = store.form.itemId;

    try {
      await axios.delete(`${URL}/breakdown/${breakdownId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};

export default api;
