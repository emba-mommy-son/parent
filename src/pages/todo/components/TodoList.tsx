import React from 'react';
import { Text, View } from 'react-native';
import Card from '@/components/Card';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import { Todo } from './Todo';

const TodoList = () => {
  const todoList = [
    {
      goalId: 1,
      content: 'React Native 공부하기',
      done: false,
    },
    {
      goalId: 2,
      content: '운동 30분 하기',
      done: false,
    },
    {
      goalId: 3,
      content: '독서 1시간 하기',
      done: false,
    },
  ];

  return (
    <Card isMargin={false}>
      <View className="absolute top-5 right-4">
        <EntypoIcons name="plus" size={20} color={'#cccccc'} />
      </View>
      <Text className="text-black text-lg mb-3">할 일</Text>
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

export default TodoList;
