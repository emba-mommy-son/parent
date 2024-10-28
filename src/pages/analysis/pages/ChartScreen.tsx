import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import Card from '@/components/Card';
import EmotionChart from '@/components/chart/EmotionChart';
import ScreenContainer from '@/components/ScreenContainer';

import LanguagePatternChart from '../components/LanguagePatternChart';
import StressChart from '../components/StressChart';

const ChartScreen = () => {
  return (
    <ScreenContainer barStyle="dark-content" isPadding={false}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <View className="my-1.5">
          <Card>
            <EmotionChart showReport={false} />
            <StressChart />
            <LanguagePatternChart />
          </Card>
        </View>
        <View className="mx-5 bg-my_secondary rounded flex justify-center items-center py-1.5">
          <Text className="text-[#ffffff] text-lg">확인</Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default ChartScreen;
