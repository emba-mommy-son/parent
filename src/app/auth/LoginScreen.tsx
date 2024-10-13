import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
// import { RootStackParamList } from '@/types/navigation';
import { RootStackParamList } from '../../types/navigation'; // 경로 수정

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenContainer from '@/components/common/ScreenContainer';
import Button from '@/components/common/buttons/Button';
import LabeledInput from '@/components/common/Inputs/LabeledInput';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList>;

const LoginScreen = ({ navigation }: { navigation: LoginScreenProp }) => {
  const handleLogin = () => {};
  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  return (
    <ScreenContainer myScreenStyle="bg-white" barStyle="dark-content">
      <View className="flex-1 justify-center items-center">
        <View className="w-40 h-40 bg-gray-200 mb-16 rounded-full" />
        <LabeledInput size="fill" label="이메일" placeholder="이메일을 입력해주세요." className="w-full mb-4" />
        <LabeledInput size="fill" label="비밀번호" placeholder="비밀번호를 입력해주세요." className="w-full mb-4" />
      </View>
      <Button onPress={handleLogin} type="secondary" myTextStyle="text-white">
        로그인
      </Button>
      <Button onPress={handleSignup} myButtonStyle="bg-white" myTextStyle="text-my_gray_900">
        회원가입
      </Button>
    </ScreenContainer>
  );
};

export default LoginScreen;
