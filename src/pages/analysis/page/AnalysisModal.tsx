import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import XmarkIcon from 'react-native-vector-icons/FontAwesome6';

interface AnalysisModalProps {
  onPress: () => void;
}

const AnalysisModal = ({ onPress }: AnalysisModalProps) => {
  return (
    <View className="h-[600px] flex-row justify-center items-start">
      {/* <Text>ddd</Text> */}
      <View className="w-full flex flex-row justify-between px-6">
        <Text className="font-medium text-xl">
          {10}월 {26}일
        </Text>
        <TouchableOpacity
          onPress={onPress}
          className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center">
          <XmarkIcon name="xmark" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnalysisModal;
