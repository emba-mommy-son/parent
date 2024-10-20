import React from 'react';
import { View, Text } from 'react-native';
import Card from '@/components/Card';

const EmotionStatsCard = () => {
  const data = [
    { x: '호기심/의문', y: 30 },
    { x: '즐거움', y: 25 },
    { x: '불안', y: 15 },
    { x: '불편함', y: 20 },
  ];

  return (
    <Card>
      <Text>감정 통계</Text>
    </Card>
  );
};

export default EmotionStatsCard;
