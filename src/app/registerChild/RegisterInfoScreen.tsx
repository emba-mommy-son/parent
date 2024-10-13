import { View, Text, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import ScreenContainer from '@/components/common/ScreenContainer';
import Button from '@/components/common/buttons/Button';
import LabeledInput from '@/components/common/Inputs/LabeledInput';
import PlusIcon from 'react-native-vector-icons/Entypo';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/types/navigation';

const GAP: string = 'mb-12';
const RegisterInfoScreen = ({ navigation }: { navigation: NavigationProp<RootStackParamList> }) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const handleNext = () => {
    navigation.navigate('RegisterQRcode');
  };

  return (
    <ScreenContainer type="view" myScreenStyle="bg-white" barStyle="dark-content">
      <View className="flex-1 justify-start items-center">
        <LabeledInput size="fill" label="자녀 성명" placeholder="" className={`w-full mb-8 ${GAP}`} />
        <View className={`flex items-start w-full mb-8 ${GAP}`}>
          <Text className="mb-4">프로필 이미지</Text>
          <Pressable
            onPress={() => {
              console.log('first');
            }}
            className="w-20 h-20">
            {profileImage ? (
              <Image source={{ uri: profileImage }} className="w-full h-full rounded-full" />
            ) : (
              <View className="w-full h-full bg-gray-100 rounded-full justify-center items-center">
                <PlusIcon name="plus" size={24} color="gray" />
              </View>
            )}
          </Pressable>
        </View>
        <LabeledInput size="fill" label="전화번호" placeholder="" className={`w-full mb-4 ${GAP}`} />
        <LabeledInput
          size="fill"
          label="관계(본인)"
          placeholder="부 / 모 / 조부(모)"
          className={`w-full mb-4 ${GAP}`}
        />
      </View>
      <Button onPress={handleNext} type="secondary" myTextStyle="text-white">
        다음
      </Button>
    </ScreenContainer>
  );
};

export default RegisterInfoScreen;
