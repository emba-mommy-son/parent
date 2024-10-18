import { StateCreator } from 'zustand';

export const createAuthSlice: StateCreator<AuthSlice, [], []> = set => ({
  accessToken: '',
  refreshToken: '',
  setAccessToken: token => set(state => ({ accessToken: token })),
  setRefreshToken: token => set(state => ({ refreshToken: token })),
  clearToken: () => set(state => ({ accessToken: '', refreshToken: '' })),
});
