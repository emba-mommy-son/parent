import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';

import Button from '@/components/buttons/Button';
import LabeledInput from '@/components/inputs/LabeledInput';
import ScreenContainer from '@/components/ScreenContainer';
import { RootStackParamList } from '@/types/navigation';
import useRootStore from '@/zustand';

type RegisterInfoScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'RegisterInfo'>['navigation'];

const GAP = 'mb-12';
const RegisterInfoScreen = ({ navigation }: { navigation: RegisterInfoScreenNavigationProp }) => {
  const {
    registChildName,
    registChildPhoneNumber,
    registChildRelation,
    setRegistChildName,
    setRegistChildPhoneNumber,
    setRegistChildRelation,
  } = useRootStore();

  const handleNext = () => {
    navigation.navigate('RegisterQRcode');
  };

  const handleRelationShip = (text: string) => {
    let relation = '';
    switch (text) {
      case '부':
        relation = 'DAD';
        break;
      case '모':
        relation = 'MOM';
        break;
      default:
        relation = 'ETC';
        break;
    }

    setRegistChildRelation(relation as RelationShip);
  };

  return (
    <ScreenContainer barStyle="dark-content">
      <View className="flex-1 justify-start items-center">
        <LabeledInput
          value={registChildName}
          onChangeText={(text: string) => setRegistChildName(text)}
          size="fill"
          label="자녀 성명"
          placeholder=""
          className={`w-full mb-8 ${GAP}`}
        />
        {/* <View className={`flex items-start w-full mb-8 ${GAP}`}>
          <Text className="mb-4">프로필 이미지</Text>
          <Pressable onPress={showPicker} className="w-32 h-32 m-auto mb-4">
            {profileImage ? (
              <Image source={{ uri: profileImage }} className="w-full h-full rounded-full" />
            ) : (
              <View className="w-full h-full bg-gray-100 rounded-full justify-center items-center">
                <PlusIcon name="plus" size={24} color="gray" />
              </View>
            )}
          </Pressable>
        </View> */}
        <LabeledInput
          value={registChildPhoneNumber}
          onChangeText={(text: string) => setRegistChildPhoneNumber(text)}
          size="fill"
          label="자녀 전화번호"
          placeholder=""
          className={`w-full mb-4 ${GAP}`}
        />
        <LabeledInput
          value={registChildRelation}
          onChangeText={handleRelationShip}
          size="fill"
          label="관계(본인)"
          placeholder="부 / 모 / 기타"
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
