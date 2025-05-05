// src/api/client.ts
import { hideLoading, showLoading } from './../../utils/Loading/LoadingConfig';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/dashboard',
  headers: { 'Content-Type': 'application/json' },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    showLoading(); // Show loading indicator
    return config;
  },
  (error) => {
    hideLoading(); // Hide loading on request error
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    hideLoading(); // Hide loading on success
    return response;
  },
  (error) => {
    hideLoading(); // Hide loading on response error
    return Promise.reject(error);
  }
);

export default api;
