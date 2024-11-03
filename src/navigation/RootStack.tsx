import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import ArrowLeftIcon from 'react-native-vector-icons/AntDesign';

import Colors from '@/constants/Colors';
import AlertScreen from '@/pages/alert/pages/AlertScreen';
import ChartScreen from '@/pages/analysis/pages/ChartScreen';
import LoginScreen from '@/pages/auth/pages/LoginScreen';
import SignupScreen from '@/pages/auth/pages/SignupScreen';
import InitialScreen from '@/pages/InitialScreen';
import EnrollSafeArea from '@/pages/location/pages/EnrollSafeArea';
import MoveRecord from '@/pages/location/pages/MoveRecord';
import NowLocation from '@/pages/location/pages/NowLocation';
import SafeAreaList from '@/pages/location/pages/SafeAreaList';
import SetAddress from '@/pages/location/pages/SetAddress';
import SetArea from '@/pages/location/pages/SetArea';
import RegisterInfoScreen from '@/pages/registerChild/pages/RegisterInfoScreen';
import RegisterQRcodeScreen from '@/pages/registerChild/pages/RegisterQRcodeScreen';
import { RootStackParamList } from '@/types/navigation';
import RootTab from './RootTab';
import { YearFormat } from '@/utils/formatter/TimeFormat';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Init" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Init" component={InitialScreen} options={{ headerShown: false }} />
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
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
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
        <Stack.Screen
          name="Alert"
          component={AlertScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: '알림',
            headerLeft: () => (
              <TouchableOpacity className="mr-4" onPress={() => navigation.goBack()}>
                <ArrowLeftIcon name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Chart"
          component={ChartScreen}
          options={({ navigation }) => ({
            headerShown: true,
            title: `${YearFormat()} 레포트`,
            headerLeft: () => (
              <TouchableOpacity className="mr-4" onPress={() => navigation.goBack()}>
                <ArrowLeftIcon name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen name="이동 기록" component={MoveRecord} options={{ headerShown: true }} />
        <Stack.Screen name="보호 구역 등록 (1/3)" component={EnrollSafeArea} options={{ headerShown: true }} />
        <Stack.Screen name="현재 위치" component={NowLocation} options={{ headerShown: true }} />
        <Stack.Screen name="보호구역 목록" component={SafeAreaList} options={{ headerShown: true }} />
        <Stack.Screen name="보호구역 등록(2/3) | 주소" component={SetAddress} options={{ headerShown: true }} />
        <Stack.Screen name="보호구역 등록(3/3) | 반경" component={SetArea} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
