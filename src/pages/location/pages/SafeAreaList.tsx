import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Right from 'react-native-vector-icons/Entypo';

import { RootStackParamList } from '@/types/navigation';

type SafeAreaListProps = NativeStackScreenProps<RootStackParamList, '보호구역 목록'>['navigation'];

const SafeAreaList = ({ navigation }: { navigation: SafeAreaListProps }) => {
  const [tabState, setTabState] = useState<'SAFE' | 'DANGER'>('SAFE');
  const safeAreas = [
    { id: 1, title: '학교' },
    { id: 2, title: '집' },
    { id: 3, title: '수학학원' },
    { id: 4, title: '영어학원' },
  ];
  const dangerAreas = [
    { id: 1, title: '게임방' },
    { id: 2, title: 'PC방' },
    { id: 3, title: '탕후루 가게' },
  ];

  // 탭 스타일을 동적으로 생성하는 함수
  const getTabStyle = (tabType: 'SAFE' | 'DANGER') => {
    const isSelected = tabState === tabType;
    return {
      containerStyle: `flex-1 px-4 py-3 border-b-2 ${isSelected ? 'border-gray-900' : 'border-transparent'}`,
      textStyle: `text-center ${isSelected ? 'text-gray-900 font-medium' : 'text-gray-400'}`,
    };
  };

  return (
    <View className="flex-1">
      <View className="flex-row border-b border-gray-200 h-12">
        <TouchableOpacity onPress={() => setTabState('SAFE')} className={getTabStyle('SAFE').containerStyle}>
          <Text className={getTabStyle('SAFE').textStyle}>안전</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTabState('DANGER')} className={getTabStyle('DANGER').containerStyle}>
          <Text className={getTabStyle('DANGER').textStyle}>위험</Text>
        </TouchableOpacity>
      </View>
      <View className="w-full py-3 justify-center items-end px-4">
        <TouchableOpacity className="bg-gray-500 w-10 h-8 rounded-lg justify-center items-center pb-1">
          <Text className="font-medium text-white">편집</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {(tabState === 'SAFE' ? safeAreas : dangerAreas).map(item => (
          <TouchableOpacity
            key={item.id}
            className="flex-row justify-between items-center px-6 py-4 border-b border-gray-200">
            <Text className="text-base">{item.title}</Text>
            <Right name="chevron-thin-right" size={20} color="black" />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('보호 구역 등록 (1/3)')}
        className="absolute right-4 bottom-6 justify-center items-center pb-2 bg-gray-900 rounded-lg p-3 px-5">
        <Text className="text-white font-semibold">+ 추가</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SafeAreaList;