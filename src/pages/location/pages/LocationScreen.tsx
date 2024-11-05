import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import Pin from '@/assets/svgs/pin.svg';
import Card from '@/components/Card';
import ScreenContainer from '@/components/ScreenContainer';
import useGeocoding from '@/hooks/useGeocoding';
import { useChildLocation } from '@/tanstackQuery/queries/location';
import { LocationScreenProps } from '@/types/navigation';
import useRootStore from '@/zustand';

// 기본 위치 상수 정의
export const DEFAULT_LOCATION: GeofenceDto = {
  boundaryId: 0,
  latitude: 35.19070647667026,
  longitude: 126.82393808031838,
  danger: false,
  radius: 0,
  createdAt: '',
};

export const DEFAULT_MAP_REGION = {
  latitude: DEFAULT_LOCATION.latitude,
  longitude: DEFAULT_LOCATION.longitude,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const LocationScreen = ({ navigation }: { navigation: LocationScreenProps }) => {
  const { nowSelectedChild } = useRootStore();
  const { reverseGeocode, address } = useGeocoding();
  const locationData = useChildLocation(nowSelectedChild?.id ?? 0);

  useEffect(() => {
    const currentLocation = locationData?.[0] ?? DEFAULT_LOCATION;
    reverseGeocode(currentLocation.latitude, currentLocation.longitude);
  }, [locationData]);

  const renderLocationCard = () => {
    // const timestamp = locationData?.[0]?.createdAt || '';
    const displayAddress = address?.split(' ').slice(2).join(' ') ?? '주소를 가져오는 중입니다...';

    return (
      <Card>
        <View className="gap-2 p-1">
          <View className="flex-row justify-between">
            <Text className="text-my_primary">
              {locationData && locationData?.length > 0 ? '자녀의 마지막 위치' : '현재 사용자 위치'}
            </Text>
            {/* <Text className="text-gray-400">{timestamp || ''}</Text> */}
          </View>
          <Text className="text-base font-base text-gray-600">{displayAddress}</Text>
        </View>
      </Card>
    );
  };

  const renderActionButtons = () => (
    <View className="absolute bottom-8 right-4 gap-4">
      <TouchableOpacity
        onPress={() => navigation.navigate('이동 기록')}
        style={[styles.shadow]}
        className="bg-white w-12 h-12 rounded-[8px] justify-center items-center">
        <Text className="text-black font-base pb-0 m-0">이동</Text>
        <Text className="text-black font-base pb-0.5 m-0">기록</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('보호구역 목록')}
        style={[styles.shadow]}
        className="bg-my_secondary w-12 h-12 rounded-[8px] justify-center items-center">
        <Text className="text-white font-base pb-0 m-0">보호</Text>
        <Text className="text-white font-base pb-0.5 m-0">구역</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScreenContainer bgColor="white" isPadding={false}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={DEFAULT_MAP_REGION}
        followsUserLocation={true}
        scrollDuringRotateOrZoomEnabled={false}
        scrollEnabled={false}
        rotateEnabled={false}
        pitchEnabled={false}
      />
      <View className="absolute top-[50%] left-[50%] ml-[-15] mt-[-70]">
        <Pin />
      </View>
      <View className="top-7">{renderLocationCard()}</View>
      {renderActionButtons()}
    </ScreenContainer>
  );
};

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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default LocationScreen;
