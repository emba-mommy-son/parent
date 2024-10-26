import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import ArrowLeftIcon from 'react-native-vector-icons/AntDesign';

import AnalysisModal from '@/pages/analysis/page/AnalysisModal';
import AnalysisScreen from '@/pages/analysis/page/AnalysisScreen';

import { RootAnalysisStackList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootAnalysisStackList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnalysisScreen" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="AnalysisScreen" component={AnalysisScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AnalysisModal" component={AnalysisModal} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
