import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import ArrowLeftIcon from 'react-native-vector-icons/AntDesign';

import Colors from '@/constants/Colors';

import LoginScreen from '../pages/auth/pages/LoginScreen';
import SignupScreen from '../pages/auth/pages/SignupScreen';
import RegisterInfoScreen from '../pages/registerChild/pages/RegisterInfoScreen';
import RegisterQRcodeScreen from '../pages/registerChild/pages/RegisterQRcodeScreen';
import { RootStackParamList } from '../types/navigation';
import RootTab from './RootTab';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RootTab" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="RootTab" component={RootTab} options={{ headerShown: false }} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            title: '로그인',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: Colors.GRAY[1],
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: '회원가입',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftIcon name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: 'white',
              elevation: 0, // Android 그림자 제거
              shadowOpacity: 0, // iOS 그림자 제거
              borderBottomWidth: 0, // iOS 경계선 제거
            },
          })}
        />
        <Stack.Screen
          name="RegisterInfo"
          component={RegisterInfoScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: '자녀 등록 (1/2)',
            headerTitleAlign: 'left',
            headerStyle: {
              backgroundColor: 'white',
              paddingBottom: 10,
            },
            headerLeft: () => (
              <TouchableOpacity className="mr-4" onPress={() => navigation.goBack()}>
                <ArrowLeftIcon name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="RegisterQRcode"
          component={RegisterQRcodeScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: '자녀 등록 (2/2)',
            headerLeft: () => (
              <TouchableOpacity className="mr-4" onPress={() => navigation.goBack()}>
                <ArrowLeftIcon name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;