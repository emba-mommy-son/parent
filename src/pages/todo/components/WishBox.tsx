import React from 'react';
import { useState } from 'react';

import Card from '@/components/Card';
import CircularProgress from 'react-native-circular-progress-indicator';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import { Image, Text, View } from 'react-native';

import useRootStore from '@/zustand';

import { useRewardImage } from '@/tanstackQuery/queries/reward';

import { WishModal } from '@/pages/todo/components/WishModal';

interface WishBoxProps {
  ratio: number;
}

export const WishBox = ({ ratio }: WishBoxProps) => {
  const { nowSelectedChild } = useRootStore();
  const percentValue = Math.round(ratio);
  const [isWishModalOpen, setIsWishModalOpen] = useState<boolean>(false);
  const rewardImage = useRewardImage(nowSelectedChild?.id ?? 0);
  console.log('리워드이미지', rewardImage);
  console.log('자식아이디', nowSelectedChild);
  return (
    <Card isMargin={false}>
      <View className="absolute top-2.5 left-3.5 flex flex-row">
        <Text className="text-base text-black">3</Text>
        <Text className="text-base text-['#a3a3a3']"> / 6</Text>
      </View>
      <View className="absolute top-3.5 right-3">
        <EntypoIcons name="dots-three-vertical" onPress={() => setIsWishModalOpen(true)} size={17} color={'#bdbdbd'} />
      </View>
      {rewardImage ? (
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
            <Image source={{ uri: rewardImage }} className="w-[65px] h-[65px] absolute rounded-full" />
          </View>
          <Text className="text-lg text-black text-center font-600 mt-2">{percentValue}% 달성</Text>
        </View>
      ) : (
        <View className="flex items-center justify-center h-20">
          <Text className="text-black">🎁 자녀를 위한 선물을 등록해보세요</Text>
        </View>
      )}
      {isWishModalOpen && (
        <WishModal isModalOpen={isWishModalOpen} setIsModalOpen={setIsWishModalOpen} rewardImage={rewardImage} />
      )}
    </Card>
  );
};
