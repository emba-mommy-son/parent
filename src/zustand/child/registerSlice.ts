import { StateCreator } from 'zustand';

import { RegisterSlice } from '@/types/store';

export const createRegisterSlice: StateCreator<RegisterSlice, [], []> = set => ({
  registChildName: '',
  registChildPhoneNumber: '',
  registChildRelation: '',
  setRegistChildName: name => set(state => ({ registChildName: name })),
  setRegistChildPhoneNumber: phoneNumber => set(state => ({ registChildPhoneNumber: phoneNumber })),
  setRegistChildRelation: relationShip => set(state => ({ registChildRelation: relationShip })),
});
