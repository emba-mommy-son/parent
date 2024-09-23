import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home/HomeScreen';
import LocationScreen from './location/LocationScreen';
import AnalysysScreen from './analysys/AnalysysScreen';
import SettingScreen from './setting/SettingScreen';
import TabBar from '../components/common/Tabbar';

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
