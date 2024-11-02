import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
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
    setRegistChildName,
    setRegistChildPhoneNumber,
    setRegistChildRelation,
  } = useRootStore();
  const [tempRelation, setTempRelation] = useState('');
  const [tempNum, setTempNum] = useState('');

  const formatPhNum = (phoneNum: string) => {
    const match = phoneNum.match(/^(\d{3})(\d{3,4})(\d{4})$/);
    return match ? `${match[1]}-${match[2]}-${match[3]}` : phoneNum;
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

    return relation;
    // setRegistChildRelation(relation as RelationShip);
  };

  const handleNext = () => {
    setRegistChildRelation(handleRelationShip(tempRelation) as RelationShip);
    setRegistChildPhoneNumber(formatPhNum(tempNum));
    navigation.navigate('RegisterQRcode');
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
        {/* 프로필 사진 안받음 */}
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
          value={tempNum}
          onChangeText={(text: string) => setTempNum(text)}
          size="fill"
          label="자녀 전화번호"
          placeholder=""
          className={`w-full mb-4 ${GAP}`}
        />
        <LabeledInput
          onChangeText={text => setTempRelation(text)}
          value={tempRelation}
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
