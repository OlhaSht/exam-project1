import axios from 'axios';
import CONSTANTS from '../constants';
import history from '../browserHistory';

const instance = axios.create({
  baseURL: CONSTANTS.BASE_URL,
});



instance.interceptors.request.use(
  config => {
    console.log('CONFIG DATA:', config.data);
    const token = window.localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
    if (token) {
      config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    }
    return config;
  },
  err => Promise.reject(err)
);

// let accessToken = null;

// instance.interceptors.response.use((response) => {
//   if (response && response.data && response.data.data && response.data.data.tokenPair) {
//     const { data: {data: { tokenPair: {access, refresh} } } } = response;
//     window.localStorage.setItem(CONSTANTS.REFRESH_TOKEN, refresh);
//     accessToken = access;
//   }
//   return response;
// }, (err) => {
//   const refreshToken = window.localStorage.getItem(CONSTANTS.REFRESH_TOKEN);
//   if(err.response.status===419 && refreshToken){
//     const { data: {data: { tokenPair: {access, refresh} } } } = instance.post('auth/refresh', {refreshToken});
//     window.localStorage.setItem(CONSTANTS.REFRESH_TOKEN, refresh);
//     accessToken = access;
//     err.config.headers.Authorization = `Bearer ${accessToken}`;
//     return axios.request(err.config);
//   }
  instance.interceptors.response.use(
  response => {
    console.log('RESPONSE DATA:', response.data);
      const token = response.data?.token?.access;
      if (token) {
        window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, `Bearer ${token}`);
      }
    return response;
  },
// instance.interceptors.response.use(
//   response => {
//     if (response.data.token) {
//       window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, response.data.token);
//     }
//     return response;
//   },
  err => {
    if (
      err.response.status === 408 &&
      history.location.pathname !== '/login' &&
      history.location.pathname !== '/registration' &&
      history.location.pathname !== '/'
    ) {
      history.replace('/login');
    }
    return Promise.reject(err);
  }
 );

export default instance;
