import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface CardCoverProps {
  height: number;
  text: string;
}

const CardCover = ({ height, text }: CardCoverProps) => {
  return (
    <View className={`absolute w-full h-[${height}px] m-4 flex justify-center items-center`} style={[styles.bgc]}>
      <View className="flex items-center py-4 px-2" style={[styles.bgc]}>
        <Feather name="info" size={18} />
        <Text className="text-black pt-3">{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgc: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
});

export default CardCover;
