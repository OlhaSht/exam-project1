import axios from 'axios';
import CONSTANTS from '../constants';
import history from '../browserHistory';

const instance = axios.create({
  baseURL: CONSTANTS.BASE_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (response) => {
    const token = response.data?.accessToken;
    if (token) {
      window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, token);
    }
    return response;
  },

  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      error.response?.data === 'Token expired' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const { data } = await instance.post(
          '/auth/refresh',
          {},
          { withCredentials: true }
        );

        const newAccess = data?.accessToken;
        if (newAccess) {
          window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, newAccess);
          instance.defaults.headers.common['Authorization'] =
            `Bearer ${newAccess}`;
          originalRequest.headers['Authorization'] = `Bearer ${newAccess}`;
        }

        return instance(originalRequest);
      } catch (refreshError) {
        console.error('⚠️ Ошибка при попытке рефреша:', refreshError);
        if (
          history.location.pathname !== '/login' &&
          history.location.pathname !== '/registration' &&
          history.location.pathname !== '/'
        ) {
          history.replace('/login');
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
export default instance;
