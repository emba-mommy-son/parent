import React from 'react';
import { Image, ImageProps, Pressable, StyleSheet, Text, View } from 'react-native';

import useRootStore from '@/zustand';

type TabChildButtonProps = {
  img: ProfileImage | null;
  onPressHandler: () => void;
};

const TabChildButton = ({ img, onPressHandler }: TabChildButtonProps) => {
  const { nowSelectedChild } = useRootStore();

  return (
    <View
      className="z-20 w-16 h-16 absolute bottom-[30px] left-[50%] transform -translate-x-[30px] rounded-full border-4 border-white overflow-hidden"
      style={[styles.shadow]}>
      <Pressable onPress={onPressHandler}>
        {!img ? (
          <View className="h-full flex items-center justify-center bg-[#f1f1f1]">
            <Text
              className="text-center"
              style={{
                fontSize: nowSelectedChild ? 15 : 12,
              }}>
              {nowSelectedChild ? nowSelectedChild.name : '자녀 등록'}
            </Text>
          </View>
        ) : (
          <Image source={{ uri: img }} className="w-full h-full bg-white" />
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
