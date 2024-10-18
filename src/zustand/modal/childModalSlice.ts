import { StateCreator } from 'zustand';

export const createChildModalSlice: StateCreator<ChildModalSlice, [], []> = set => ({
  isModalVisible: false,
  toggleModal: () => set(state => ({ isModalVisible: !state.isModalVisible })),
});
