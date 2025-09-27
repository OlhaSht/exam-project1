import axios from 'axios';
import CONSTANTS from '../constants';
import history from '../browserHistory';

const instance = axios.create({
  baseURL: CONSTANTS.BASE_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  config => {

    console.log('%c🚀 REQUEST INTERCEPTOR ON', 'color: green; font-weight: bold;');
    console.log('CONFIG URL:', config.url);
    console.log('TOKEN FROM LS:', window.localStorage.getItem('accessToken'));
    console.log('CONFIG DATA:', config.data);

    const token = window.localStorage.getItem('accessToken');
    console.log('((((((', token);
    if (token) {
       config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log('HEADERS WITH TOKEN:', config.headers);
    return config;
  },
  err => Promise.reject(err)
);

instance.interceptors.response.use(
  (response) => {
    console.log('RESPONSE DATA:', response.data);
    const token = response.data?.accessToken;
    if (token) {
      window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, token); 
    }
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    console.log("====== FULL ERROR RESPONSE ======");
    console.log(error.response);   
    console.log("====== FULL ERROR REQUEST ======");
    console.log(originalRequest);

     console.log('originalRequest;;;;:', error.config);
     console.log('❌ Ошибка запроса:',  error.response?.status,`${originalRequest?.baseURL || ''}${originalRequest?.url}`);

    if (
    error.response?.status === 401 &&
    error.response?.data === "Token expired" &&
    !originalRequest._retry
  ) {
    originalRequest._retry = true;
      try {
        console.log('%c🔄 Пытаемся обновить accessToken через /auth/refresh...', 'color: orange; font-weight: bold;');
        const { data } = await instance.post(
          '/auth/refresh',
          {},
          { withCredentials: true } 
        );

        const newAccess = data?.accessToken;
        console.log('newAccesssssss', newAccess);
        if (newAccess) {
          window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, newAccess);
          instance.defaults.headers.common['Authorization'] = `Bearer ${newAccess}`;
          originalRequest.headers['Authorization'] = `Bearer ${newAccess}`;
        }
        
        return instance(originalRequest); 
      } catch (refreshError) {
        console.error('⚠️ Ошибка при попытке рефреша:', refreshError);
        if (
          history.location.pathname !== '/login' &&
          history.location.pathname !== '/registration'&&
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







