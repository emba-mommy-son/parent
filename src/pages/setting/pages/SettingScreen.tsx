import React from 'react';
import { Image, Alert, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import sampleImg2 from '@/assets/images/sample_img2.png';
import sampleImg3 from '@/assets/images/sample_img3.png';

import ScreenContainer from '@/components/ScreenContainer';
import useRootStore from '@/zustand';
import Card from '@/components/Card';

const SettingScreen = ({ navigation }: { navigation: any }) => {
  const { children } = useRootStore();
  const { clearToken } = useRootStore();

  const data = [
    { name: '김도영', img: sampleImg2, score: 70 },
    { name: '이민수', img: sampleImg3, score: 56 },
    { name: '박지현', img: sampleImg2, score: 80 },
  ];

  const settingList = [
    { id: 0, name: '서비스 이용 약관', link: '' },
    { id: 1, name: '개인정보처리방침', link: '' },
    { id: 2, name: '푸시 알림 설정', link: '' },
    { id: 3, name: '의견 보내기', link: '' },
  ];

  const handleLogout = () => {
    clearToken();
    navigation.navigate('Login');
  };

  const showConfirmAlert = () => {
    Alert.alert(
      '로그아웃 하시겠습니까?',
      '',
      [
        { text: '취소', onPress: () => console.log('취소 선택됨'), style: 'cancel' },
        { text: '확인', onPress: handleLogout },
      ],
      { cancelable: false },
    );
  };

  return (
    <ScreenContainer isPadding={false} ContainerStyle={{ justifyContent: 'space-between', paddingBottom: 50 }}>
      <View className="w-full h-[330px] bg-my_secondary px-5 pt-10 pb-20 rounded-b-3xl z-0 gap-y-10">
        <View className="flex flex-row items-center justify-between mb-5">
          <View className="flex flex-row items-center justify-between w-full">
            <Text className="text-white font-semibold text-xl">설정</Text>
            <TouchableOpacity onPress={showConfirmAlert}>
              <Text className="text-white bg-[#3A3445] px-3 pt-1 pb-1.5 rounded">로그아웃</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Card isMargin={false}>
          <Text className="mb-3 text-black ml-1">등록된 자녀</Text>
          {data.map((child, index) => (
            <View className="w-full flex flex-row justify-between items-center my-2" key={index}>
              <Image source={child.img} width={28} height={28} className="rounded-full w-12 h-12" />
              <View>
                <Text className="text-black mb-2.5">{child.name}</Text>
                <View className="w-[230px] bg-black rounded-full h-1.5">
                  <View
                    className={`bg-my_primary h-1.5 ${child.score === 100 ? 'rounded-full' : 'rounded-l-full'}`}
                    style={{ width: `${child.score}%` }}
                  />
                </View>
              </View>
            </View>
          ))}
        </Card>
        <View className="border-t border-[#f1f1f1]">
          {settingList.map(item => (
            <TouchableOpacity
              className=""
              key={item.id}
              onPress={() => {
                console.log('first');
              }}>
              <View className="border-b border-[#f1f1f1] py-4 px-2.5 flex flex-row justify-between items-center">
                <Text>{item.name}</Text>
                <AntDesign name="right" size={14} style={{ color: '#cacaca' }} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScreenContainer>
  );
};

export default SettingScreen;
