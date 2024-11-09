import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { StyleSheet, ToastAndroid, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import Pin from '@/assets/svgs/pin.svg';
import Button from '@/components/buttons/Button';
import GeofenceRadius from '@/components/GeofenceRadius';
import location from '@/services/location';
import { keys } from '@/tanstackQuery/keys';
import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

type SafeAreaListProps = NativeStackScreenProps<RootStackParamList, '보호 구역 등록 (1/3)'>['navigation'];

const SetArea = ({ navigation }: { navigation: SafeAreaListProps }) => {
  const { latitude, longitude, latitudeDelta, longitudeDelta, radius, setRadius, name, danger, nowSelectedChild } =
    useRootStore();
  const queryClient = useQueryClient();
  const { mutate: makeBoundary } = useMutation({
    mutationFn: location.makeBoundary,
    onSuccess: () => {
      ToastAndroid.show('구역 등록 완료', 3000);
      // 보호구역 리스트 쿼리 키 무효화
      queryClient.invalidateQueries({
        queryKey: keys.getBoundary(nowSelectedChild?.id ?? 0),
      });
    },
    onError: () => {
      ToastAndroid.show('등록에 실패했습니다. 다시 시도해주세요.', 3000);
    },
  });

  const handleRadiusChange = (newRadius: number) => {
    setRadius(newRadius);
  };

  const handleNext = () => {
    if (!nowSelectedChild || !nowSelectedChild.id) {
      ToastAndroid.show('자녀 정보 불러오기 오류', 3000);
      return;
    }

    makeBoundary({
      childId: nowSelectedChild.id,
      name,
      danger,
      latitude,
      longitude,
      radius,
    });
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
