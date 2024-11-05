import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ScreenContainer from '@/components/ScreenContainer';

const TodoScreen = () => {
  return (
    <ScreenContainer barStyle="dark-content">
      <ScrollView className="px-4 pb-2.5">
        <Text>todo 페이지임</Text>
      </ScrollView>
    </ScreenContainer>
  );
};

export default TodoScreen;
