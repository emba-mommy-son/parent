import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface CardCoverProps {
  height: number;
  text: string;
}

const CardCover = ({ height, text }: CardCoverProps) => {
  return (
    <View className={`absolute w-full m-4 flex justify-center items-center z-50`} style={[styles.bgc, { height }]}>
      <View className="flex items-center py-4 w-full" style={[styles.bgc]}>
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
