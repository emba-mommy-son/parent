import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import Card from '@/components/Card';
import CardCover from '@/components/CardCover';
import useGeocoding from '@/hooks/useGeocoding';
import { DEFAULT_LOCATION } from '@/pages/location/pages/LocationScreen';
import { useChildLocation } from '@/tanstackQuery/queries/location';
import { RootTabParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

const DEFAULT_MAP_REGION = {
  latitude: DEFAULT_LOCATION.latitude,
  longitude: DEFAULT_LOCATION.longitude,
  latitudeDelta: 0.001,
  longitudeDelta: 0.001,
};

const LocationCard = () => {
  const navigation = useNavigation<BottomTabNavigationProp<RootTabParamList, 'LocationStack'>>();
  const { nowSelectedChild } = useRootStore();
  const { reverseGeocode, address } = useGeocoding();
  const locationData = useChildLocation(nowSelectedChild?.id ?? 0);
  const [loca, setLoca] = useState<GetChildLocationResponseDto | null>(null);

  useEffect(() => {
    if (locationData?.[0]) {
      setLoca(locationData[0]);
      reverseGeocode(locationData[0].latitude, locationData[0].longitude);
    }
  }, [locationData]);

  return (
    <Card isPadding={false}>
      <Pressable onPress={nowSelectedChild ? () => navigation.navigate('LocationStack') : undefined} className="p-4">
        <View className="flex flex-row justify-between">
          <View className="flex flex-row">
            <Text className="text-black">최근 위치</Text>
          </View>
          <View className="flex flex-row items-center">
            <Text className="mb-1 mr-0.5 text-[#aaaaaa]">상세</Text>
            <AntDesign name="right" size={14} style={{ color: '#cacaca' }} />
          </View>
        </View>
        <View className="relative flex  gap-x-4 flex-row items-center p-1 mt-3">
          <View className="w-20 h-20 overflow-hidden rounded-lg">
            {locationData?.length === 0 && <View className="absolute w-20 z-10 h-20 bg-[#ffffff] opacity-80"></View>}
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={
                locationData && locationData[0]
                  ? {
                      latitude: locationData?.[0]?.latitude,
                      longitude: locationData?.[0]?.longitude,
                      latitudeDelta: 0.01,
                      longitudeDelta: 0.01,
                    }
                  : DEFAULT_MAP_REGION
              }
              followsUserLocation={true}
              scrollDuringRotateOrZoomEnabled={false}
              scrollEnabled={false}
              rotateEnabled={false}
              pitchEnabled={false}
            />
            <Entypo
              name="location-pin"
              size={36}
              style={{
                color: '#FF5185',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: [{ translateX: -18 }, { translateY: -28 }],
              }}
            />
          </View>

          <View>
            {/* <Text className="text-black text-base">
              {loca ? address?.split(' ').splice(0, 2).join(' ') : '위치 기록이 없습니다'}
            </Text> */}
            {/* <Text className="text-black text-base">{loca ? address?.split(' ').splice(2).join(' ') : ''}</Text> */}
            <Text className="text-black text-base">
              {locationData?.length !== 0 ? address?.split(' ').splice(2, 2).join(' ') : '등록된 정보가 없습니다.'}
            </Text>
            <Text className="text-black text-base">
              {locationData?.length !== 0 ? address?.split(' ').splice(4).join(' ') : ''}
            </Text>
          </View>
        </View>
        {!nowSelectedChild && <CardCover height={124} text="자녀의 실시간 위치를 확인할 수 있습니다" />}
      </Pressable>
    </Card>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#646464',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 32,
  },
  map: {
    position: 'absolute',
    top: -30,
    left: -30,
    right: -30,
    bottom: -30,
  },
});
