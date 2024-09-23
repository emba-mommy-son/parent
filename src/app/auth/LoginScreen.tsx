import { View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { RootStackParamList } from '@/types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList>;

const LoginScreen = ({ navigation }: { navigation: LoginScreenProp }) => {
  const handleSignup = () => {
    navigation.push('Signup');
  };
  return (
    <View>
      <Text>로그인페이지임@@@@@@</Text>
      <TouchableOpacity onPress={handleSignup}>
        <Text>회원가입 페이지로 이동</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
