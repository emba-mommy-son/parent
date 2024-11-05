import { StateCreator } from 'zustand';

import { ChildModalSlice } from '@/types/store';

export const createChildModalSlice: StateCreator<ChildModalSlice, [], []> = set => ({
  isModalVisible: false,
  toggleModal: () => set(state => ({ isModalVisible: !state.isModalVisible })),
});
