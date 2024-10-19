import React from 'react';
import { Pressable, View } from 'react-native';
import XmarkIcon from 'react-native-vector-icons/FontAwesome6';

const DeleteButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable
      onPress={onPress}
      className="absolute right-0 bottom-2 z-50"
      style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}>
      <View className="w-[26px] h-[26px] rounded-full bg-gray-200 flex items-center justify-center">
        <XmarkIcon name="xmark" size={20} color="white" />
      </View>
    </Pressable>
  );
};

export default DeleteButton;
