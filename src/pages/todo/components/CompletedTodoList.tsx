import React from 'react';
import { Text, View } from 'react-native';
import Card from '@/components/Card';
import { Todo } from './Todo';

const CompletedTodoList = () => {
  const todoList = [
    {
      goalId: 1,
      content: 'React Native 공부하기',
      done: true,
    },
    {
      goalId: 2,
      content: '운동 30분 하기',
      done: true,
    },
    {
      goalId: 3,
      content: '독서 1시간 하기',
      done: true,
    },
  ];

  return (
    <Card isMargin={false}>
      <Text className="text-black text-lg mb-3">완료한 일</Text>
      {todoList.length > 0 ? (
        todoList.map(todo => <Todo key={todo.goalId} id={todo.goalId} content={todo.content} done={todo.done} />)
      ) : (
        <View className="w-full h-32 flex items-center justify-center">
          <Text className="text-black text-center font-bold">현재 목표가 없습니다.</Text>
        </View>
      )}
    </Card>
  );
};

export default CompletedTodoList;
