import { StateCreator } from 'zustand';

export const createChildSlice: StateCreator<ChildSlice, [], []> = set => ({
  nowSelectedChild: { childId: 0, name: '', profileImage: '' },
  setNowSelectedChild: (child: ChildInfo) => set({ nowSelectedChild: child }),
});
