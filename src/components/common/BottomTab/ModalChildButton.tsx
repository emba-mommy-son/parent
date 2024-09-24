import { View, Pressable, ImageProps, Image } from 'react-native';
import React from 'react';
const unknown = require('../../../assets/images/unknown_person.jpg');

type ModalChildButtonProps = {
  img: ImageProps | 'none';
  onPressHandler: () => void;
};

const ModalChildButton = ({ img, onPressHandler }: ModalChildButtonProps) => {
  return (
    <Pressable className="rounded-full" onPress={onPressHandler}>
      {img === 'none' ? (
        <View className="rounded-full border-4 border-white justify-center items-center bg-gray-100">
          <Image source={unknown} className="w-12 h-12 rounded-full border-4 border-white" />
        </View>
      ) : (
        <View className="rounded-full border-4 border-white justify-center items-center">
          <Image source={img} className="w-12 h-12 rounded-full border-4 border-white" />
        </View>
      )}
    </Pressable>
  );
};

export default ModalChildButton;
