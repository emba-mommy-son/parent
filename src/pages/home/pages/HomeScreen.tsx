import React from 'react';
import { View } from 'react-native';
import ScreenContainer from '@/components/ScreenContainer';
import ChildStatusCard from '../components/ChildStatusCard';
import LocationCard from '../components/LocationCard';
import EmotionStatsCard from '../components/EmotionStatsCard';
import ProfileCard from '../components/ProfileCard';

const HomeScreen = () => {
  return (
    <ScreenContainer isPadding={false}>
      <View className="relative">
        <ProfileCard />
        <View className="absolute z-10 top-[90px]">
          <ChildStatusCard />
          <LocationCard />
          <EmotionStatsCard />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
