import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '@/components/ScreenContainer';
import { WishBox } from './../components/WishBox';
import Card from '@/components/Card';

const TodoScreen = () => {
  return (
    <ScreenContainer barStyle="dark-content">
      <WishBox ratio={72} />
    </ScreenContainer>
  );
};

export default TodoScreen;
