import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';

import Pin from '@/assets/svgs/pin.svg';
import Button from '@/components/buttons/Button';
import useGeocoding from '@/hooks/useGeocoding';
import usePlaceAuto from '@/hooks/usePlaceAuto';
import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

type SafeAreaListProps = NativeStackScreenProps<RootStackParamList, '보호 구역 등록 (1/3)'>['navigation'];

const SetAddress = ({ navigation }: { navigation: SafeAreaListProps }) => {
  const {
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
    setLatitude,
    setLongitude,
    setLatitudeDelta,
    setLongitudeDelta,
  } = useRootStore();
  const { address, coordinates, loading, error, reverseGeocode, geocode } = useGeocoding();
  const mapRef = useRef<MapView>(null);
  const [inputAddress, setInputAddress] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false); // 포커스 상태 추가

  const { suggestions, loading: suggestionsLoading, error: suggestionsError } = usePlaceAuto(inputAddress);

  const centerMap = () => {
    geocode(inputAddress);
    if (mapRef.current) {
      const region: Region = {
        latitude: coordinates?.latitude ?? latitude,
        longitude: coordinates?.longitude ?? longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      };
      setLatitudeDelta(0.001);
      setLongitude(0.001);
      mapRef.current.animateToRegion(region, 1000);
    }
  };

  const handleRegionChangeComplete = (region: Region) => {
    setLatitude(region.latitude);
    setLongitude(region.longitude);
    setLatitudeDelta(region.latitudeDelta);
    setLongitudeDelta(region.longitudeDelta);
  };

  const handleNext = () => {
    navigation.navigate('보호구역 등록(3/3) | 반경');
  };

  useEffect(() => {
    reverseGeocode(latitude, longitude);
  }, [latitude, longitude]);

  useEffect(() => {
    if (address) {
      setInputAddress(address.split(' ').slice(2).join(' '));
    }
  }, [address]);

  return (
    <View className="flex-1">
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          scrollDuringRotateOrZoomEnabled={false}
          onRegionChangeComplete={handleRegionChangeComplete}
        />
      </View>
      <View className="absolute top-[50%] left-[50%] ml-[-15] mt-[-70]">
        <Pin />
      </View>
      <View
        className="absolute flex-row justify-between items-center top-8 left-0 right-0 bg-white px-2  mx-4 rounded-xl"
        style={{ elevation: 10 }}>
        <TextInput
          value={inputAddress}
          onChangeText={text => setInputAddress(text)}
          className="w-[80%] text-lg p-4 rounded-full h-14 text-black"
          placeholder="주소 입력"
          onFocus={() => setIsInputFocused(true)} // 포커스 상태 업데이트
          onBlur={() => setIsInputFocused(false)} // 포커스 해제 시 상태 업데이트
        />
        <TouchableOpacity onPress={centerMap}>
          <View className="bg-my_secondary p-2 px-3 rounded-lg justify-center items-center">
            <Text className="text-white pb-1">이동</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* 추천 주소 목록 표시 (포커스 상태일 때만 표시) */}
      {isInputFocused && suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={item => item.place_id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setInputAddress(item.description)}>
              <Text style={styles.suggestion}>{item.description}</Text>
            </TouchableOpacity>
          )}
          style={styles.suggestionsContainer}
        />
      )}
      <View className="absolute bottom-8 w-full px-8">
        <Button onPress={handleNext} size="fill" myTextStyle="text-white">
          주소 등록
        </Button>
      </View>
    </View>
  );
};

export default SetAddress;

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
  suggestionsContainer: {
    position: 'absolute',
    top: 70,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    zIndex: 10,
  },
  suggestion: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
