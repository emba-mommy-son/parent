import { useNavigation } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BellIcon from 'react-native-vector-icons/Octicons';

import { RootStackParamList } from '@/types/navigation';

interface PrifileCardProps {
  nowSelectedChild: ChildInfo;
}

const ProfileCard = ({ nowSelectedChild }: PrifileCardProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [data] = useState(
    isLogin
      ? {
          name: nowSelectedChild.name,
          alert: true,
          alertCnt: 4,
        }
      : null,
  );

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="w-full h-[176px] bg-my_secondary pt-10 rounded-b-3xl z-0" style={[styles.shadow]}>
      <View className="flex flex-row items-center justify-between pl-5 pr-6">
        <Text className="text-white font-semibold text-xl">{data?.name || '등록된 자녀가 없습니다.'}</Text>
        <View className="flex flex-row">
          {data?.alert && (
            <Text className="text-my_primary bg-white rounded-lg rounded-br-none px-3 pb-1 mr-1.5">
              새로운 정보가 있습니다
            </Text>
          )}
          <TouchableOpacity className="relative" onPress={() => navigation.navigate('Alert')}>
            <BellIcon name="bell" size={22} color="#ffffff" />
            {data?.alert && (
              <View className="absolute top-[-8px] right-[-10px] bg-my_primary flex items-center justify-center rounded-full w-5 h-5">
                <Text className="text-white mt-[-0.5px]">{data?.alertCnt}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    zIndex: 0,
  },
});

export default ProfileCard;
