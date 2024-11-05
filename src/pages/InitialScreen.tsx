import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Animated, Image, Text, View } from 'react-native';

import Button from '@/components/buttons/Button';
import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

type InitScreenProp = NativeStackScreenProps<RootStackParamList, 'Init'>['navigation'];

const LOADING_TIMEOUT = 500;
const ANIMATION_DURATION = 600; // 애니메이션 지속 시간

const InitialScreen = ({ navigation }: { navigation: InitScreenProp }) => {
  const { accessToken } = useRootStore();
  const [showButtons, setShowButtons] = React.useState(false);
  const translateY = React.useRef(new Animated.Value(100)).current; // 시작 위치 (100px 아래에서 시작)
  const opacity = React.useRef(new Animated.Value(0)).current; // 투명도 시작값

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
      // 버튼이 표시될 때 애니메이션 시작
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
      ]).start();
    }, LOADING_TIMEOUT);

    // 유효한 토큰이 있는 경우
    if (accessToken && accessToken !== '') {
      clearTimeout(timer);
      navigation.navigate('RootTab');
    }

    return () => clearTimeout(timer);
  }, [accessToken, navigation, translateY, opacity]);

  const renderAuthButtons = () => (
    <Animated.View
      className="w-full absolute bottom-7"
      style={{
        transform: [{ translateY }],
        opacity,
      }}>
      <Button myButtonStyle="mb-2" myTextStyle="text-white" onPress={() => navigation.push('Login')}>
        로그인
      </Button>
      <Button myButtonStyle="bg-gray-500" myTextStyle="text-white" onPress={() => navigation.push('Signup')}>
        회원가입
      </Button>
    </Animated.View>
  );

  return (
    <View className="flex-1 justify-center items-center p-8">
      {/* <Image source={}></Image> */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-5xl font-bold">마미손</Text>
      </View>

      {showButtons && renderAuthButtons()}
    </View>
  );
};

export default InitialScreen;
