import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-vector-icons/Icon';
import XmarkIcon from 'react-native-vector-icons/FontAwesome6';

const DeleteButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable onPress={() => console.log('first')} className="absolute right-0 top-0">
      <View className="w-6 h-6 bg-my_gray_700 rounded-full items-center justify-center">
        <XmarkIcon name="xmark" size={20} color="white" />
      </View>
    </Pressable>
  );
};

export default DeleteButton;
