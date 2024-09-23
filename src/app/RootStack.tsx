import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './auth/LoginScreen';
import SignupScreen from './auth/SignupScreen';
import RootTab from './RootTab';
import { RootStackParamList } from '@/types/navigation';
import RegisterQRcodeScreen from './registerChild/RegisterQRcodeScreen';
import RegisterInfoScreen from './registerChild/RegisterInfoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RootTab" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RootTab" component={RootTab} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterInfo" component={RegisterInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterQRcode" component={RegisterQRcodeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
