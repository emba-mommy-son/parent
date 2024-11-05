import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Card from '@/components/Card';
import CardCover from '@/components/CardCover';
import useRootStore from '@/zustand';

const TodoCard = () => {
  const { nowSelectedChild } = useRootStore();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Card>
      <View className="flex flex-row justify-between items-center">
        <Text className="text-base text-black">목표 달성 요약</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Todo')} className="flex flex-row items-center">
          <Text className="mb-1 mr-0.5 text-[#aaaaaa]">내역 관리</Text>
          <AntDesign name="right" size={14} style={{ color: '#cacaca' }} />
        </TouchableOpacity>
      </View>

      {/* {!nowSelectedChild && <CardCover height={10} text="자녀의 목표 달성 정도를 확인할 수 있습니다" />} */}
    </Card>
  );
};

export default TodoCard;
