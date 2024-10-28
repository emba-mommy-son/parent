import React, { useEffect } from 'react';
import { View } from 'react-native';

import ScreenContainer from '@/components/ScreenContainer';
import useRootStore from '@/zustand';

import ChildStatusCard from '../components/ChildStatusCard';
import EmotionSummary from '../components/EmotionSummary';
import LocationCard from '../components/LocationCard';
import ProfileCard from '../components/ProfileCard';

const HomeScreen = () => {
  const { nowSelectedChild, setNowSelectedChild } = useRootStore();

  useEffect(() => {
    // api 연결(선택된 자녀 정보 불러오기)

    //임시
    setNowSelectedChild({
      childId: 1,
      name: '김도영김도올드',
      profileImage:
        'https://i.namu.wiki/i/38Gd7TqELmVjZOxv_o9IlD9z5RVQ33-FSCzQS-AFY6COMYpxFcH_XjAALWm_Gswh9xwBUVENkwgwGwnj8a-cAg.webp',
    });
  }, []);

  return (
    <ScreenContainer bgColor="white" barBgColor="black" isPadding={false}>
      <View className="relative">
        <ProfileCard nowSelectedChild={nowSelectedChild} />
        <View className="absolute z-10 top-[90px]">
          <ChildStatusCard nowSelectedChild={nowSelectedChild} />
          <LocationCard />
          <EmotionSummary />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
