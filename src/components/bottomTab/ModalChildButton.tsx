import React from 'react';
import { Image, ImageProps, Pressable, Text, View } from 'react-native';

type ModalChildButtonProps = {
  img: ImageProps | 'none';
  name: string;
  onPressHandler: () => void;
};

const ModalChildButton = ({ img, name, onPressHandler }: ModalChildButtonProps) => {
  return (
    <Pressable className="rounded-full overflow-hidden w-[52px] h-[52px] ml-[-8px]" onPress={onPressHandler}>
      {img === 'none' ? (
        <View className="w-full h-full flex items-center justify-center bg-my_gray_0 text-sm">
          <Text className="text-center mt-[-2px]">{name}</Text>
        </View>
      ) : (
        <View>
          <Image source={img} className="w-full h-full border-4 border-white" />
        </View>
      )}
    </Pressable>
  );
};

export default ModalChildButton;
