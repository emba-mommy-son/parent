import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

import Button from '@/components/buttons/Button';
import LabeledInput from '@/components/inputs/LabeledInput';
import ScreenContainer from '@/components/ScreenContainer';
import SmallSpinner from '@/components/spinner/SmallSpinner';
import auth from '@/services/auth';
import { RootStackParamList } from '@/types/navigation';

type LoginScreenProp = NativeStackScreenProps<RootStackParamList, 'Login'>['navigation'];

const LoginScreen = ({ navigation }: { navigation: LoginScreenProp }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: signIn } = useMutation({
    mutationFn: auth.signIn,
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: () => {
      navigation.navigate('RootTab');
    },
    onError: error => {
      Alert.alert('로그인 실패', '이메일 또는 비밀번호가 일치하지 않습니다.');
      console.error('로그인 실패', error);
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const handleLogin = () => {
    signIn({ username: email, password });
  };
  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  const handleRegister = () => {
    navigation.navigate('RegisterInfo');
  };

  useEffect(() => {
    console.log('email', email);
    console.log('password', password);
  }, [email, password]);

  return (
    <ScreenContainer myScreenStyle="bg-white" barStyle="dark-content">
      <View className="flex-1 justify-center items-center">
        <View className="w-40 h-40 bg-gray-200 mb-16 rounded-full" />
        <LabeledInput
          size="fill"
          label="이메일"
          placeholder="이메일을 입력해주세요."
          className="w-full mb-4"
          onChangeText={text => setEmail(text)}
        />
        <LabeledInput
          size="fill"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          className="w-full mb-4"
          type="password"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Button onPress={handleLogin} type="secondary" myTextStyle="text-white">
        {isLoading ? <SmallSpinner /> : '로그인'}
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
