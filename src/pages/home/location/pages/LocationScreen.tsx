import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Card from '@/components/Card';
import GoogleMapView from '@/components/location/MapView';
import ScreenContainer from '@/components/ScreenContainer';

const LocationScreen = () => {
  // const location = useChildLocation; 자녀 위치 받아오는 쿼리 훅
  const [location, setLocation] = useState({ lat: 37.541, lng: 126.986 });

  return (
    <ScreenContainer bgColor="white" isPadding={false}>
      <GoogleMapView lat={location.lat} lng={location.lng} />
      <View className="top-7">
        <Card>
          <View className="gap-2 p-1">
            <View className="flex-row justify-between">
              <Text className="text-my_primary">현위치</Text>
              <Text className="text-gray-400">14시 56분</Text>
            </View>
            <Text className="text-base font-base text-gray-600">광주광역시 광산구 임방울대로 32</Text>
          </View>
        </Card>
      </View>
      <View className="absolute bottom-8 right-4 gap-4">
        <TouchableOpacity
          style={[styles.shadow]}
          className="bg-white w-12 h-12 rounded-[8px] justify-center items-center">
          <Text className="text-black font-base pb-0 m-0">이동</Text>
          <Text className="text-black font-base pb-0.5 m-0">기록</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.shadow]}
          className="bg-my_secondary w-12 h-12 rounded-[8px] justify-center items-center">
          <Text className="text-white font-base pb-0 m-0">보호</Text>
          <Text className="text-white font-base pb-0.5 m-0">구역</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#646464',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 32,
  },
});
