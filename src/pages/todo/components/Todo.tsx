import React from 'react';
import { Alert, Text, ToastAndroid, View } from 'react-native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import goal from '@/services/goal';
import { keys } from '@/tanstackQuery/keys';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface TodoListProps {
  id: number;
  content: string;
  done: boolean;
  childId: number;
}

export const Todo = ({ id, content, done, childId }: TodoListProps) => {
  const queryClient = useQueryClient();

  /** 목표 달성  */
  const { mutate: doneGoal } = useMutation({
    mutationFn: () => goal.doneGoal(childId, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keys.getGoals(childId),
      });
      console.log('성공');
    },
    onError: error => {
      ToastAndroid.show('실패했습니다', 2000);
      console.error(error);
    },
  });

  /** 목표 달성 취소 */
  const { mutate: undoneGoal } = useMutation({
    mutationFn: () => goal.undoneGoal(childId, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keys.getGoals(childId),
      });
      console.log('목표 달성 취소 성공');
    },
    onError: error => {
      ToastAndroid.show('실패했습니다.', 2000);
      console.error(error);
    },
  });

  /** 목표 삭제 */
  const { mutate: deleteGoal } = useMutation({
    mutationFn: () => goal.deleteGoal(childId, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: keys.getGoals(childId),
      });
      ToastAndroid.show('Todo 삭제에 성공했습니다.', 2000);
    },
    onError: error => {
      ToastAndroid.show('Todo 삭제에 실패했습니다.', 2000);
      console.error(error);
    },
  });

  const handleDoneGoal = () => {
    if (!done) {
      doneGoal();
    }
    if (done) {
      undoneGoal();
    }
  };

  const handleDeletePress = () => {
    Alert.alert(
      'Todo 삭제',
      'Todo를 삭제하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => {
            deleteGoal();
          },
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row items-center space-x-3 my-1">
        <MaterialCommunityIcons
          name={done ? 'checkbox-marked' : 'checkbox-blank-outline'}
          color={done ? '#ee5185' : '#D7D7D7'}
          size={24}
          onPress={handleDoneGoal}
        />
        <Text className="text-base text-black">{content}</Text>
      </View>

      <EntypoIcons onPress={handleDeletePress} name="cross" size={20} color={'#e0e0e0'} />
    </View>
  );
};
