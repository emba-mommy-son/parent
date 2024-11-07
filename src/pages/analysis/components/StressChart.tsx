import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useChildEachEmotionReport } from '@/tanstackQuery/queries/analysis';
import useRootStore from '@/zustand';

const StressChart = () => {
  const { nowSelectedChild, selectedDate } = useRootStore();
  const emotionData = useChildEachEmotionReport({ childId: nowSelectedChild?.id ?? 0, dateTime: selectedDate });
  const [stressScore, setStressScore] = useState(0);

  useEffect(() => {
    if (emotionData) {
      setStressScore(emotionData.emotionalIntensity);
    }
  }, [emotionData]);

  return (
    <View className="py-4">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-base text-black mb-3">스트레스 지수</Text>
        <View className="flex flex-row items-end">
          <Text className="font-medium text-base text-black mb-3">{(stressScore / 100) * 10}</Text>
          <Text className="text-[#a3a3a3] mb-3"> / 10</Text>
        </View>
      </View>
      <View className="w-full h-4 bg-[#F4F4F4] rounded-full relative" style={[styles.shadow]}>
        <View
          className="absolute top-0 left-0 h-4 rounded-full"
          style={{
            width: `${(stressScore / 100) * 100}%`,
            backgroundColor: '#ffccd5',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});

export default StressChart;
