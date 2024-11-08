import React from 'react';
import { Text, View } from 'react-native';
import Card from '@/components/Card';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import { Todo } from './Todo';

interface TodoListProps {
  incompletedGoals: Goal[];
  childId: number;
}

const TodoList = ({ incompletedGoals, childId }: TodoListProps) => {
  return (
    <Card isMargin={false}>
      <View className="absolute top-5 right-4">
        <EntypoIcons name="plus" size={20} color={'#cccccc'} />
      </View>
      <Text className="text-black text-lg mb-3">할 일</Text>
      {incompletedGoals.length > 0 ? (
        incompletedGoals.map(goal => (
          <Todo key={goal.goalId} id={goal.goalId} content={goal.content} done={goal.done} childId={childId} />
        ))
      ) : (
        <View className="w-full h-32 flex items-center justify-center">
          <Text className="text-black text-center mt-[-14px]">현재 목표가 없습니다.</Text>
        </View>
      )}
    </Card>
  );
};

export default TodoList;
