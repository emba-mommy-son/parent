import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';

import Button from '@/components/buttons/Button';
import LabeledInput from '@/components/inputs/LabeledInput';
import ScreenContainer from '@/components/ScreenContainer';
import { RootStackParamList } from '@/types/navigation';

type LoginScreenProp = NativeStackScreenProps<RootStackParamList, 'Login'>['navigation'];

const LoginScreen = ({ navigation }: { navigation: LoginScreenProp }) => {
  const handleLogin = () => {};
  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  const handleRegister = () => {
    navigation.navigate('RegisterInfo');
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
      <Button onPress={handleRegister} myButtonStyle="bg-white" myTextStyle="text-my_gray_900">
        자녀등록(임시)
      </Button>
    </ScreenContainer>
  );
};

export default LoginScreen;
