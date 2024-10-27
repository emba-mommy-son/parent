import React from 'react';
import Card from '@/components/Card';
import CardCover from '@/components/CardCover';
import EmotionChart from '@/components/chart/EmotionChart';

const EmotionSummary = () => {
  const isLogin = true;

  return (
    <Card>
      <EmotionChart />

      {!isLogin && <CardCover height={196} text="자녀의 감정 분포를 확인할 수 있습니다" />}
    </Card>
  );
};

export default EmotionSummary;
