import { LoginPayLoad } from '@models/auth';
import axiosClient from './axios-client';
export const authAPi = {
  login(payload: LoginPayLoad) {
    return axiosClient.post('/login', payload);
  },
  logout() {
    return axiosClient.post('/logout');
  },
  getProfile() {
    return axiosClient.get('/profile');
  },
};
