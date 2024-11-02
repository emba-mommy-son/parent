import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import Button from '@/components/buttons/Button';
import GeofenceRadius from '@/components/GeofenceRadius';
import GoogleMapView from '@/components/location/MapView';
import { RootStackParamList } from '@/types/navigation';

type SafeAreaListProps = NativeStackScreenProps<RootStackParamList, '보호 구역 등록 (1/3)'>['navigation'];

const SetArea = ({ navigation }: { navigation: SafeAreaListProps }) => {
  const [geofenceData, setGeofenceData] = useState<GeofenceData>({
    center: {
      latitude: 37.541,
      longitude: 126.986,
    },
    radius: 50,
  });

  const handleRadiusChange = (newRadius: number) => {
    setGeofenceData(prev => ({
      ...prev,
      radius: newRadius,
    }));
  };

  return (
    <View className="flex-1">
      <GoogleMapView lat={37.541} lng={126.986}></GoogleMapView>
      <View className="absolute top-8 left-0 right-0">
        <GeofenceRadius
          initialRadius={geofenceData.radius}
          onRadiusChange={handleRadiusChange}
          minRadius={10}
          maxRadius={200}
        />
      </View>
      <View className="absolute bottom-8 w-full px-8">
        <Button onPress={() => navigation.navigate('RootTab')} size={'fill'} myTextStyle="text-white">
          완료
        </Button>
      </View>
    </View>
  );
};

export default SetArea;
