import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

import Button from '@/components/buttons/Button';
import GoogleMapView from '@/components/location/MapView';
import { RootStackParamList } from '@/types/navigation';

type SafeAreaListProps = NativeStackScreenProps<RootStackParamList, '보호 구역 등록 (1/3)'>['navigation'];

const SetAddress = ({ navigation }: { navigation: SafeAreaListProps }) => {
  return (
    <View className="flex-1">
      <GoogleMapView lat={37.541} lng={126.986}></GoogleMapView>
      <View className="absolute top-8 w-full px-8">
        <TextInput
          className="w-full text-lg p-4 rounded-full h-14 text-white"
          style={{ backgroundColor: 'rgba(30, 30, 30, 0.7)' }}></TextInput>
      </View>
      <View className="absolute bottom-8 w-full px-8">
        <Button onPress={() => navigation.navigate('보호구역 등록(3/3) | 반경')} size={'fill'} myTextStyle="text-white">
          주소 등록
        </Button>
      </View>
    </View>
  );
};

export default SetAddress;
