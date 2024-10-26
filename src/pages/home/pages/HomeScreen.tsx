import React from 'react';
import { View } from 'react-native';

import ScreenContainer from '@/components/ScreenContainer';

import ProfileCard from '../components/ProfileCard';
import ChildStatusCard from '../components/ChildStatusCard';
import LocationCard from '../components/LocationCard';
import EmotionSummary from '../components/EmotionSummary';

const HomeScreen = () => {
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
