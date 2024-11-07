import React from 'react';
import { Text, View } from 'react-native';
import Card from '@/components/Card';
import { Todo } from './Todo';

interface CompletedTodoListProps {
  completedGoals: Goal[];
}

const CompletedTodoList = ({ completedGoals }: CompletedTodoListProps) => {
  return (
    <Card isMargin={false}>
      <Text className="text-black text-lg mb-3">완료한 일</Text>
      {completedGoals.length > 0 ? (
        completedGoals.map(goal => <Todo key={goal.goalId} id={goal.goalId} content={goal.content} done={goal.done} />)
      ) : (
        <View className="w-full h-32 flex items-center justify-center">
          <Text className="text-black text-center mt-[-14px]">현재 목표가 없습니다.</Text>
        </View>
      )}
    </Card>
  );
};

export default CompletedTodoList;
