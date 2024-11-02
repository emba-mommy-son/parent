import Button from '@/components/buttons/Button';
import Input from '@/components/inputs/Input';
import LabeledInput from '@/components/inputs/LabeledInput';
import { RootStackParamList } from '@/types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

type SafeAreaListProps = NativeStackScreenProps<RootStackParamList, '보호 구역 등록 (1/3)'>['navigation'];

const SelectButton = ({ label, isSelected, onPress }: { label: string; isSelected: boolean; onPress: () => void }) => (
  <TouchableOpacity
    onPress={onPress}
    className={`
        w-1/2 px-6 py-2 rounded-xl mr-2 border justify-center items-center
        ${isSelected ? 'bg-gray-900 border-gray-900' : 'bg-white border-gray-300'}
      `}>
    <Text
      className={`
        text-base
        ${isSelected ? 'text-white' : 'text-gray-500'}
      `}>
      {label}
    </Text>
  </TouchableOpacity>
);

const EnrollSafeArea = ({ navigation }: { navigation: SafeAreaListProps }) => {
  const [selectedType, setSelectedType] = useState<'SAFE' | 'DANGER'>('SAFE');
  const [areaName, setAreaName] = useState('');

  return (
    <View className="flex-1 p-8 justify-between">
      <View>
        <View className="mb-12">
          <Text className="text-lg mb-3 text-black">구역 유형</Text>
          <View className="flex-row justify-center w-full items-center">
            <SelectButton label="안전" isSelected={selectedType === 'SAFE'} onPress={() => setSelectedType('SAFE')} />
            <SelectButton
              label="위험"
              isSelected={selectedType === 'DANGER'}
              onPress={() => setSelectedType('DANGER')}
            />
          </View>
        </View>
        <View>
          <Text className="text-lg mb-3 text-black">구역명</Text>
          <Input value={areaName} onChangeText={(text: string) => setAreaName(text)}></Input>
        </View>
      </View>
      <Button onPress={() => navigation.navigate('보호구역 등록(2/3) | 주소')} myTextStyle="text-white">
        다음
      </Button>
    </View>
  );
};

export default EnrollSafeArea;
