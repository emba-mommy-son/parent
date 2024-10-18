import { create } from 'zustand';

export const useChildModalStore = create<ChildModalStore>(set => ({
  isModalVisible: false,
  toggleModal: () => set(state => ({ isModalVisible: !state.isModalVisible })),
}));
