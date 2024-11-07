import React from 'react';
import ScreenContainer from '@/components/ScreenContainer';
import { WishBox } from '@/pages/todo/components/WishBox';
import TodoList from '@/pages/todo/components/TodoList';
import CompletedTodoList from '@/pages/todo/components/CompletedTodoList';
import { useGetGoals } from '@/tanstackQuery/queries/goal';
import useRootStore from '@/zustand';

const TodoScreen = () => {
  const { nowSelectedChild } = useRootStore();

  //!FIXME 임시로 얼리리턴 박고, 자녀 검증 훅으로 빼자
  if (!nowSelectedChild) return null;

  const goalList = useGetGoals(nowSelectedChild.id);
  if (!goalList) return null;

  // 완료/전체 goal 개수 계산
  const completedCount = goalList.filter(goal => goal.done).length;
  const totalCount = goalList.length;

  // 완료/미완료 goal 분리
  const completedGoals = goalList.filter(goal => goal.done);
  const incompletedGoals = goalList.filter(goal => !goal.done);
  console.log('전체', goalList);
  console.log('dhkstjd', incompletedGoals);

  return (
    <ScreenContainer barStyle="dark-content">
      <WishBox ratio={72} completedCount={completedCount} totalCount={totalCount} />
      <TodoList incompletedGoals={incompletedGoals} />
      <CompletedTodoList completedGoals={completedGoals} />
    </ScreenContainer>
  );
};

export default TodoScreen;
