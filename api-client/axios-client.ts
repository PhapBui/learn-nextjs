import { config } from './../pages/api/login';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
// axios.interceptors.request.use(
//     function(config){
//         return config
//     }
//     function(error){
//         return Promise.reject(error)
//     }
// )

axios.interceptors.response.use(
  function (respone) {
    return respone.data;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
