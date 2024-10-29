import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';

import Button from '@/components/buttons/Button';
import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

type InitScreenProp = NativeStackScreenProps<RootStackParamList, 'Init'>['navigation'];

const InitialScreen = ({ navigation }: { navigation: InitScreenProp }) => {
  const { accessToken, refreshToken } = useRootStore();
  useEffect(() => {
    if (accessToken === undefined || refreshToken === undefined) {
      return;
    }

    if (accessToken && refreshToken) {
      navigation.push('RootTab');
    }
  }, [accessToken, refreshToken]);

  return (
    <View className="flex-1 justify-center items-center p-8">
      {/* <Image source={}></Image> */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-5xl font-bold ">마미손</Text>
      </View>
      <Button myButtonStyle="mb-2" myTextStyle="text-white" onPress={() => navigation.push('Login')}>
        로그인
      </Button>
      <Button myButtonStyle="bg-gray-500" myTextStyle="text-white" onPress={() => navigation.push('Signup')}>
        회원가입
      </Button>
    </View>
  );
};

export default InitialScreen;
