import React from 'react';
import ScreenContainer from '@/components/ScreenContainer';
import { WishBox } from '@/pages/todo/components/WishBox';
import TodoList from '@/pages/todo/components/TodoList';
import CompletedTodoList from '@/pages/todo/components/CompletedTodoList';
import { useGetGoals } from '@/tanstackQuery/queries/goal';
import useRootStore from '@/zustand';

const TodoScreen = () => {
  const { nowSelectedChild } = useRootStore();

  const goals = useGetGoals(nowSelectedChild?.id ?? 0);
  //!FIXME 임시로 얼리리턴 박고, 자녀 검증 훅으로 빼자
  if (!nowSelectedChild) return null;
  if (!goals) return null;

  if (!goals) return null;

  const computedGoals = {
    completed: goals.filter(goal => goal.done),
    incompleted: goals.filter(goal => !goal.done),
  };

  return (
    <ScreenContainer barStyle="dark-content">
      <WishBox completedCount={computedGoals.completed.length} totalCount={goals.length} />
      <TodoList incompletedGoals={computedGoals.incompleted} childId={nowSelectedChild.id} />
      <CompletedTodoList completedGoals={computedGoals.completed} childId={nowSelectedChild.id} />
    </ScreenContainer>
  );
};

export default TodoScreen;
