import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import Pin from '@/assets/svgs/pin.svg';
import Button from '@/components/buttons/Button';
import GeofenceRadius from '@/components/GeofenceRadius';
import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

type SafeAreaListProps = NativeStackScreenProps<RootStackParamList, '보호 구역 등록 (1/3)'>['navigation'];

const SetArea = ({ navigation }: { navigation: SafeAreaListProps }) => {
  const { latitude, longitude, latitudeDelta, longitudeDelta, radius, setRadius } = useRootStore();
  const handleRadiusChange = (newRadius: number) => {
    setRadius(newRadius);
  };

  const handleNext = () => {
    navigation.navigate('RootTab');
  };

  return (
    <View className="flex-1">
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          scrollDuringRotateOrZoomEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          rotateEnabled={false}
          pitchEnabled={false}
        />
      </View>
      <View className="absolute top-8 left-0 right-0">
        <GeofenceRadius initialRadius={radius} onRadiusChange={handleRadiusChange} minRadius={10} maxRadius={200} />
      </View>
      <View className="absolute top-[50%] left-[50%] ml-[-15] mt-[-70]">
        <Pin />
      </View>
      <View className="absolute bottom-8 w-full px-8">
        <Button onPress={handleNext} size={'fill'} myTextStyle="text-white">
          완료
        </Button>
      </View>
    </View>
  );
};

export default SetArea;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
