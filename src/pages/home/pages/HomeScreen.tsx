import React from 'react';
import ScreenContainer from '@/components/ScreenContainer';
import ChildStatusCard from '../components/ChildStatusCard';
import LocationCard from '../components/LocationCard';
import EmotionStatsCard from '../components/EmotionStatsCard';

const HomeScreen = () => {
  return (
    <ScreenContainer bgColor="white" barStyle="dark-content" barBgColor="black">
      <ChildStatusCard />
      <LocationCard />
      <EmotionStatsCard />
    </ScreenContainer>
  );
};

export default HomeScreen;
