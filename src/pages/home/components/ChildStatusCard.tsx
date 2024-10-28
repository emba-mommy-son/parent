import { useNavigation } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import unknown_person from '@/assets/images/unknown_person.jpg';
import Card from '@/components/Card';
import { RootStackParamList } from '@/types/navigation';

interface ChildStatusCardProps {
  nowSelectedChild: ChildInfo;
}

const ChildStatusCard = ({ nowSelectedChild }: ChildStatusCardProps) => {
  const isLogin = true;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const data = {
    status: '건강한 상태',
    text: '지난 밤 수면의 질이 좋습니다',
    score: 71,
  };

  return (
    <Card>
      {isLogin ? (
        <>
          <View className="flex flex-row items-start justify-between">
            <View className="max-w-[80%]">
              <Text className="text-base text-black mb-0.5">{data.status}</Text>
              <Text>{data.text}</Text>
            </View>
            <Image
              source={nowSelectedChild.profileImage ? { uri: nowSelectedChild.profileImage } : unknown_person}
              width={30}
              height={30}
              className="rounded-full w-12 h-12"
            />
          </View>
          <View className="flex flex-row justify-between items-end mt-6 mb-2">
            <Text>score</Text>
            <View className="flex flex-row items-end">
              <Text className="text-black text-base mb-[-2px]">{data.score}</Text>
              <Text className="text-xs">/100</Text>
            </View>
          </View>
          <View className="w-full bg-black rounded-full h-2">
            <View
              className={`bg-my_primary h-2 ${Number(data.score) === 100 ? 'rounded-full' : 'rounded-l-full'}`}
              style={{ width: `${data.score}%` }}></View>
          </View>
        </>
      ) : (
        <>
          <View>
            <Text className="text-base text-black mb-2">자녀 등록하러 가기</Text>
            <Text className="text-xs text-[#aaaaaa]">자녀의 기기에 마미손(자녀용)이 설치되어 있어야 합니다</Text>
          </View>
          <View className="flex justify-center items-center mt-6 mb-2.5">
            <TouchableOpacity onPress={() => navigation.navigate('RegisterInfo')}>
              <Text className="text-xs text-center text-white bg-my_secondary px-5 py-1.5 rounded-[5px]">등록하기</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Card>
  );
};

export default ChildStatusCard;
