import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Button from '@/components/buttons/Button';
import Input from '@/components/inputs/Input';
import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

type SafeAreaListProps = NativeStackScreenProps<RootStackParamList, '보호 구역 등록 (1/3)'>['navigation'];

const SelectButton = ({ label, isSelected, onPress }: { label: string; isSelected: boolean; onPress: () => void }) => (
  <TouchableOpacity
    onPress={onPress}
    className={`
        w-1/2 px-6 py-2 rounded-lg mr-2 border justify-center items-center
        ${isSelected ? 'bg-my_primary border-my_primary' : 'bg-white border-gray-200'}
      `}>
    <Text
      className={`
        text-base
        ${isSelected ? 'text-white' : 'text-gray-200'}
      `}>
      {label}
    </Text>
  </TouchableOpacity>
);

const EnrollSafeArea = ({ navigation }: { navigation: SafeAreaListProps }) => {
  const { name, danger, setDanger, setBoundaryName, setRadius } = useRootStore();

  const handleNext = () => {
    console.log('EnrollSafeArea에서 설정한 구역명 : ', name);
    console.log('EnrollSafeArea에서 설정한 위험여부 : ', danger);
    navigation.navigate('보호구역 등록(2/3) | 주소');
  };

  useEffect(() => {
    setBoundaryName('');
    setDanger(false);
    setRadius(50);
  }, []);

  return (
    <View className="flex-1 p-8 justify-between">
      <View>
        <View className="mb-12">
          <Text className="text-lg mb-3 text-black">구역 유형</Text>
          <View className="flex-row justify-center w-full items-center">
            <SelectButton label="안전" isSelected={!danger} onPress={() => setDanger(false)} />
            <SelectButton label="위험" isSelected={danger} onPress={() => setDanger(true)} />
          </View>
        </View>
        <View>
          <Text className="text-lg mb-3 text-black">구역명</Text>
          <Input value={name} onChangeText={(text: string) => setBoundaryName(text)}></Input>
        </View>
      </View>
      <Button onPress={handleNext} myTextStyle="text-white">
        다음
      </Button>
    </View>
  );
};

export default EnrollSafeArea;
