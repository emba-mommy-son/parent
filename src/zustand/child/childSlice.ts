import { StateCreator } from 'zustand';
import { ChildSlice } from '@/types/store';

export const createChildSlice: StateCreator<ChildSlice, [], []> = set => ({
  nowSelectedChild: null as GetConnectedChildDto | null,
  children: [] as GetConnectedChildDto[],
  setChildren: (children: GetConnectedChildDto[]) => set({ children }),
  setNowSelectedChild: (child: GetConnectedChildDto) => set({ nowSelectedChild: child }),
});
