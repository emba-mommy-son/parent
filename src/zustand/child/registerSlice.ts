import { StateCreator } from 'zustand';

import { RegisterSlice } from '@/types/store';

export const createRegisterSlice: StateCreator<RegisterSlice, [], []> = set => ({
  registChildName: '',
  registChildPhoneNumber: '',
  registChildRelation: '',
  setRegistChildName: name => set(state => ({ registChildName: name })),
  setRegistChildPhoneNumber: name => set(state => ({ registChildName: name })),
  setRegistChildRelation: name => set(state => ({ registChildName: name })),
});
