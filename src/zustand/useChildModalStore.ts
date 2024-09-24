import { create } from 'zustand';

interface ChildModalStore {
  isModalVisible: boolean;
  toggleModal: () => void;
}
export const useChildModalStore = create<ChildModalStore>(set => ({
  isModalVisible: false,
  toggleModal: () => set(state => ({ isModalVisible: !state.isModalVisible })),
}));
