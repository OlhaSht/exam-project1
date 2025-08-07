// import axios from 'axios';
// import CONSTANTS from '../constants';
// import history from '../browserHistory';

// const instance = axios.create({
//   baseURL: CONSTANTS.BASE_URL,
//   withCredentials: true,
// });



// instance.interceptors.request.use(
//   config => {
//     console.log('CONFIG DATA:', config.data);
//     const token = window.localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
//     if (token) {
//       config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
//     }
//     return config;
//   },
//   err => Promise.reject(err)
// );

//   instance.interceptors.response.use(
//   response => {
//     console.log('RESPONSE DATA:', response.data);
//       const token = response.data?.token?.access;
//       if (token) {
//         window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, `Bearer ${token}`);
//       }
//     return response;
//   },
// // instance.interceptors.response.use(
// //   response => {
// //     if (response.data.token) {
// //       window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, response.data.token);
// //     }
// //     return response;
// //   },
//   err => {
//     if (
//       err.response.status === 408 &&
//       history.location.pathname !== '/login' &&
//       history.location.pathname !== '/registration' &&
//       history.location.pathname !== '/'
//     ) {
//       history.replace('/login');
//     }
//     return Promise.reject(err);
//   }
//  );

// export default instance;


import axios from 'axios';
import CONSTANTS from '../constants';
import history from '../browserHistory';

const instance = axios.create({
  baseURL: CONSTANTS.BASE_URL,
  withCredentials: true, 
});

instance.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);


instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/auth/refresh')
    ) {
      originalRequest._retry = true;

      try {
        const response = await instance.post('/auth/refresh'); 
        const newAccessToken = response.data.accessToken;

        if (newAccessToken) {
          window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return instance(originalRequest);
        }
      } catch (refreshError) {
        console.error('REFRESH ERROR:++++++++++++', refreshError);
        window.localStorage.removeItem(CONSTANTS.ACCESS_TOKEN);
        history.replace('/login');
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
