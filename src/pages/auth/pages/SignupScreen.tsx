import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import Button from '@/components/buttons/Button';
import LabeledInput from '@/components/inputs/LabeledInput';
import ScreenContainer from '@/components/ScreenContainer';
import { RootStackParamList } from '@/types/navigation';

type SignupScreenProp = NativeStackScreenProps<RootStackParamList>;

const SignupScreen = ({ navigation }: SignupScreenProp) => {
  const SECTIONS = [
    {
      title: '이용약관 전체 동의',
      content:
        '동의안하면 이용못함@@@@@@@@@@@@@@동의안하면 이용못함@@@@@@@@@@@@@@동의안하면 이용못함@@@@@@@@@@@@@@동의안하면 이용못함@@@@@@@@@@@@@@동의안하면 이용못함@@@@@@@@@@@@@@동의안하면 이용못함@@@@@@@@@@@@@@동의안하면 이용못함@@@@@@@@@@@@@@동의안하면 이용못함@@@@@@@@@@@@@@',
    },
  ];
  const [activeSections, setActiveSections] = useState([]);

  const renderHeader = (section: any, _: any, isActive: boolean) => {
    return (
      <View style={[styles.header, isActive && styles.activeHeader]}>
        <Text>{section.title}</Text>
      </View>
    );
  };

  const renderContent = (section: any) => {
    return <Text>{section.content}</Text>;
  };

  const updateSections = (activeSections: any) => {
    setActiveSections(activeSections);
  };

  const handleSignup = () => {};
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <ScreenContainer type="view" myScreenStyle="bg-white" barStyle="dark-content">
      <View className="flex-1 justify-start items-center">
        <LabeledInput size="fill" label="성명" placeholder="" className="w-full mb-4" />
        <LabeledInput size="fill" label="이메일" placeholder="" className="w-full mb-4" />
        <LabeledInput size="fill" label="비밀번호" placeholder="" className="w-full mb-4" />
        <LabeledInput size="fill" label="비밀번호 확인" placeholder="" className="w-full mb-4" />
        <LabeledInput size="fill" label="전화번호" placeholder="" className="w-full mb-4" />
        <Accordion
          sections={SECTIONS}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={updateSections}
        />
      </View>
      <View className="justify-center items-center">
        <Button onPress={handleSignup} type="secondary" myTextStyle="text-white">
          회원가입
        </Button>
        <View className="flex-row items-center mt-4">
          <Text className="text-sm text-gray-500 mr-2">이미 회원이신가요?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text className="text-sm text-black">로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white', // 기본 배경색
    padding: 10,
  },
  activeHeader: {
    backgroundColor: 'none', // 활성화 시에도 동일한 배경색
  },
});

export default SignupScreen;
