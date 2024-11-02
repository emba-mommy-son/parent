import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import TabBar from '@/components/bottomTab/Tabbar';
import AnalysisScreen from '@/pages/analysis/pages/AnalysisScreen';
import HomeScreen from '@/pages/home/pages/HomeScreen';
import LocationStack from '@/pages/location/LocationStack';
import SettingScreen from '@/pages/setting/pages/SettingScreen';

const Tab = createBottomTabNavigator();

const RootTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
      <Tab.Screen name="LocationStack" component={LocationStack} options={{ title: '위치' }} />
      <Tab.Screen name="Analysis" component={AnalysisScreen} options={{ title: '분석' }} />
      <Tab.Screen name="Setting" component={SettingScreen} options={{ title: '설정' }} />
    </Tab.Navigator>
  );
};

export default RootTab;
