import { StateCreator } from 'zustand';

import { AnalysisSlice } from '@/types/store';
import { dateToString } from '@/utils/formatter/DateFormat';

export const createAnalysisSlice: StateCreator<AnalysisSlice, [], []> = set => ({
  selectedDate: dateToString(new Date()),
  setSelectedDate: (date: DateString) => set({ selectedDate: date }),
});
