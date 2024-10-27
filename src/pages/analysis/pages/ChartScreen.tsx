import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import ScreenContainer from '@/components/ScreenContainer';
import Card from '@/components/Card';
import EmotionChart from '@/components/chart/EmotionChart';
import StressChart from '../components/StressChart';
import LanguagePatternChart from '../components/LanguagePatternChart';

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
