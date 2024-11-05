import React from 'react';
import { View } from 'react-native';

import ScreenContainer from '@/components/ScreenContainer';

import EmotionSummary from '../components/EmotionSummary';
import LocationCard from '../components/LocationCard';
import ProfileCard from '../components/ProfileCard';
import { useConnectedChild } from '@/tanstackQuery/queries/child';
import TodoCard from '../components/TodoCard';

const HomeScreen = () => {
  // 자녀 정보 불러오기
  const children = useConnectedChild();

  return (
    <ScreenContainer bgColor="white" barBgColor="black" isPadding={false}>
      <View className="relative">
        <ProfileCard />
        <TodoCard />
        <LocationCard />
        <EmotionSummary />
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
