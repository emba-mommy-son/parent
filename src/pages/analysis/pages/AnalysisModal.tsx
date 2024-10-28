import { type NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Close from 'react-native-vector-icons/AntDesign';

import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

interface AnalysisModalProps {
  onPress: () => void;
}

const AnalysisModal = ({ onPress }: AnalysisModalProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { selectedDate } = useRootStore();
  useEffect(() => {
    console.log(selectedDate);
  });

  return (
    <View className="h-[600px] px-5">
      <View className="w-full flex flex-row justify-between">
        <Text className="font-medium text-xl">
          {selectedDate.split('-')[1]}월 {selectedDate.split('-')[2]}일
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Close name="close" size={20} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="bg-my_secondary rounded flex justify-center items-center py-1.5 mt-4"
        onPress={() => navigation.navigate('Chart')}>
        <Text className="text-[#ffffff] text-lg">분석 결과</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnalysisModal;
