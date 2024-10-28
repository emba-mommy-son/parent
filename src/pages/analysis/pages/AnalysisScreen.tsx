import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { View } from 'react-native';

import ScreenContainer from '@/components/ScreenContainer';

import CalendarContainer from '../components/CalendarContainer';
import WeekChartContainer from '../components/WeekChartContainer';
import AnalysisModal from './AnalysisModal';

const AnalysisScreen = () => {
  // 분석 페이지는 좌우 패딩 제거함!!

  // 스냅포인트 추가하면 바텀시트 어디까지 올릴 수 있을지 설정할 수 있음!
  const snapPoints = useMemo(() => ['40%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleOpenPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return (
    <ScreenContainer
      barBgColor="black"
      bgColor="white"
      barStyle="light-content"
      ContainerStyle={{ paddingVertical: 1 }}
      isPadding={false}>
      <View className="flex-1 w-full">
        <CalendarContainer onDayPress={handleOpenPress} />
      </View>
      <View className="flex-1 w-full justify-center items-center">
        <WeekChartContainer />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        initialSnapIndex={-1} // 시작 시 바텀시트가 닫힌 상태로 설정
        style={{ borderTopLeftRadius: 48, borderTopRightRadius: 48, elevation: 16 }}>
        <BottomSheetView className="absolute flex-1">
          <AnalysisModal onPress={handleClosePress} />
        </BottomSheetView>
      </BottomSheet>
    </ScreenContainer>
  );
};

export default AnalysisScreen;
