// import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import ScreenContainer from '@/components/ScreenContainer';

const SettingScreen = ({ navigation }: { navigation: any }) => {
  const settingList = [
    {
      id: 0,
      name: '서비스 이용 약관',
      link: '',
    },
    {
      id: 1,
      name: '개인정보처리방침',
      link: '',
    },
    {
      id: 2,
      name: '푸시 알림 설정',
      link: '',
    },
    {
      id: 3,
      name: '의견 보내기',
      link: '',
    },
  ];
  const showConfirmAlert = () => {
    Alert.alert(
      '로그아웃 하시겠습니까?', // 제목
      '',
      [
        {
          text: '취소',
          onPress: () => console.log('취소 선택됨'),
          style: 'cancel',
        },
        {
          text: '확인',
          onPress: () => navigation.navigate('Login'),
        },
      ],
      { cancelable: false }, // 바깥 터치 시 닫히지 않게 설정
    );
  };

  return (
    <ScreenContainer isPadding={false} ContainerStyle={{ justifyContent: 'space-between', paddingBottom: 50 }}>
      <View className="w-full h-[500px] bg-my_secondary px-5 pt-10 pb-20 rounded-b-3xl z-0 gap-y-10">
        <View className="flex flex-row items-center justify-between pr-6">
          <Text className="text-white font-semibold text-xl">내 자녀 관리</Text>
        </View>
        <View>
          {Array.from({ length: 10 }).map((_, idx) => (
            <Text key={idx} className="text-white">
              자녀1
            </Text>
          ))}
        </View>
      </View>
      <View className="flex gap-16">
        <View className="flex justify-center gap-3">
          {settingList.map(item => (
            <TouchableOpacity
              className="h-6 justify-center items-center"
              key={item.id}
              onPress={() => {
                console.log('first');
              }}>
              <Text className="text-gray-400 font-semibold">{item.name}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={showConfirmAlert} className="h-6 justify-center items-center">
            <Text className="text-gray-400 font-semibold">로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default SettingScreen;
