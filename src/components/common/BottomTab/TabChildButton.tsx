import { View, ImageProps, Pressable } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
const unknown = require('../../../assets/images/unknown_person.jpg');
type TabChildButtonProps = {
  img: ImageProps | 'none';
  onPressHandler: () => void;
};

const TabChildButton = ({ img, onPressHandler }: TabChildButtonProps) => {
  return (
    <View className="z-20 absolute bottom-[30px] left-[50%] transform -translate-x-[30px]">
      <Pressable onPress={onPressHandler}>
        {img === 'none' ? (
          <View className="w-16 h-16 rounded-full border-4 border-white justify-center items-center bg-gray-100">
            <Image source={unknown} className="w-12 h-12 rounded-full border-4 border-white" />
          </View>
        ) : (
          <Image source={img} className="w-16 h-16 rounded-full border-4 border-white" />
        )}
      </Pressable>
    </View>
  );
};

export default TabChildButton;
