import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { RootState } from '@/types/store';

import { createAnalysisSlice } from './analysis/analysisSlice';
import { createAuthSlice } from './auth/authSlice';
import { createChildSlice } from './child/childSlice';
import { createRegisterSlice } from './child/registerSlice';
import { createChildModalSlice } from './modal/childModalSlice';

const useRootStore = create<RootState>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createChildModalSlice(...a),
      ...createChildSlice(...a),
      ...createAnalysisSlice(...a),
      ...createRegisterSlice(...a),
    }),
    {
      name: 'z',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    },
  ),
);

export default useRootStore;
