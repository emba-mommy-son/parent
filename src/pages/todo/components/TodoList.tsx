import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Card from '@/components/Card';
import { Todo } from '@/pages/todo/components/Todo';
import { TodoModal } from '@/pages/todo/components/TodoModal';
import EntypoIcons from 'react-native-vector-icons/Entypo';

interface TodoListProps {
  incompletedGoals: Goal[];
  childId: number;
}

const TodoList = ({ incompletedGoals, childId }: TodoListProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setModalOpen(true);
  };
  return (
    <Card isMargin={false}>
      <View className="absolute top-5 right-4 z-10">
        <TouchableOpacity onPress={handleOpen}>
          <EntypoIcons name="plus" size={20} color={'#cccccc'} />
        </TouchableOpacity>
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
      {modalOpen && <TodoModal isModalOpen={modalOpen} setIsModalOpen={setModalOpen} childId={childId} />}
    </Card>
  );
};

export default TodoList;
