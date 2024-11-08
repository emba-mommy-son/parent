import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import { Text, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Card from '@/components/Card';
import CardCover from '@/components/CardCover';
import useRootStore from '@/zustand';
import { useGetGoals } from '@/tanstackQuery/queries/goal';
import CircularProgress from 'react-native-circular-progress-indicator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoCard = () => {
  const { nowSelectedChild } = useRootStore();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  //!FIXME 임시로 얼리리턴 박고, 자녀 검증 훅으로 빼자
  if (!nowSelectedChild) return null;
  const goals = useGetGoals(nowSelectedChild.id);

  const hasGoals = goals && goals.length > 0;

  console.log(goals);

  // 달성률 계산
  const calculateProgress = () => {
    if (!goals || goals.length === 0) return 0;
    const completedGoals = goals.filter(goal => goal.done).length;
    return Math.round((completedGoals / goals.length) * 100);
  };
  return (
    <Card>
      <View className="flex flex-row justify-between items-center">
        <Text className="text-base text-black">목표 달성 요약</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Todo')} className="flex flex-row items-center">
          <Text className="mb-1 mr-0.5 text-[#aaaaaa]">내역 관리</Text>
          <AntDesign name="right" size={14} style={{ color: '#cacaca' }} />
        </TouchableOpacity>
      </View>

      {hasGoals ? (
        <View className="flex flex-row justify-between items-center py-2">
          <View className="flex-1">
            {goals.slice(0, 3).map(goal => (
              <View key={goal.goalId} className="flex flex-row items-center space-x-1 mb-2">
                <MaterialCommunityIcons
                  name={goal.done ? 'checkbox-marked' : 'checkbox-blank-outline'}
                  color={goal.done ? '#ee5185' : '#D7D7D7'}
                  size={25}
                />
                <Text className="text-black" numberOfLines={1}>
                  {goal.content}
                </Text>
              </View>
            ))}
          </View>

          <CircularProgress
            value={calculateProgress()}
            radius={40}
            duration={2000}
            progressValueColor={'#000000'}
            maxValue={100}
            activeStrokeColor={'#ee5185'}
            inActiveStrokeColor={'#f0f0f0'}
            inActiveStrokeWidth={8}
            activeStrokeWidth={8}
            valueSuffix={'%'}
          />
        </View>
      ) : (
        <View className="py-8">
          <Text className="text-center text-gray-500">목표를 설정해주세요</Text>
        </View>
      )}

      {!nowSelectedChild && <CardCover height={90} text="자녀의 목표 달성 정도를 확인할 수 있습니다" />}
    </Card>
  );
};

export default TodoCard;
