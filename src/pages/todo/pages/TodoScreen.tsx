import React from 'react';
import ScreenContainer from '@/components/ScreenContainer';
import { WishBox } from './../components/WishBox';
import TodoList from '../components/TodoList';
import CompletedTodoList from '../components/CompletedTodoList';

const TodoScreen = () => {
  return (
    <ScreenContainer barStyle="dark-content">
      <WishBox ratio={72} />
      <TodoList />
      <CompletedTodoList />
    </ScreenContainer>
  );
};

export default TodoScreen;
