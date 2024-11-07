import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import Card from '@/components/Card';
import EmotionChart from '@/components/chart/EmotionChart';
import ScreenContainer from '@/components/ScreenContainer';

import LanguagePatternChart from '../components/LanguagePatternChart';
import StressChart from '../components/StressChart';

const ChartScreen = () => {
  const navigation = useNavigation();

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

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="mx-5 bg-my_secondary rounded flex justify-center items-center py-1.5">
          <Text className="text-[#ffffff] text-lg">확인</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
};

export default ChartScreen;
