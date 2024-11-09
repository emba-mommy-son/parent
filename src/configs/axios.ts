import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import useRootStore from '@/zustand';

const BASE_URL = 'https://www.mommy-son.kro.kr/api/v1';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 2500,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  config => {
    // 요청 시점에 최신 상태 가져오기
    const { accessToken } = useRootStore.getState();
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    if (!error.response || error.response.status !== 401 || error.config._retry) {
      return Promise.reject(error);
    }

    error.config._retry = true;

    try {
      // 최신 refreshToken 가져오기
      const { refreshToken } = useRootStore.getState();
      const refreshResponseData = await instance.post(`${BASE_URL}/api/auth/refresh`, { refreshToken });

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = refreshResponseData.data;
      // 새로운 토큰 저장 및 재요청
      useRootStore.getState().setAccessToken(newAccessToken);
      useRootStore.getState().setRefreshToken(newRefreshToken);
      error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;

      return instance.request(error.config);
    } catch (error: any) {
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('refreshToken');
      useRootStore.getState().clearToken();

      return Promise.reject(error);
    }
  },
);

export default instance;
