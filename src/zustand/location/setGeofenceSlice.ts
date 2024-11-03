import { StateCreator } from 'zustand';

import { SetGeofenceSlice } from '@/types/store';

export const createSetGeofenceSlice: StateCreator<SetGeofenceSlice, [], []> = set => ({
  childId: 0,
  latitude: 35.19056652775511, // 임시 좌표
  longitude: 126.82377368490218,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
  danger: false,
  radius: 50,
  boundaryName: '',
  setChlidId: id => set({ childId: id }),
  setLatitude: latitude => set({ latitude }),
  setLongitude: longitude => set({ longitude }),
  setLatitudeDelta: latDelta => set({ latitudeDelta: latDelta }),
  setLongitudeDelta: lngDelta => set({ longitudeDelta: lngDelta }),
  setDanger: isDanger => set({ danger: isDanger }),
  setRadius: radius => set({ radius }),
  setBoundaryName: name => set({ boundaryName: name }),
});
