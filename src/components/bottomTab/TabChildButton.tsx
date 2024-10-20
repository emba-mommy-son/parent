import React from 'react';
import { Image, ImageProps, Pressable, StyleSheet, Text, View } from 'react-native';

type TabChildButtonProps = {
  img: ImageProps | 'none';
  onPressHandler: () => void;
};

const TabChildButton = ({ img, onPressHandler }: TabChildButtonProps) => {
  return (
    <View
      className="z-20 w-16 h-16 absolute bottom-[30px] left-[50%] transform -translate-x-[30px] rounded-full border-4 border-white overflow-hidden"
      style={[styles.shadow]}>
      <Pressable onPress={onPressHandler}>
        {img === 'none' ? (
          <View className="h-full flex items-center justify-center bg-white">
            <Text className="text-center">김이름</Text>
          </View>
        ) : (
          <Image source={img} className="w-full h-full" />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#646464',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default TabChildButton;
