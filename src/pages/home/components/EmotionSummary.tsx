import React from 'react';

import { View } from 'react-native';
import Card from '@/components/Card';
import CardCover from '@/components/CardCover';
import EmotionChart from '@/components/chart/EmotionChart';
import useRootStore from '@/zustand';

const EmotionSummary = () => {
  const { nowSelectedChild } = useRootStore();

  return (
    <Card isPadding={false}>
      <EmotionChart />

      <View className="w-full p-4">
        {!nowSelectedChild && <CardCover height={240} text="자녀의 감정 분포를 확인할 수 있습니다" />}
      </View>
    </Card>
  );
};

export default EmotionSummary;
