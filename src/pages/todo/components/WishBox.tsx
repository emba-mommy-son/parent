import React from 'react';
import { Image, Text, View } from 'react-native';
import bike from '@/assets/images/bike.png';

import CircularProgress from 'react-native-circular-progress-indicator';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Card from '@/components/Card';

interface WishBoxProps {
  ratio: number;
}

export const WishBox = ({ ratio }: WishBoxProps) => {
  const percentValue = Math.round(ratio);
  const isHavePresent = true;

  return (
    <Card isMargin={false}>
      <View className="absolute top-2.5 left-3.5 flex flex-row">
        <Text className="text-base text-black">3</Text>
        <Text className="text-base text-['#a3a3a3']"> / 6</Text>
      </View>
      <View className="absolute top-3.5 right-3">
        <EntypoIcons name="dots-three-vertical" size={17} color={'#bdbdbd'} />
      </View>
      {isHavePresent ? (
        <View>
          <View className="flex justify-center items-center relative">
            <CircularProgress
              value={percentValue}
              radius={50}
              duration={1000}
              maxValue={100}
              activeStrokeColor="#FF5185"
              inActiveStrokeColor="#e8e8e8"
              inActiveStrokeOpacity={1}
              inActiveStrokeWidth={8}
              activeStrokeWidth={8}
              progressValueStyle={{ display: 'none' }}
            />
            <Image source={bike} className="w-[65px] h-[65px] absolute rounded-full" />
          </View>
          <Text className="text-lg text-black text-center font-600 mt-2">{percentValue}% 달성</Text>
        </View>
      ) : (
        <View className="flex items-center justify-center h-20">
          <Text className="text-black">🎁 자녀를 위한 선물을 등록해보세요</Text>
        </View>
      )}
    </Card>
  );
};
