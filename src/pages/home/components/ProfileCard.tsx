import { useNavigation } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import { Text, Pressable, View } from 'react-native';
import BellIcon from 'react-native-vector-icons/Octicons';

import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

import ChildStatusCard from '../components/ChildStatusCard';

interface ProfileCardProps {
  emotionScore: number;
  sleepStatus: string;
  notificationList: notificationDto[];
}

const ProfileCard = ({ emotionScore, sleepStatus, notificationList }: ProfileCardProps) => {
  const { nowSelectedChild } = useRootStore();

  const alertCount = useMemo(() => {
    return notificationList ? notificationList.length : 2;
    // return 2;
  }, [notificationList]);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="relative h-[250px]">
      <View className="w-full h-[176px] bg-my_secondary pt-10 rounded-b-3xl z-0">
        <View className="flex flex-row items-center justify-between pl-5 pr-6">
          <Text className="text-white font-semibold text-xl">
            {nowSelectedChild?.name || '등록된 자녀가 없습니다.'}
          </Text>
          <View className="flex flex-row">
            {alertCount > 0 && (
              <Text className="text-my_primary bg-white rounded-lg rounded-br-none px-3 pb-1 mr-1.5">
                새로운 정보가 있습니다
              </Text>
            )}
            <Pressable className="relative" onPress={() => navigation.navigate('Alert')}>
              <BellIcon name="bell" size={22} color="#ffffff" />
              {alertCount > 0 && (
                <View className="absolute top-[-8px] right-[-10px] bg-my_primary flex items-center justify-center rounded-full w-5 h-5">
                  <Text className="text-white mt-[-0.5px]">{alertCount}</Text>
                </View>
              )}
            </Pressable>
          </View>
        </View>
      </View>
      <View className="w-full absolute z-10 top-[90px]">
        <ChildStatusCard emotionScore={emotionScore} sleepStatus={sleepStatus} />
      </View>
    </View>
  );
};

export default ProfileCard;
