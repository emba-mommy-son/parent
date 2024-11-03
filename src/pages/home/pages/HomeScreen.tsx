import React, { useEffect } from 'react';
import { View } from 'react-native';

import ScreenContainer from '@/components/ScreenContainer';
import useRootStore from '@/zustand';

import ChildStatusCard from '../components/ChildStatusCard';
import EmotionSummary from '../components/EmotionSummary';
import LocationCard from '../components/LocationCard';
import ProfileCard from '../components/ProfileCard';
import { useConnectedChild } from '@/tanstackQuery/queries/child';

const HomeScreen = () => {
  // 자녀 정보 불러오기
  const children = useConnectedChild();

  return (
    <ScreenContainer bgColor="white" barBgColor="black" isPadding={false}>
      <View className="relative">
        <ProfileCard />
        <View className="absolute z-10 top-[90px]">
          <ChildStatusCard />
          <LocationCard />
          <EmotionSummary />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
