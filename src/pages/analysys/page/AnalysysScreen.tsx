import React from 'react';
import { View } from 'react-native';

import ScreenContainer from '@/components/ScreenContainer';

import CalendarContainer from '../components/CalendarContainer';
import WeekChartContainer from '../components/WeekChartContainer';

const AnalysysScreen = () => {
  // 분석 페이지는 좌우 패딩 제거함!!
  return (
    <ScreenContainer
      barBgColor="black"
      bgColor="white"
      barStyle="light-content"
      type="view"
      ContainerStyle={{ paddingVertical: 1 }}
      isPadding={false}>
      <View className="flex-1 w-full">
        <CalendarContainer />
      </View>
      <View className="flex-1 w-full justify-center items-center">
        <WeekChartContainer />
      </View>
    </ScreenContainer>
  );
};

export default AnalysysScreen;
