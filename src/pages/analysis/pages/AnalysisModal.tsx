import { type NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Close from 'react-native-vector-icons/AntDesign';

import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

const AnalysisModal = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { selectedDate } = useRootStore();
  useEffect(() => {
    console.log(selectedDate);
  });

  return (
    <View className="h-[600px] px-5">
      <View className="w-full flex flex-row justify-between">
        <Text className="font-medium text-lg text-[#000000]">
          {selectedDate.split('-')[1]}월 {selectedDate.split('-')[2]}일
        </Text>
      </View>
      <TouchableOpacity
        className="bg-my_secondary rounded flex justify-center items-center py-1.5 mt-4"
        onPress={() =>
          navigation.navigate('Chart', {
            selectedDate: `${selectedDate.split('-')[0]}년 ${selectedDate.split('-')[1]}월 ${selectedDate.split('-')[2]}일`,
          })
        }>
        <Text className="text-[#ffffff] text-lg">분석 레포트 보러가기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnalysisModal;
