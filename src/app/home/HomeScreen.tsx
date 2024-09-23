import { View, Text, Button } from 'react-native';
import React from 'react';
import { RootTabParamList } from '@/types/navigation';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type HomeScreenProp = BottomTabNavigationProp<RootTabParamList>;

const HomeScreen = ({ navigation }: { navigation: HomeScreenProp }) => {
  return (
    <View>
      <Text> 홈화면임 @@@@@@@@@@</Text>
    </View>
  );
};

export default HomeScreen;
