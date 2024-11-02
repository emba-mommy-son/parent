import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import LocationScreen from './pages/LocationScreen';

const Stack = createNativeStackNavigator();
const LocationStack = () => {
  return (
    <Stack.Navigator initialRouteName="LocationScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LocationScreen" component={LocationScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default LocationStack;
