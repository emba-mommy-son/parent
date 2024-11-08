import React from 'react';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Card from '@/components/Card';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Image, Text, ToastAndroid, View, Alert } from 'react-native';

import useRootStore from '@/zustand';
import reward from '@/services/reward';
import { useRewardImage } from '@/tanstackQuery/queries/reward';

import { WishModal } from '@/pages/todo/components/WishModal';
import { keys } from '@/tanstackQuery/keys';

interface WishBoxProps {
  completedCount: number;
  totalCount: number;
}

export const WishBox = ({ completedCount, totalCount }: WishBoxProps) => {
  const queryClient = useQueryClient();
  const { nowSelectedChild } = useRootStore();
  const [isWishModalOpen, setIsWishModalOpen] = useState<boolean>(false);
  const rewardImage = useRewardImage(nowSelectedChild?.id ?? 0);
  //!FIXME 임시로 얼리리턴 박고, 자녀 검증 훅으로 빼자
  if (!nowSelectedChild) return null;
  const percentValue = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  /** 리워드 이미지 삭제 mutation */
  const { mutate: deleteRewardImage } = useMutation({
    mutationFn: reward.deleteRewardImage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keys.getRewardImage(nowSelectedChild.id),
      });
      ToastAndroid.show('선물이 삭제되었습니다.', 2000);
    },
    onError: () => {
      ToastAndroid.show('선물 삭제에 실패했습니다.', 2000);
    },
  });

  const handleDeletePress = () => {
    Alert.alert(
      '이미지 삭제',
      '선물을 삭제하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => {
            deleteRewardImage(nowSelectedChild.id);
          },
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <Card isMargin={false}>
      <View className="absolute top-2.5 left-3.5 flex flex-row">
        <Text className="text-base text-black">{completedCount}</Text>
        <Text className="text-base text-['#a3a3a3']"> / {totalCount}</Text>
      </View>
      <View className="absolute top-3 right-3 flex flex-row gap-2">
        <Text className="text-[#bdbdbd] text-sm font-medium" onPress={() => setIsWishModalOpen(true)}>
          {rewardImage ? '수정' : '추가'}
        </Text>
        {rewardImage && (
          <Text onPress={handleDeletePress} className="text-[#bdbdbd] text-sm font-medium">
            삭제
          </Text>
        )}
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
        <WishModal
          isModalOpen={isWishModalOpen}
          setIsModalOpen={setIsWishModalOpen}
          rewardImage={rewardImage}
          childId={nowSelectedChild.id}
        />
      )}
    </Card>
  );
};
