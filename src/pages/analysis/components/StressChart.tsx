import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const StressChart = () => {
  const stressScore = 8;

  return (
    <View className="py-4">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-base text-black mb-3">스트레스 지수</Text>
        <View className="flex flex-row items-end">
          <Text className="font-medium text-base text-black mb-3">{stressScore}</Text>
          <Text className="text-[#a3a3a3] mb-3"> / 10</Text>
        </View>
      </View>
      <View className="w-full h-4 bg-[#F4F4F4] rounded-full relative" style={[styles.shadow]}>
        <View
          className="absolute top-0 left-0 h-4 rounded-full"
          style={{
            width: `${(stressScore / 10) * 100}%`,
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
