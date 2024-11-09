import React, { useEffect } from 'react';
import { View } from 'react-native';

import ScreenContainer from '@/components/ScreenContainer';
import { useChildScore, useChildSleep, useConnectedChild } from '@/tanstackQuery/queries/child';
import { useGetNotification } from '@/tanstackQuery/queries/notification';
import useRootStore from '@/zustand';

import EmotionSummary from '../components/EmotionSummary';
import LocationCard from '../components/LocationCard';
import ProfileCard from '../components/ProfileCard';
import TodoCard from '../components/TodoCard';

const HomeScreen = () => {
  // 자녀 정보 불러오기
  useConnectedChild();
  const { nowSelectedChild } = useRootStore();

  // 자녀 점수 조회
  const emotionScore = useChildScore(nowSelectedChild ? nowSelectedChild.id : null);

  // 자녀 수면 정보 조회
  const sleepStatus = useChildSleep(nowSelectedChild ? nowSelectedChild.id : null);

  // 알림 목록 조회
  const notificationList = useGetNotification();

  return (
    <ScreenContainer bgColor="white" barBgColor="black" isPadding={false}>
      <View className="relative">
        <ProfileCard emotionScore={emotionScore} sleepStatus={sleepStatus} notificationList={notificationList ?? []} />
        <TodoCard />
        <LocationCard />
        <EmotionSummary />
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
