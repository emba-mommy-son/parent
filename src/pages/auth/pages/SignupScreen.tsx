import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import Button from '@/components/buttons/Button';
import LabeledInput from '@/components/inputs/LabeledInput';
import ScreenContainer from '@/components/ScreenContainer';
import SmallSpinner from '@/components/spinner/SmallSpinner';
import auth from '@/services/auth';
import { RootStackParamList } from '@/types/navigation';
import { phoneFormat } from '@/utils/formatter/phoneFormat';
import { allValid } from '@/utils/validation';

type SignupScreenProp = NativeStackScreenProps<RootStackParamList>;

const SignupScreen = ({ navigation }: SignupScreenProp) => {
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [activeSections, setActiveSections] = useState([]);
  const [isAllAgreed, setIsAllAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { mutate: signup } = useMutation({
    mutationFn: auth.signUp,
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: () => {
      // Alert.alert('회원가입 성공', '로그인 페이지로 이동합니다.');
      navigation.navigate('Login');
    },
    onError: data => {
      Alert.alert('회원가입 실패', '다시 시도해주세요.');
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  useEffect(() => {
    console.log(activeSections);
  }, [activeSections]);

  // 이용약관 내용 및 내부 컴포넌트
  const SECTIONS = [
    {
      title: '회원가입 약관 동의',
      content: `1. 서비스 이용 약관

마미손 서비스 이용을 위한 필수 약관입니다. 동의하셔야 서비스 이용이 가능합니다.

2. 개인정보 처리 방침

회원님의 개인정보를 보호하고 안전하게 관리하기 위한 방침에 동의가 필요합니다.

3. 푸시 알림 동의

서비스 이용과 관련된 알림을 실시간으로 받아보시겠습니까?
동의 시, 마미손 서비스 내 중요 알림을 받을 수 있습니다.
`,
    },
  ];

  const renderHeader = (section: any, _: any, isActive: boolean) => {
    return (
      <View style={[styles.header, isActive && styles.activeHeader]}>
        <Text className="text-sm text-black">{section.title}</Text>
      </View>
    );
  };

  // 이용약관 전체 동의 버튼 클릭
  const agreeHandler = () => {
    setIsAllAgreed(true);
    setActiveSections([]);
  };

  const renderContent = (section: any) => {
    return (
      <ScrollView contentContainerStyle={{ marginBottom: 20 }}>
        <Text className="text-sm">{section.content}</Text>
        <Button
          type="secondary"
          size="hug"
          myButtonStyle="px-2 py-1 bg-my_primary"
          myTextStyle="text-white"
          onPress={agreeHandler}>
          동의
        </Button>
      </ScrollView>
    );
  };

  const updateSections = (activeSections: any) => {
    setActiveSections(activeSections);
  };

  // 회원가입 버튼 클릭
  const handleSignup = () => {
    // 모든 형식 검사
    if (!allValid(signupName, signupEmail, signupPassword, signupPasswordConfirm, signupPhone)) {
      return;
    }

    // 약관 동의 검사
    if (!isAllAgreed) {
      Alert.alert('약관 동의', '모든 약관에 동의해주세요.');
      return;
    }

    // 회원가입 진행 -> 이메일로 보내긴 하지만 validation 안하면 아이디도 됨
    signup({
      name: signupName,
      username: signupEmail, // email or 아이디
      password: signupPassword,
      phoneNumber: signupPhone,
    });
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const onChangePhone = (text: string) => {
    setSignupPhone(phoneFormat(text));
  };

  return (
    <ScreenContainer barStyle="dark-content">
      <View className="flex-1 justify-start items-center">
        <LabeledInput
          size="fill"
          label="성명"
          placeholder=""
          className="w-full mb-4"
          value={signupName}
          onChangeText={text => setSignupName(text as Name)}
        />
        <LabeledInput
          size="fill"
          label="아이디"
          placeholder=""
          className="w-full mb-4"
          type="email"
          value={signupEmail}
          onChangeText={text => setSignupEmail(text as UserName)}
        />
        <LabeledInput
          size="fill"
          label="비밀번호"
          placeholder=""
          className="w-full mb-4"
          type="password"
          value={signupPassword}
          onChangeText={text => setSignupPassword(text as Password)}
        />
        <LabeledInput
          size="fill"
          label="비밀번호 확인"
          placeholder=""
          className="w-full mb-4"
          value={signupPasswordConfirm}
          type="password"
          onChangeText={text => setSignupPasswordConfirm(text as Password)}
        />
        <LabeledInput
          size="fill"
          label="전화번호"
          placeholder=""
          className="w-full mb-4"
          value={signupPhone}
          keyboardType="numeric"
          onChangeText={onChangePhone}
        />
        <Accordion
          sections={SECTIONS}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={updateSections}
          align="center"
          containerStyle={{ width: '100%' }}
        />
      </View>
      <View className="justify-center items-center">
        <Button onPress={handleSignup} type="secondary" myTextStyle="text-white">
          {isLoading ? <SmallSpinner /> : '회원가입'}
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
    width: '100%',
    alignItems: 'center',
  },
  activeHeader: {
    backgroundColor: 'white', // 활성화 시에도 동일한 배경색
    alignItems: 'center',
  },
});

export default SignupScreen;
