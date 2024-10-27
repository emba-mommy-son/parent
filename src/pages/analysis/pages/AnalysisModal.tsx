import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';
import Close from 'react-native-vector-icons/AntDesign';

interface AnalysisModalProps {
  onPress: () => void;
}

const AnalysisModal = ({ onPress }: AnalysisModalProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View className="h-[600px] px-5">
      <View className="w-full flex flex-row justify-between">
        <Text className="font-medium text-xl">
          {10}월 {26}일
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
