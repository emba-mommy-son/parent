import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { View } from 'react-native';

import ScreenContainer from '@/components/ScreenContainer';
import CalendarContainer from '../components/CalendarContainer';
import WeekChartContainer from '../components/WeekChartContainer';
import AnalysisModal from './AnalysisModal';

const AnalysisScreen = () => {
  // 스냅포인트 설정: 40%만 설정하여 열릴 때 40%로 고정
  const snapPoints = useMemo(() => ['48%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  // 모달 열기 콜백
  const handleOpenPress = useCallback(() => {
    // expand 대신 snapToIndex(0)으로 정확히 40%로 열리도록 설정
    bottomSheetRef.current?.snapToIndex(0);
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
        snapPoints={snapPoints} // 열릴 때 40% 높이로 고정
        style={{ borderTopLeftRadius: 48, borderTopRightRadius: 48, elevation: 16 }}
        handleIndicatorStyle={{
          backgroundColor: '#ebebeb',
          width: 45,
          height: 5,
          borderRadius: 2.5,
        }}
        enablePanDownToClose={true} // 드래그 바를 아래로 내리면 닫히도록 설정
      >
        <BottomSheetView className="absolute flex-1">
          <AnalysisModal />
        </BottomSheetView>
      </BottomSheet>
    </ScreenContainer>
  );
};

export default AnalysisScreen;
