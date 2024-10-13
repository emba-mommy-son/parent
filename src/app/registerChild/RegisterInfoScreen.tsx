import { View, Text, Pressable } from 'react-native';
import React from 'react';
import ScreenContainer from '@/components/common/ScreenContainer';
import Button from '@/components/common/buttons/Button';
import LabeledInput from '@/components/common/Inputs/LabeledInput';
import PlusIcon from 'react-native-vector-icons/Entypo';

const RegisterInfoScreen = () => {
  return (
    <ScreenContainer myScreenStyle="bg-white" barStyle="dark-content">
      <View className="flex-1 justify-center items-center">
        <LabeledInput size="fill" label="자녀 성명" placeholder="" className="w-full mb-4" />
        <View className="flex items-start w-full">
          <Text>프로필 이미지</Text>
          <Pressable className="w-20 h-20">
            <View className="w-full h-full bg-gray-100 rounded-full justify-center items-center">
              <PlusIcon name="plus" size={24} color="gray" />
            </View>
          </Pressable>
        </View>
        <LabeledInput size="fill" label="전화번호" placeholder="" className="w-full mb-4" />
        <LabeledInput size="fill" label="관계(본인)" placeholder="" className="w-full mb-4" />
      </View>
      <Button type="secondary" myTextStyle="text-white">
        다음
      </Button>
    </ScreenContainer>
  );
};

export default RegisterInfoScreen;
