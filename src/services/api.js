import axios from 'axios';
import {BASE_URL, TIME_OUT} from '../const';

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
  });

  return api;
};
