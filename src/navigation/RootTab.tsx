import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import TabBar from '@/components/bottomTab/Tabbar';

import AnalysysScreen from '../pages/analysys/page/AnalysysScreen';
import HomeScreen from '../pages/home/pages/HomeScreen';
import LocationScreen from '../pages/location/pages/LocationScreen';
import SettingScreen from '../pages/setting/pages/SettingScreen';

const Tab = createBottomTabNavigator();

const RootTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
      <Tab.Screen name="Location" component={LocationScreen} options={{ title: '위치' }} />
      <Tab.Screen name="Analysys" component={AnalysysScreen} options={{ title: '분석' }} />
      <Tab.Screen name="Setting" component={SettingScreen} options={{ title: '설정' }} />
    </Tab.Navigator>
  );
};

export default RootTab;
